import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../constant/TabBar'

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // 👈 ซ่อนทุกหน้า
      }}
      tabBar={props => <TabBar {...props} />}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: "Home"
        }}
      />
      <Tabs.Screen
        name='Activity'
        options={{
          title: "Activity"
        }}
      />
      <Tabs.Screen
        name='Profile'
        options={{
          title: "Profile"
        }}
      />
    </Tabs>
  )
}

export default _layout
