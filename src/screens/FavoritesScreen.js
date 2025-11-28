import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import theme from '../theme';
import useFavorites from '../hooks/useFavorites';

const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useFavorites();

  if (!favorites.length) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
        <View style={{ width: 140, height: 140, backgroundColor: '#F3F4F6', borderRadius: 12 }} />
        <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 16 }}>No favorites yet</Text>
        <Text style={{ color: '#6B7280', textAlign: 'center', marginTop: 8 }}>Save attractions, restaurants and hotels you love in Hyderabad.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{ marginTop: 12, backgroundColor: theme.colors.primary, padding: 10, borderRadius: 10 }}>
          <Text style={{ color: '#fff' }}>Browse places</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={{ padding: 16 }}
      data={favorites}
      keyExtractor={(i) => i.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('PlaceDetails', { place: item })} style={{ backgroundColor: '#fff', padding: 12, borderRadius: 12, marginBottom: 12, flexDirection: 'row', alignItems: 'center' }}>
          {item.image ? <Image source={{ uri: item.image }} style={{ width: 64, height: 64, borderRadius: 8, marginRight: 12 }} /> : <View style={{ width: 64, height: 64, backgroundColor: '#E5E7EB', borderRadius: 8, marginRight: 12 }} />}
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: '700' }}>{item.name}</Text>
            <Text style={{ color: '#6B7280', marginTop: 4 }}>{item.subCategory}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default FavoritesScreen;
