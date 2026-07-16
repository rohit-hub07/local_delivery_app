import React from 'react'
import { useAuthStore } from '../../context/AuthContext'
import { Button, Text } from 'react-native'

const ProfileScreen = () => {
  const { logout } = useAuthStore()
  return (
    <>
      <Text>ProfileScreen</Text>
      <Button title="Logout" onPress={async () => await logout()} />
    </>
  )
}

export default ProfileScreen