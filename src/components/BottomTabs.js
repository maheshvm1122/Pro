import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import theme from '../theme';

const BottomTabs = ({ state, descriptors, navigation }) => (
  <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#E5E7EB' }}>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const label = options.title || route.name;
      const isFocused = state.index === index;

      return (
        <TouchableOpacity
          key={route.key}
          onPress={() => navigation.navigate(route.name)}
          style={{ flex: 1, alignItems: 'center' }}
        >
          <View style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: isFocused ? theme.colors.primary : 'transparent', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: isFocused ? '#fff' : '#6B7280' }}>{label.charAt(0)}</Text>
          </View>
          <Text style={{ fontSize: 12, color: isFocused ? theme.colors.primary : '#6B7280', marginTop: 4 }}>{label}</Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

export default BottomTabs;
