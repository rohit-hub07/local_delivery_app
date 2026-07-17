import React from 'react'
import { useAuthStore } from '../../context/AuthContext'
import { Button, Text } from 'react-native'
import { useVendorContextStore } from '../../context/VendorContext'

const ProfileScreen = () => {
  const { logout } = useAuthStore()
  const {vendorAccount} = useVendorContextStore()
  
  return (
    <>
      <Text>ProfileScreen</Text>
      <Text>{vendorAccount?.businessPhone}</Text>
      <Text>{vendorAccount?.businessName}</Text>
      <Text>{vendorAccount?.user?.phone}</Text>
      <Text>{vendorAccount?.user?.address}</Text>
      <Button title="Logout" onPress={async () => await logout()} />
    </>
  )
}

export default ProfileScreen