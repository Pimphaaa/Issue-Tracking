import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../components/TabBar'
const _layout = () => {
  return (
    <Tabs
        tabBar={proms=> <TabBar {...proms} />}
    >
        <Tabs.Screen
            name="Home"
            options={{
                title: "Home"
            }}
        />
        <Tabs.Screen
            name="Activity"
            options={{
                title: "Activity"
            }}
        />
        <Tabs.Screen
            name="Profile"
            options={{
                title: "Profile"
            }}
        />
    </Tabs> 
  )
}

export default _layout