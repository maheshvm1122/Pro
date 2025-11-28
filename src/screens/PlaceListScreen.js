import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import theme from '../theme';
import { PLACES } from '../data/places';

const FILTER_CHIPS = ['All', 'Budget', 'Family', 'Luxury', 'Near me'];

const PlaceListScreen = ({ route, navigation }) => {
  const { category, title } = route.params || {};
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const items = PLACES.filter((p) => (category ? p.category === category : true));

  const matches = (item) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      (item.name && item.name.toLowerCase().includes(q)) ||
      (item.subCategory && item.subCategory.toLowerCase().includes(q)) ||
      (item.address && item.address.toLowerCase().includes(q))
    );
  };

  const filtered = items.filter((i) => matches(i));

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: theme.colors.background }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>{'<'} Back</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: '700', marginLeft: 12 }}>{title || 'Places'}</Text>
      </View>

      <TextInput placeholder="Search in list..." value={query} onChangeText={setQuery} style={{ backgroundColor: '#fff', padding: 12, borderRadius: 12, marginBottom: 12 }} />

      <View style={{ flexDirection: 'row', marginBottom: 12 }}>
        {FILTER_CHIPS.map((f) => (
          <TouchableOpacity key={f} onPress={() => setFilter(f)} style={{ padding: 8, backgroundColor: filter === f ? theme.colors.primary : '#fff', borderRadius: 12, marginRight: 8 }}>
            <Text style={{ color: filter === f ? '#fff' : '#6B7280' }}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ backgroundColor: '#fff', padding: 12, borderRadius: 12, marginBottom: 12, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('PlaceDetails', { place: item })}>
            {item.image ? <Image source={{ uri: item.image }} style={{ width: 72, height: 72, borderRadius: 8, marginRight: 12 }} /> : <View style={{ width: 72, height: 72, backgroundColor: '#E5E7EB', borderRadius: 8, marginRight: 12 }} />}
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '700' }}>{item.name} <Text style={{ fontWeight: '400' }}>★ {item.rating}</Text></Text>
              <Text style={{ color: '#6B7280', marginTop: 4 }}>{item.subCategory} · {item.address}</Text>
              <Text style={{ color: '#9CA3AF', marginTop: 8 }} numberOfLines={1}>{item.shortDescription}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PlaceListScreen;
