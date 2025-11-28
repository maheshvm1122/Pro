import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import theme from '../theme';

const RestaurantCard = ({ place, onPress, onOpenMaps }) => (
  <TouchableOpacity onPress={() => onPress(place)} style={{ flexDirection: 'row', padding: 12, backgroundColor: theme.colors.card, borderRadius: 12, marginBottom: 12 }}>
    {place.image ? (
      <Image source={{ uri: place.image }} style={{ width: 72, height: 72, borderRadius: 12, marginRight: 12 }} />
    ) : (
      <View style={{ width: 72, height: 72, backgroundColor: '#E5E7EB', borderRadius: 12, marginRight: 12 }} />
    )}
    <View style={{ flex: 1 }}>
      <Text style={{ fontWeight: '700', fontSize: 16 }}>{place.name}</Text>
      <Text style={{ color: '#6B7280', marginTop: 4 }}>{place.subCategory}</Text>
      <Text style={{ color: '#6B7280', marginTop: 6 }}>★ {place.rating} · {place.priceLevel} · {place.address}</Text>
      <Text style={{ marginTop: 6, color: '#9CA3AF', fontSize: 12 }} numberOfLines={1}>{place.shortDescription}</Text>
    </View>
  </TouchableOpacity>
);

export default RestaurantCard;
