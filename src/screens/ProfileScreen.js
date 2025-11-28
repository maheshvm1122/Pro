import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import theme from '../theme';

const ProfileScreen = ({ navigation }) => {
  const [isDark, setIsDark] = useState(false);

  const logout = () => {
    // Reset navigation stack to Splash then Main
    navigation.reset({ index: 0, routes: [{ name: 'Splash' }] });
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: theme.colors.background }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: '#E5E7EB', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: '700' }}>G</Text>
        </View>
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: '700', fontSize: 18 }}>Guest</Text>
          <Text style={{ color: '#6B7280' }}>Hyderabad</Text>
        </View>
      </View>

      <View style={{ marginTop: 24 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 }}>
          <Text>App theme</Text>
          <Switch value={isDark} onValueChange={setIsDark} />
        </View>

        <TouchableOpacity style={{ paddingVertical: 12 }}>
          <Text>About Hyderabad Tourist Guide</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 12 }}>
          <Text>Feedback</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={logout} style={{ marginTop: 24, backgroundColor: theme.colors.secondary, padding: 12, borderRadius: 12, alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontWeight: '700' }}>Logout</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default ProfileScreen;
