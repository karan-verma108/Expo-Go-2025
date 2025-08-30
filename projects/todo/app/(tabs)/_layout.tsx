import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'yellow',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopColor: 'yellow',
          paddingTop: 10,
          paddingBottom: 20,
          height: 70,
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'normal',
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Todos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='list' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='settings' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
