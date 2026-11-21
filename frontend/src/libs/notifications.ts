import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export function handleNotificationResponse(response: Notifications.NotificationResponse) {
  const data = response.notification.request.content.data;
  return data;
}

export function handleNotificationReceived(
  notification: Notifications.Notification
) {
  const data = notification.request.content.data;
  return data;
}

async function dismissNotifications(identifiers: string[]) {
  if (identifiers.length === 0) return

  const results = await Promise.allSettled(
    identifiers.map((identifier) => Notifications.dismissNotificationAsync(identifier))
  )

  results.forEach((result) => {
    if (result.status === "rejected") {
      console.log("Unable to dismiss request notification:", result.reason)
    }
  })
}

export async function dismissRequestNotification(requestId: string) {
  try {
    const presented = await Notifications.getPresentedNotificationsAsync()

    const identifiers = presented
      .filter((notification) => {
        const data = notification.request.content.data
        return data?.requestId === requestId && data?.type === "new_request"
      })
      .map((notification) => notification.request.identifier)

    await dismissNotifications(identifiers)
  } catch (error) {
    console.log("Error dismissing request notification:", error)
  }
}

export async function dismissStaleRequestNotifications(activeRequestIds: string[]) {
  try {
    const activeIds = new Set(activeRequestIds)
    const presented = await Notifications.getPresentedNotificationsAsync()

    const identifiers = presented
      .filter((notification) => {
        const data = notification.request.content.data
        return (
          data?.type === "new_request" &&
          typeof data?.requestId === "string" &&
          !activeIds.has(data.requestId)
        )
      })
      .map((notification) => notification.request.identifier)

    await dismissNotifications(identifiers)
  } catch (error) {
    console.log("Error reconciling request notifications:", error)
  }
}
