import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const TabBar = ({ state, descriptors, navigation }) => {
  const primaryColor = '#0891b2';
  const greyColor = '#737373';

  // เพิ่มไอคอนสำหรับแต่ละ route.name
  const icons = {
    home: (props) => <FontAwesome name="home" size={26} {...props} />,
    activity: (props) => <FontAwesome name="line-chart" size={26} {...props} />,
    profile: (props) => <FontAwesome name="user" size={26} {...props} />,
  };

  // รายชื่อ route ที่ไม่อยากให้แสดงใน TabBar  
  const hiddenRoutes = ['_sitemap', '+not-found'];

  return (
    <View style={style.tabbar}>
      {state.routes
        .filter(route => !hiddenRoutes.includes(route.name)) // ซ่อน route พิเศษ
        .map((route, index) => {
          console.log('ROUTE NAME:', route.name);

          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ?? options.title ?? route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: 'center' }}
            >
              {icons[route.name] ? (
                icons[route.name]({
                  color: isFocused ? primaryColor : greyColor,
                })
              ) : (
                <FontAwesome name="question" size={26} color="red" />
              )}
              <Text style={{ color: isFocused ? primaryColor : greyColor }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

const style = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default TabBar;
