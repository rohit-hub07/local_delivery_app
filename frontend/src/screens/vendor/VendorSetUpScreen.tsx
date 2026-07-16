import React from 'react'
import { Text } from 'react-native'
import { Button } from 'react-native'
import { useAuthStore } from '../../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

interface VendorSetupScreenProps {
  onComplete: () => void;
}


const VendorSetUpScreen = ()=> {
  const { logout } = useAuthStore()
  return (
    <SafeAreaView>
      <View>
        <Text>VendorSetUpScreen</Text>
        <Button title="Logout" onPress={async () => await logout()} />
      </View>

    </SafeAreaView>
  )
}

export default VendorSetUpScreen