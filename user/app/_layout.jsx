import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs
    TabBar={props=> <TabBar {...props} />}
    >
        <Tabs.Screen
            name='index'
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