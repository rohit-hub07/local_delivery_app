import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  Animated,
  Pressable,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useProductStore } from '../../context/ProductContext'

// ---------------------------------------------------------------------------
// Design tokens — 8dp spacing scale + a small, consistent color palette.
// Centralizing these makes the screen easy to re-theme later.
// ---------------------------------------------------------------------------
const SPACING = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 40 }

const COLORS = {
  background: '#F7F8FA',
  surface: '#FFFFFF',
  border: '#E7E9EC',
  primary: '#3366FF',
  primaryPressed: '#274FCC',
  danger: '#E5484D',
  dangerSurface: '#FDECEC',
  dangerPressed: '#C93F42',
  textPrimary: '#151824',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  overlay: 'rgba(15, 17, 26, 0.45)',
  white: '#FFFFFF',
}

const RADIUS = { sm: 8, md: 14, lg: 20, pill: 999 }

const ProductCard = ({ item, index, onDelete }: any) => {
  const anim = useRef(new Animated.Value(0)).current
  const pressScale = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 280,
      delay: Math.min(index, 8) * 35,
      useNativeDriver: true,
    }).start()
  }, [anim, index])

  const handlePressIn = () => {
    Animated.spring(pressScale, { toValue: 0.97, useNativeDriver: true, speed: 40, bounciness: 0 }).start()
  }
  const handlePressOut = () => {
    Animated.spring(pressScale, { toValue: 1, useNativeDriver: true, speed: 40, bounciness: 0 }).start()
  }

  return (
    <Animated.View
      style={{
        opacity: anim,
        transform: [
          { translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [12, 0] }) },
          { scale: pressScale },
        ],
      }}
    >
      <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} style={styles.productCard}>
        <View style={styles.productInfo}>
          <Text style={styles.productTitle} numberOfLines={1}>
            {item.productName}
          </Text>
          <Text style={styles.productDesc} numberOfLines={2}>
            {item.description}
          </Text>
        </View>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={`Delete ${item.productName}`}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          style={styles.deleteButton}
          onPress={() => onDelete(item.id)}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </Pressable>
    </Animated.View>
  )
}

export const MyProductsScreen = () => {
  const { allProducts, getAllProducts, addProduct, removeProduct } = useProductStore()
  const insets = useSafeAreaInsets()

  // Component Local States
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // Pull-to-refresh state, tracked separately from the first load
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Initial load state + error state, so the screen can show a proper
  // loading spinner and a retry-able error banner instead of a blank list.
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)

  // FAB press animation
  const fabScale = useRef(new Animated.Value(1)).current

  const loadProducts = useCallback(async () => {
    setLoadError(null)
    try {
      await getAllProducts()
    } catch (err: any) {
      setLoadError(err?.message || 'Unable to load your products.')
    }
  }, [getAllProducts])

  // Initial data pull on component mount
  useEffect(() => {
    let mounted = true
    ;(async () => {
      await loadProducts()
      if (mounted) setIsInitialLoading(false)
    })()
    return () => {
      mounted = false
    }
  }, [loadProducts])

  // Callback function triggered during down-scroll pull gesture
  const handleOnRefresh = useCallback(async () => {
    setIsRefreshing(true)
    await loadProducts()
    setIsRefreshing(false)
  }, [loadProducts])

  // Cache rendering matrix computations
  const memoizedProducts = useMemo(() => allProducts, [allProducts])

  const handleAddProduct = async () => {
    if (!productName.trim() || !description.trim()) {
      setErrorMessage('Please fill out all fields.')
      return
    }

    setErrorMessage(null)
    setIsSubmitting(true)

    try {
      await addProduct({ productName, description })
      setProductName('')
      setDescription('')
      setIsModalOpen(false)
    } catch (error: any) {
      setErrorMessage(error.message || 'Something went wrong.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = useCallback(
    (id: string) => {
      removeProduct(id)
    },
    [removeProduct]
  )

  const handleFabPressIn = () => {
    Animated.spring(fabScale, { toValue: 0.92, useNativeDriver: true, speed: 40, bounciness: 0 }).start()
  }
  const handleFabPressOut = () => {
    Animated.spring(fabScale, { toValue: 1, useNativeDriver: true, speed: 30, bounciness: 8 }).start()
  }

  // Reserve room at the bottom of the list so the FAB never sits on top of
  // the last card, and respect the device's safe-area inset.
  const fabBottomOffset = insets.bottom + SPACING.lg
  const listBottomPadding = fabBottomOffset + 56 /* fab size */ + SPACING.lg

  const renderContent = () => {
    if (isInitialLoading) {
      return (
        <View style={styles.centerState}>
          <ActivityIndicator color={COLORS.primary} size="large" />
          <Text style={styles.centerStateText}>Loading your products…</Text>
        </View>
      )
    }

    if (loadError && memoizedProducts.length === 0) {
      return (
        <View style={styles.centerState}>
          <View style={styles.errorIconCircle}>
            <Text style={styles.errorIconText}>!</Text>
          </View>
          <Text style={styles.centerStateTitle}>Couldn't load products</Text>
          <Text style={styles.centerStateText}>{loadError}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={loadProducts}>
            <Text style={styles.retryButtonText}>Try again</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <FlatList
        data={memoizedProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContent,
          { paddingBottom: listBottomPadding },
          memoizedProducts.length === 0 && styles.listContentEmpty,
        ]}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.centerState}>
            <View style={styles.emptyIconCircle}>
              <Text style={styles.emptyIconText}>+</Text>
            </View>
            <Text style={styles.centerStateTitle}>No products yet</Text>
            <Text style={styles.centerStateText}>
              Tap the button below to add your first product.
            </Text>
          </View>
        }
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleOnRefresh}
            colors={[COLORS.primary]}
            tintColor={COLORS.primary}
          />
        }
        renderItem={({ item, index }) => (
          <ProductCard item={item} index={index} onDelete={handleDelete} />
        )}
      />
    )
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top + SPACING.md }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Products</Text>
        {memoizedProducts.length > 0 && (
          <Text style={styles.headerSubtitle}>
            {memoizedProducts.length} {memoizedProducts.length === 1 ? 'item' : 'items'}
          </Text>
        )}
      </View>

      {renderContent()}

      {/* Floating Action Button — anchored above safe area, clear of the list */}
      <Animated.View
        style={[
          styles.fabWrapper,
          { bottom: fabBottomOffset, transform: [{ scale: fabScale }] },
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          accessibilityRole="button"
          accessibilityLabel="Add new product"
          style={styles.floatingButton}
          onPressIn={handleFabPressIn}
          onPressOut={handleFabPressOut}
          onPress={() => {
            setErrorMessage(null)
            setIsModalOpen(true)
          }}
        >
          <Text style={styles.floatingButtonText}>+</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Add Product Modal */}
      <Modal
        animationType="slide"
        transparent
        visible={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={[styles.modalContent, { paddingBottom: insets.bottom + SPACING.md }]}>
                <View style={styles.modalHandle} />
                <Text style={styles.modalTitle}>Add New Product</Text>
                <Text style={styles.modalSubtitle}>
                  Fill in the details below to add it to your catalog.
                </Text>

                {errorMessage && (
                  <View style={styles.errorBanner}>
                    <Text style={styles.errorText}>{errorMessage}</Text>
                  </View>
                )}

                <Text style={styles.inputLabel}>Product name</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="e.g. milk, water, newspaper..."
                  placeholderTextColor={COLORS.textTertiary}
                  value={productName}
                  onChangeText={setProductName}
                  editable={!isSubmitting}
                />

                <Text style={styles.inputLabel}>Description</Text>
                <TextInput
                  style={[styles.inputField, styles.inputMultiline]}
                  placeholder="Briefly describe the product"
                  placeholderTextColor={COLORS.textTertiary}
                  value={description}
                  onChangeText={setDescription}
                  multiline
                  textAlignVertical="top"
                  editable={!isSubmitting}
                />

                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    style={[styles.actionBtn, styles.cancelBtn]}
                    onPress={() => setIsModalOpen(false)}
                    disabled={isSubmitting}
                  >
                    <Text style={styles.cancelBtnText}>Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.actionBtn, styles.submitBtn, isSubmitting && styles.submitBtnDisabled]}
                    onPress={handleAddProduct}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <ActivityIndicator color={COLORS.white} size="small" />
                    ) : (
                      <Text style={styles.submitBtnText}>Add Product</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.md,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.textPrimary,
    letterSpacing: -0.4,
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textSecondary,
    marginBottom: 4,
  },

  // List
  listContent: {
    paddingTop: SPACING.xs,
  },
  listContentEmpty: {
    flexGrow: 1,
  },

  // Center states (loading / empty / error)
  centerState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.xxl,
  },
  centerStateTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginTop: SPACING.md,
    textAlign: 'center',
  },
  centerStateText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
    textAlign: 'center',
    lineHeight: 20,
  },
  emptyIconCircle: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyIconText: {
    fontSize: 28,
    fontWeight: '300',
    color: COLORS.primary,
  },
  errorIconCircle: {
    width: 56,
    height: 56,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.dangerSurface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorIconText: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.danger,
  },
  retryButton: {
    marginTop: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    paddingVertical: 12,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.primary,
    minHeight: 44,
    justifyContent: 'center',
  },
  retryButtonText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 14,
  },

  // Product card
  productCard: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#0F111A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  productInfo: {
    flex: 1,
    marginRight: SPACING.sm,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    letterSpacing: -0.2,
  },
  productDesc: {
    fontSize: 13.5,
    color: COLORS.textSecondary,
    marginTop: 3,
    lineHeight: 18,
  },
  deleteButton: {
    backgroundColor: COLORS.dangerSurface,
    paddingHorizontal: SPACING.sm + 4,
    minHeight: 44,
    minWidth: 44,
    borderRadius: RADIUS.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: COLORS.danger,
    fontWeight: '600',
    fontSize: 13,
  },

  // FAB
  fabWrapper: {
    position: 'absolute',
    right: SPACING.lg,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
  },
  floatingButton: {
    backgroundColor: COLORS.primary,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  floatingButtonText: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: '300',
    marginTop: -2,
  },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.surface,
    width: '100%',
    borderTopLeftRadius: RADIUS.lg,
    borderTopRightRadius: RADIUS.lg,
    padding: SPACING.lg,
    paddingTop: SPACING.sm,
  },
  modalHandle: {
    alignSelf: 'center',
    width: 36,
    height: 4,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.border,
    marginBottom: SPACING.md,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textPrimary,
    letterSpacing: -0.3,
  },
  modalSubtitle: {
    fontSize: 13.5,
    color: COLORS.textSecondary,
    marginTop: 4,
    marginBottom: SPACING.md,
  },
  errorBanner: {
    backgroundColor: COLORS.dangerSurface,
    padding: SPACING.sm + 2,
    borderRadius: RADIUS.sm,
    marginBottom: SPACING.md,
  },
  errorText: {
    color: COLORS.danger,
    fontSize: 13.5,
    fontWeight: '500',
  },
  inputLabel: {
    fontSize: 12.5,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginBottom: 6,
    marginLeft: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },
  inputField: {
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.background,
    borderRadius: RADIUS.sm,
    paddingHorizontal: SPACING.md,
    paddingVertical: 12,
    marginBottom: SPACING.md,
    fontSize: 15.5,
    color: COLORS.textPrimary,
    minHeight: 48,
  },
  inputMultiline: {
    height: 90,
    paddingTop: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: SPACING.sm,
    marginTop: SPACING.xs,
  },
  actionBtn: {
    paddingVertical: 12,
    paddingHorizontal: SPACING.lg,
    borderRadius: RADIUS.sm,
    minWidth: 96,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelBtn: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cancelBtnText: {
    color: COLORS.textSecondary,
    fontWeight: '600',
    fontSize: 14.5,
  },
  submitBtn: {
    backgroundColor: COLORS.primary,
  },
  submitBtnDisabled: {
    opacity: 0.7,
  },
  submitBtnText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 14.5,
  },
})