import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import theme from '../theme';
import images from '../assets/images';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.primary }}>
      {/* Use Charminar image as logo */}
      <Image source={{ uri: images.CHARMINAR }} style={{ width: 120, height: 120, marginBottom: 24 }} />
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>Hyderabad Tourist Guide</Text>
      <Text style={{ color: '#fff', marginTop: 8 }}>Discover attractions, food & stays</Text>

      <TouchableOpacity
        onPress={() => navigation && navigation.reset({ index: 0, routes: [{ name: 'Main' }] })}
        style={{ marginTop: 32, backgroundColor: '#fff', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12 }}
      >
        <Text style={{ color: theme.colors.primary, fontWeight: '700' }}>Explore</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
