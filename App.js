import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DiscoverScreen from './src/screens/DiscoverScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import PlaceDetailsScreen from './src/screens/PlaceDetailsScreen';
import PlaceListScreen from './src/screens/PlaceListScreen';
import SplashScreen from './src/screens/SplashScreen';
import theme from './src/theme';

const RootStack = createNativeStackNavigator();

const MainTabs = ({ navigation }) => {
  const [route, setRoute] = React.useState('Home');
  const routes = ['Home', 'Discover', 'Favorites', 'Profile'];
  const Screens = {
    Home: HomeScreen,
    Discover: DiscoverScreen,
    Favorites: FavoritesScreen,
    Profile: ProfileScreen,
  };

  const Active = Screens[route] || HomeScreen;

  return (
    <View style={{ flex: 1 }}>
      <Active navigation={navigation} />

      <View style={{ height: 72, justifyContent: 'flex-end', backgroundColor: theme.colors.background }}>
        <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#E5E7EB' }}>
          {routes.map((r) => {
            const isFocused = route === r;
            return (
              <TouchableOpacity key={r} onPress={() => setRoute(r)} style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: isFocused ? theme.colors.primary : 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: isFocused ? '#fff' : '#6B7280' }}>{r.charAt(0)}</Text>
                </View>
                <Text style={{ fontSize: 12, color: isFocused ? theme.colors.primary : '#6B7280', marginTop: 4 }}>{r}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1200);
    return () => clearTimeout(t);
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.colors.primary },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '600' },
          contentStyle: { backgroundColor: theme.colors.background },
        }}
      >
        <RootStack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        <RootStack.Screen
          name="PlaceList"
          component={PlaceListScreen}
          options={({ route }) => ({ title: route?.params?.title || 'Places' })}
        />
        <RootStack.Screen
          name="PlaceDetails"
          component={PlaceDetailsScreen}
          options={({ route }) => ({ title: route?.params?.place?.name || 'Details' })}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
