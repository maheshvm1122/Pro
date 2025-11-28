import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import theme from '../theme';

const HotelCard = ({ place, onPress }) => (
  <TouchableOpacity onPress={() => onPress(place)} style={{ width: 260, marginRight: 12 }}>
    <View style={{ borderRadius: 16, overflow: 'hidden', backgroundColor: theme.colors.card }}>
      {place.image ? (
        <Image source={{ uri: place.image }} style={{ height: 140, width: '100%' }} />
      ) : (
        <View style={{ height: 140, backgroundColor: '#E5E7EB' }} />
      )}
      <View style={{ padding: 12 }}>
        <Text style={{ fontWeight: '700', fontSize: 16 }}>{place.name}</Text>
        <Text style={{ color: '#6B7280', marginTop: 4 }}>{place.subCategory} · {place.city}</Text>
        <View style={{ flexDirection: 'row', marginTop: 8, alignItems: 'center' }}>
          <Text style={{ marginRight: 8 }}>★ {place.rating}</Text>
          <View style={{ paddingHorizontal: 8, paddingVertical: 4, backgroundColor: '#F3F4F6', borderRadius: 12 }}>
            <Text style={{ fontSize: 12 }}>{place.priceLevel}</Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default HotelCard;
