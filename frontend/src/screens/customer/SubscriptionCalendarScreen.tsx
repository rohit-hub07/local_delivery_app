import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { useCustomerSubscriptionStore, type CalendarDayType } from '../../context/customerContext/CustomerSubscriptionContext';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type CalendarRouteParams = {
  SubscriptionCalendar: {
    subscriptionId: string
  }
}

const WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export default function SubscriptionCalendarScreen() {
  const route = useRoute<RouteProp<CalendarRouteParams, 'SubscriptionCalendar'>>()
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const subscriptionId = route.params?.subscriptionId || ''
  const { calendar, calendarLoading, currentCalendarMonth, currentCalendarYear, fetchCalendar } = useCustomerSubscriptionStore()
  const [month, setMonth] = useState(currentCalendarMonth)
  const [year, setYear] = useState(currentCalendarYear)

  useEffect(() => {
    if (subscriptionId) {
      loadCalendar(month, year)
    }
  }, [subscriptionId])

  const loadCalendar = async (targetMonth: number, targetYear: number) => {
    try {
      await fetchCalendar(subscriptionId, targetMonth, targetYear)
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to load calendar')
    }
  }

  const goToPrevMonth = () => {
    let newMonth = month - 1
    let newYear = year
    if (newMonth < 1) {
      newMonth = 12
      newYear = year - 1
    }
    setMonth(newMonth)
    setYear(newYear)
    loadCalendar(newMonth, newYear)
  }

  const goToNextMonth = () => {
    let newMonth = month + 1
    let newYear = year
    if (newMonth > 12) {
      newMonth = 1
      newYear = year + 1
    }
    setMonth(newMonth)
    setYear(newYear)
    loadCalendar(newMonth, newYear)
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const getDayStyle = (item: CalendarDayType) => {
    if (item.isUpcoming && item.isCurrentMonth) {
      return { ...styles.calendarCell, backgroundColor: '#F1F5F9' }
    }
    if (item.requestType === 'SKIP' && item.isSkipped) {
      return { ...styles.calendarCell, backgroundColor: '#FEE2E2' }
    }
    if (!item.isDelivered && item.isCurrentMonth) {
      return { ...styles.calendarCell, backgroundColor: '#FEF3C7' }
    }
    if (item.isDelivered && item.isCurrentMonth) {
      return { ...styles.calendarCell, backgroundColor: '#DCFCE7' }
    }
    return { ...styles.calendarCell, backgroundColor: '#F8FAFC' }
  }

  const getDayTextStyle = (item: CalendarDayType) => {
    if (!item.isCurrentMonth) {
      return styles.dayTextOuter
    }
    if (item.isUpcoming) {
      return styles.dayTextUpcoming
    }
    if (item.requestType === 'SKIP' && item.isSkipped) {
      return styles.dayTextSkipped
    }
    if (!item.isDelivered) {
      return styles.dayTextPending
    }
    return styles.dayTextActive
  }

  const renderDayQuantity = (item: CalendarDayType) => {
    if (!item.isCurrentMonth || item.isUpcoming) {
      return <Text style={styles.dayQuantityOuter}>{item.quantity}</Text>
    }
    if (item.requestType === 'SKIP' && item.isSkipped) {
      return <Text style={styles.dayQuantitySkipped}>{item.quantity}</Text>
    }
    if (!item.isDelivered) {
      return <Text style={styles.dayQuantityPending}>{item.quantity}</Text>
    }
    return <Text style={styles.dayQuantityActive}>{item.quantity}</Text>
  }

  const renderCell = ({ item }: { item: CalendarDayType }) => {
    if (!item.isCurrentMonth) {
      return (
        <View style={getDayStyle(item)}>
          <Text style={styles.dayTextOuter}>{item.dayNumber}</Text>
          <Text style={styles.dayQuantityOuter}>{item.quantity}</Text>
        </View>
      )
    }

    return (
      <TouchableOpacity
        style={getDayStyle(item)}
        activeOpacity={0.8}
        onPress={() => {
          if (item.isCurrentMonth && !item.isUpcoming) {
            Alert.alert(
              `${item.date}`,
              `Quantity: ${item.quantity}\nStatus: ${item.requestType ?? 'Regular'}\nDelivered: ${item.isDelivered ? 'Yes' : 'No'}`
            )
          }
        }}
      >
        <Text style={getDayTextStyle(item)}>{item.dayNumber}</Text>
        {renderDayQuantity(item)}
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Delivery Calendar</Text>
        <View style={styles.monthRow}>
          <TouchableOpacity style={styles.monthButton} onPress={goToPrevMonth} activeOpacity={0.8}>
            <Text style={styles.monthButtonText}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.monthLabel}>
            {monthNames[month - 1]} {year}
          </Text>
          <TouchableOpacity style={styles.monthButton} onPress={goToNextMonth} activeOpacity={0.8}>
            <Text style={styles.monthButtonText}>›</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.calendarContainer}>
        <View style={styles.weekRow}>
          {WEEK_DAYS.map((day) => (
            <View key={day} style={styles.weekCell}>
              <Text style={styles.weekText}>{day}</Text>
            </View>
          ))}
        </View>

        {calendarLoading ? (
          <View style={styles.calendarLoading}>
            <ActivityIndicator size="small" color="#2563EB" />
            <Text style={styles.calendarLoadingText}>Loading calendar…</Text>
          </View>
        ) : (
          <FlatList
            data={calendar}
            keyExtractor={(item) => item.date}
            renderItem={renderCell}
            numColumns={7}
            contentContainerStyle={styles.calendarGrid}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            ListEmptyComponent={
              <View style={styles.calendarEmpty}>
                <Text style={styles.calendarEmptyText}>No calendar data available.</Text>
              </View>
            }
          />
        )}
      </View>

      <View style={styles.legendRow}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#DCFCE7' }]} />
          <Text style={styles.legendText}>Delivered</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#FEE2E2' }]} />
          <Text style={styles.legendText}>Skipped</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#FEF3C7' }]} />
          <Text style={styles.legendText}>Pending</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#F1F5F9' }]} />
          <Text style={styles.legendText}>Upcoming</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6FB' },
  header: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 14 },
  headerTitle: { fontSize: 24, fontWeight: '800', color: '#0F172A', letterSpacing: -0.5 },
  monthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#EEF1F8'
  },
  monthButton: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0'
  },
  monthButtonText: { fontSize: 22, fontWeight: '800', color: '#2563EB' },
  monthLabel: { fontSize: 18, fontWeight: '800', color: '#0F172A' },

  calendarContainer: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EEF1F8',
    padding: 12
  },
  weekRow: { flexDirection: 'row', marginBottom: 8 },
  weekCell: { flex: 1, alignItems: 'center', paddingVertical: 8 },
  weekText: { fontSize: 13, fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: 0.3 },

  calendarGrid: { paddingBottom: 12 },
  calendarRow: { flexDirection: 'row' },
  calendarCell: {
    width: '13.28%',
    aspectRatio: 1,
    margin: 2,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EEF1F8'
  },
  dayTextOuter: { fontSize: 12, fontWeight: '700', color: '#CBD5E1' },
  dayTextUpcoming: { fontSize: 12, fontWeight: '700', color: '#64748B' },
  dayTextSkipped: { fontSize: 12, fontWeight: '700', color: '#991B1B' },
  dayTextPending: { fontSize: 12, fontWeight: '700', color: '#92400E' },
  dayTextActive: { fontSize: 12, fontWeight: '800', color: '#0F172A' },

  dayQuantityOuter: { fontSize: 9, fontWeight: '700', color: '#CBD5E1', marginTop: 2 },
  dayQuantityUpcoming: { fontSize: 9, fontWeight: '700', color: '#64748B', marginTop: 2 },
  dayQuantitySkipped: { fontSize: 9, fontWeight: '800', color: '#991B1B', marginTop: 2 },
  dayQuantityPending: { fontSize: 9, fontWeight: '800', color: '#92400E', marginTop: 2 },
  dayQuantityActive: { fontSize: 9, fontWeight: '800', color: '#2563EB', marginTop: 2 },

  calendarLoading: { paddingVertical: 40, alignItems: 'center', gap: 10 },
  calendarLoadingText: { color: '#475569', fontSize: 14, fontWeight: '600' },
  calendarEmpty: { paddingVertical: 40, alignItems: 'center' },
  calendarEmptyText: { color: '#475569', fontSize: 14, fontWeight: '600' },

  legendRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 16,
    gap: 8
  },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendDot: { width: 12, height: 12, borderRadius: 6 },
  legendText: { fontSize: 12, fontWeight: '700', color: '#475569' }
})
