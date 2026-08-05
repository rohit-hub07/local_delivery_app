import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { Share, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system/legacy';
import * as Sharing from 'expo-sharing';
import * as WebBrowser from 'expo-web-browser';

interface DeliveryItem {
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  productName: string;
  baseQuantity: string;
  finalQuantity: string;
  requestType: string | null;
  requestMessage: string | null;
}

interface ReportData {
  reportDate: string;
  totalDeliveries: number;
  totalQuantity: string;
  deliveries: DeliveryItem[];
}

function formatDateTime(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function getRequestBadgeColor(type: string): { fill: number[]; text: number[] } {
  switch (type) {
    case 'INCREASE':
      return { fill: [220, 252, 231], text: [22, 163, 74] };
    case 'DECREASE':
      return { fill: [254, 243, 199], text: [217, 119, 6] };
    case 'NOTE':
      return { fill: [219, 234, 254], text: [29, 78, 216] };
    case 'SKIP':
      return { fill: [254, 226, 226], text: [220, 38, 38] };
    default:
      return { fill: [241, 245, 249], text: [100, 116, 139] };
  }
}

function uint8ArrayToBase64(uint8Array: Uint8Array): string {
  let binaryString = '';
  for (let i = 0; i < uint8Array.length; i++) {
    binaryString += String.fromCharCode(uint8Array[i]);
  }
  return btoa(binaryString);
}

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN_LEFT = 14;
const MARGIN_RIGHT = 14;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;
const MARGIN_TOP = 18;
const MARGIN_BOTTOM = 24;
const TABLE_HEADER_HEIGHT = 22;
const TABLE_ROW_HEIGHT = 22;
const TABLE_HEADER_COLOR = [79, 70, 229];
const TABLE_ALT_ROW_COLOR = [248, 250, 252];
const TABLE_BORDER_COLOR = [226, 232, 240];
const PRIMARY_COLOR = [79, 70, 229];
const TEXT_COLOR = [15, 23, 42];
const SUBTITLE_COLOR = [100, 116, 139];
const MUTED_COLOR = [148, 163, 184];
const WHITE = [255, 255, 255];

export async function generateAndDownloadReport(report: ReportData): Promise<void> {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  let page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let yPosition = PAGE_HEIGHT - MARGIN_TOP;
  let pageNum = 1;

  const drawHeader = () => {
    yPosition = PAGE_HEIGHT - MARGIN_TOP;

    page.drawLine({
      start: { x: MARGIN_LEFT, y: yPosition },
      end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: yPosition },
      color: rgb(0.94, 0.95, 0.98),
      thickness: 2,
    });
    yPosition -= 6;

    page.drawText("Today's Delivery Report", {
      x: PAGE_WIDTH / 2,
      y: yPosition,
      size: 20,
      font: fontBold,
      color: rgb(0.06, 0.09, 0.17),
      align: 'center',
    });
    yPosition -= 7;

    page.drawLine({
      start: { x: MARGIN_LEFT, y: yPosition },
      end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: yPosition },
      color: rgb(0.31, 0.27, 0.89),
      thickness: 0.8,
    });
    yPosition -= 8;
  };

  const drawFooter = () => {
    const footerY = MARGIN_BOTTOM - 4;
    page.drawText(`Page ${pageNum}`, {
      x: PAGE_WIDTH / 2,
      y: footerY,
      size: 8,
      font: font,
      color: rgb(0.58, 0.64, 0.72),
      align: 'center',
    });

    page.drawLine({
      start: { x: MARGIN_LEFT, y: footerY + 3 },
      end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: footerY + 3 },
      color: rgb(0.89, 0.91, 0.94),
      thickness: 0.3,
    });
  };

  const drawSummaryStats = () => {
    const statWidth = CONTENT_WIDTH / 2 - 4;
    const statHeight = 18;

    page.drawRectangle({
      x: MARGIN_LEFT,
      y: yPosition - statHeight,
      width: statWidth,
      height: statHeight,
      borderColor: rgb(0.89, 0.91, 0.94),
      borderWidth: 1,
      backgroundColor: rgb(0.94, 0.95, 0.98),
      borderRadius: 2,
    });

    page.drawText(String(report.totalDeliveries), {
      x: MARGIN_LEFT + statWidth / 2,
      y: yPosition - 12,
      size: 26,
      font: fontBold,
      color: rgb(0.31, 0.27, 0.89),
      align: 'center',
    });

    page.drawText('TOTAL DELIVERIES', {
      x: MARGIN_LEFT + statWidth / 2,
      y: yPosition - 20,
      size: 9,
      font: font,
      color: rgb(0.39, 0.45, 0.55),
      align: 'center',
    });

    page.drawRectangle({
      x: MARGIN_LEFT + statWidth + 8,
      y: yPosition - statHeight,
      width: statWidth,
      height: statHeight,
      borderColor: rgb(0.89, 0.91, 0.94),
      borderWidth: 1,
      backgroundColor: rgb(0.94, 0.95, 0.98),
      borderRadius: 2,
    });

    page.drawText(report.totalQuantity, {
      x: MARGIN_LEFT + statWidth + 8 + statWidth / 2,
      y: yPosition - 12,
      size: 26,
      font: fontBold,
      color: rgb(0.31, 0.27, 0.89),
      align: 'center',
    });

    page.drawText('TOTAL QUANTITY', {
      x: MARGIN_LEFT + statWidth + 8 + statWidth / 2,
      y: yPosition - 20,
      size: 9,
      font: font,
      color: rgb(0.39, 0.45, 0.55),
      align: 'center',
    });

    yPosition -= statHeight + 8;
  };

  const drawTable = () => {
    page.drawText('Delivery Details', {
      x: MARGIN_LEFT,
      y: yPosition,
      size: 11,
      font: fontBold,
      color: rgb(0.06, 0.09, 0.17),
    });
    yPosition -= 8;

    if (report.deliveries.length === 0) {
      page.drawText('No deliveries recorded for this date.', {
        x: PAGE_WIDTH / 2,
        y: yPosition + 10,
        size: 12,
        font: font,
        color: rgb(0.58, 0.64, 0.72),
        align: 'center',
      });
      yPosition += 20;
      return;
    }

    const colWidths = [110, 70, 130, 85, 45, 127];
    const headers = ['Customer', 'Phone', 'Address', 'Product', 'Qty', 'Request'];
    const headerX = MARGIN_LEFT;

    page.drawRectangle({
      x: MARGIN_LEFT,
      y: yPosition - TABLE_HEADER_HEIGHT,
      width: CONTENT_WIDTH,
      height: TABLE_HEADER_HEIGHT,
      backgroundColor: rgb(0.31, 0.27, 0.89),
    });

    let headerXPos = headerX + 3;
    for (let i = 0; i < headers.length; i++) {
      page.drawText(headers[i], {
        x: headerXPos,
        y: yPosition - 14,
        size: 8,
        font: fontBold,
        color: rgb(1, 1, 1),
      });
      headerXPos += colWidths[i];
    }

    const verticalLines = [MARGIN_LEFT];
    let vx = MARGIN_LEFT;
    for (let i = 0; i < colWidths.length; i++) {
      vx += colWidths[i];
      verticalLines.push(vx);
    }

    for (const vl of verticalLines) {
      page.drawLine({
        start: { x: vl, y: yPosition - TABLE_HEADER_HEIGHT },
        end: { x: vl, y: yPosition },
        color: rgb(0.27, 0.23, 0.81),
        thickness: 0.5,
      });
    }

    yPosition -= TABLE_HEADER_HEIGHT;

    report.deliveries.forEach((item, rowIndex) => {
      if (yPosition - TABLE_ROW_HEIGHT < MARGIN_BOTTOM) {
        page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
        pageNum++;
        yPosition = PAGE_HEIGHT - MARGIN_TOP;
        drawHeader();
        yPosition -= TABLE_HEADER_HEIGHT;
      }

      const rowY = yPosition - TABLE_ROW_HEIGHT;

      if (rowIndex % 2 === 1) {
        page.drawRectangle({
          x: MARGIN_LEFT,
          y: rowY,
          width: CONTENT_WIDTH,
          height: TABLE_ROW_HEIGHT,
          backgroundColor: rgb(0.97, 0.98, 0.99),
        });
      }

      page.drawLine({
        start: { x: MARGIN_LEFT, y: rowY },
        end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: rowY },
        color: rgb(0.89, 0.91, 0.94),
        thickness: 0.1,
      });

      for (const vl of verticalLines) {
        page.drawLine({
          start: { x: vl, y: rowY },
          end: { x: vl, y: rowY + TABLE_ROW_HEIGHT },
          color: rgb(0.89, 0.91, 0.94),
          thickness: 0.1,
        });
      }

      const isModified =
        item.requestType === 'INCREASE' || item.requestType === 'DECREASE';
      const qtyDisplay = isModified
        ? `${item.baseQuantity}->${item.finalQuantity}*`
        : item.finalQuantity;

      let requestLabel = '\u2014';
      if (item.requestType) {
        requestLabel = item.requestType;
      }
      const requestDetail = item.requestMessage
        ? `${requestLabel}: ${item.requestMessage}`
        : requestLabel;

      const rowData = [
        item.customerName,
        item.customerPhone,
        item.customerAddress,
        item.productName,
        qtyDisplay,
        requestDetail,
      ];

      let cellX = MARGIN_LEFT + 3;
      for (let col = 0; col < rowData.length; col++) {
        const textColor =
          col === 4 && isModified
            ? rgb(0.31, 0.27, 0.89)
            : col === 5 && item.requestType
              ? rgb(
                getRequestBadgeColor(item.requestType).text[0] / 255,
                getRequestBadgeColor(item.requestType).text[1] / 255,
                getRequestBadgeColor(item.requestType).text[2] / 255
              )
              : rgb(0.06, 0.09, 0.17);

        page.drawText(rowData[col], {
          x: cellX,
          y: rowY + 5,
          size: 9,
          font: font,
          color: textColor,
        });
        cellX += colWidths[col];
      }

      yPosition = rowY;
    });

    yPosition -= 6;
  };

  const drawFooterNote = () => {
    if (yPosition < MARGIN_BOTTOM + 20) {
      page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
      pageNum++;
      yPosition = PAGE_HEIGHT - MARGIN_TOP;
      drawHeader();
    }

    page.drawLine({
      start: { x: MARGIN_LEFT, y: yPosition },
      end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: yPosition },
      color: rgb(0.89, 0.91, 0.94),
      thickness: 0.3,
    });
    yPosition -= 5;

    page.drawText(
      '* Modified quantity shown for accepted increase/decrease requests  |  Generated on ' +
      formatDateTime(new Date()),
      {
        x: PAGE_WIDTH / 2,
        y: yPosition,
        size: 7,
        font: font,
        color: rgb(0.58, 0.64, 0.72),
        align: 'center',
      }
    );
  };

  drawHeader();
  drawSummaryStats();
  drawTable();
  drawFooterNote();

  drawFooter();

  const pdfBytes = await pdfDoc.save();
  const pdfBase64 = uint8ArrayToBase64(pdfBytes);
  const fileName = `Delivery_Report_${report.reportDate}.pdf`;
  const fileUri = `${FileSystem.documentDirectory}${fileName}`;

  await FileSystem.writeAsStringAsync(fileUri, pdfBase64, {
    encoding: FileSystem.EncodingType.Base64,
  });

  // Use expo-sharing instead of React Native Share for better PDF handling
  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(fileUri, {
      mimeType: 'application/pdf',
      dialogTitle: 'Share Delivery Report',
      UTI: 'com.adobe.pdf',
    });
  } else {
    throw new Error('Sharing is not available on this device');
  }
}