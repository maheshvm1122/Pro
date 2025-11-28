import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import theme from '../theme';
import { PLACES } from '../data/places';
import SectionHeader from '../components/SectionHeader';
import RestaurantCard from '../components/RestaurantCard';

const DiscoverScreen = ({ navigation }) => {
  const [tab, setTab] = useState('Attractions');

  const historical = PLACES.filter((p) => p.subCategory === 'Historical' || p.category === 'attractions').slice(0, 10);
  const temples = PLACES.filter((p) => p.category === 'temples').slice(0, 6);
  const parks = PLACES.filter((p) => p.category === 'parks').slice(0, 8);
  const street = PLACES.filter((p) => p.subCategory === 'Street Food').slice(0, 5);
  const restaurants = PLACES.filter((p) => p.category === 'restaurants').slice(0, 15);
  const hotels = PLACES.filter((p) => p.category === 'hotels').slice(0, 18);
  const attractionsMixed = PLACES.filter((p) => p.category === 'attractions').slice(0, 10);

  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: theme.colors.background }}>
      <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 8 }}>Discover by category</Text>
      <Text style={{ color: '#6B7280' }}>Browse curated lists of attractions, food spots and stays in Hyderabad.</Text>

      <SectionHeader title="Historical" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 8 }}>
        {historical.map((h) => (
          <TouchableOpacity key={h.id} onPress={() => navigation.navigate('PlaceDetails', { place: h })} style={{ width: 220, marginRight: 12 }}>
            <Image source={{ uri: h.image }} style={{ width: 220, height: 120, borderRadius: 12 }} />
            <Text style={{ fontWeight: '700', marginTop: 8 }}>{h.name}</Text>
            <Text style={{ color: '#6B7280', marginTop: 4 }}>★ {h.rating}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <SectionHeader title="Top Temples" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 8 }}>
        {temples.map((t) => (
          <TouchableOpacity key={t.id} onPress={() => navigation.navigate('PlaceDetails', { place: t })} style={{ width: 220, marginRight: 12 }}>
            <Image source={{ uri: t.image }} style={{ width: 220, height: 120, borderRadius: 12 }} />
            <Text style={{ fontWeight: '700', marginTop: 8 }}>{t.name}</Text>
            <Text style={{ color: '#6B7280', marginTop: 4 }}>{t.shortDescription}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <SectionHeader title="Parks & Nature" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 8 }}>
        {parks.map((p) => (
          <TouchableOpacity key={p.id} onPress={() => navigation.navigate('PlaceDetails', { place: p })} style={{ width: 220, marginRight: 12 }}>
            <Image source={{ uri: p.image }} style={{ width: 220, height: 120, borderRadius: 12 }} />
            <Text style={{ fontWeight: '700', marginTop: 8 }}>{p.name}</Text>
            <Text style={{ color: '#6B7280', marginTop: 4 }}>★ {p.rating}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <SectionHeader title="Street Food" />
      {street.map((s) => (
        <TouchableOpacity key={s.id} onPress={() => navigation.navigate('PlaceDetails', { place: s })} style={{ flexDirection: 'row', marginBottom: 12 }}>
          <Image source={{ uri: s.image }} style={{ width: 100, height: 80, borderRadius: 8, marginRight: 12 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: '700' }}>{s.name}</Text>
            <Text style={{ color: '#6B7280' }}>{s.shortDescription}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <SectionHeader title="Restaurants" />
      {restaurants.map((r) => (
        <RestaurantCard key={r.id} place={r} onPress={(p) => navigation.navigate('PlaceDetails', { place: p })} />
      ))}

      <SectionHeader title="Hotels" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 8 }}>
        {hotels.map((h) => (
          <TouchableOpacity key={h.id} onPress={() => navigation.navigate('PlaceDetails', { place: h })} style={{ width: 220, marginRight: 12 }}>
            <Image source={{ uri: h.image }} style={{ width: 220, height: 120, borderRadius: 12 }} />
            <Text style={{ fontWeight: '700', marginTop: 8 }}>{h.name}</Text>
            <Text style={{ color: '#6B7280', marginTop: 4 }}>★ {h.rating}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <SectionHeader title="Attractions (Mixed)" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 8 }}>
        {attractionsMixed.map((a) => (
          <TouchableOpacity key={a.id} onPress={() => navigation.navigate('PlaceDetails', { place: a })} style={{ width: 220, marginRight: 12 }}>
            <Image source={{ uri: a.image }} style={{ width: 220, height: 120, borderRadius: 12 }} />
            <Text style={{ fontWeight: '700', marginTop: 8 }}>{a.name}</Text>
            <Text style={{ color: '#6B7280', marginTop: 4 }}>★ {a.rating}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </ScrollView>
  );
};

export default DiscoverScreen;
