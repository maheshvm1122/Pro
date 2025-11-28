import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import theme from '../theme';
import { CATEGORIES, PLACES } from '../data/places';
import CategoryChip from '../components/CategoryChip';
import SectionHeader from '../components/SectionHeader';
import PlaceCard from '../components/PlaceCard';
import RestaurantCard from '../components/RestaurantCard';
import HotelCard from '../components/HotelCard';

export default function HomeScreen({ navigation }) {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeLabel, setActiveLabel] = useState('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    setPlaces(PLACES);
    setLoading(false);
  }, []);

  const labelToCategory = {
    all: null,
    attractions: 'attractions',
    temples: 'temples',
    parks: 'parks',
    restaurants: 'restaurants',
    hotels: 'hotels',
  };

  const matchesQuery = (p) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      (p.name && p.name.toLowerCase().includes(q)) ||
      (p.subCategory && p.subCategory.toLowerCase().includes(q)) ||
      (p.address && p.address.toLowerCase().includes(q)) ||
      (p.shortDescription && p.shortDescription.toLowerCase().includes(q))
    );
  };

  const filterByActive = (items) => {
    const cat = labelToCategory[activeLabel];
    return items.filter((p) => (cat ? p.category === cat : true) && matchesQuery(p));
  };

  const attractions = filterByActive(PLACES.filter((p) => p.category === 'attractions'));
  const restaurants = filterByActive(PLACES.filter((p) => p.category === 'restaurants'));
  const hotels = filterByActive(PLACES.filter((p) => p.category === 'hotels'));

  const renderItem = ({ item }) => (
    <PlaceCard
      place={item}
      onPress={() =>
        navigation.navigate('PlaceDetails', {
          place: item,
        })
      }
    />
  );

  const heroImage = attractions[0]?.image;

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <ActivityIndicator size="large" />
          <Text style={styles.loadingText}>Loading places...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Add top padding to avoid overlap with header
  const containerStyle = { flex: 1, padding: 16, paddingTop: 24, backgroundColor: theme.colors.background };

  return (
    <ScrollView
      style={containerStyle}
    >
      <ImageBackground
        source={{ uri: heroImage }}
        style={{
          height: 220,
          borderRadius: 24,
          overflow: 'hidden',
          padding: 16,
          justifyContent: 'flex-end',
        }}
      >
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.35)',
            padding: 8,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: '#E5E7EB' }}>Good Evening</Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
              color: '#fff',
            }}
          >
            Discover Hyderabad
          </Text>
          <Text style={{ color: '#E5E7EB', marginTop: 4 }}>
            Attractions · Food · Stays · Culture
          </Text>
        </View>
      </ImageBackground>

      <View style={{ marginTop: 12 }}>
        <TextInput
          placeholder="Search places, food, hotels..."
          value={query}
          onChangeText={setQuery}
          style={{
            backgroundColor: '#fff',
            padding: 12,
            borderRadius: 12,
          }}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 12 }}
      >
        <CategoryChip
          label="All"
          active={activeLabel === 'all'}
          onPress={() => setActiveLabel('all')}
        />
        {CATEGORIES.map((c) => (
          <CategoryChip
            key={c.id}
            label={c.label}
            active={activeLabel === c.id}
            onPress={() => setActiveLabel(c.id)}
          />
        ))}
      </ScrollView>

      {/* Banners */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 16 }}
      >
        <Image
          source={{ uri: 'https://picsum.photos/seed/banner1/600/300' }}
          style={{
            width: 320,
            height: 140,
            borderRadius: 16,
            marginRight: 12,
          }}
        />
        <Image
          source={{ uri: 'https://picsum.photos/seed/banner2/600/300' }}
          style={{
            width: 320,
            height: 140,
            borderRadius: 16,
            marginRight: 12,
          }}
        />
        <Image
          source={{ uri: 'https://picsum.photos/seed/banner3/600/300' }}
          style={{
            width: 320,
            height: 140,
            borderRadius: 16,
            marginRight: 12,
          }}
        />
      </ScrollView>

      <View style={{ marginTop: 16 }}>
        <SectionHeader
          title="Top attractions in Hyderabad"
          onSeeAll={() =>
            navigation.navigate('PlaceList', {
              category: 'attractions',
              title: 'Attractions in Hyderabad',
            })
          }
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {attractions.slice(0, 6).map((a) => (
            <PlaceCard
              key={a.id}
              place={a}
              onPress={(p) =>
                navigation.navigate('PlaceDetails', { place: p })
              }
            />
          ))}
        </ScrollView>
      </View>

      <View style={{ marginTop: 16 }}>
        <SectionHeader
          title="Popular restaurants"
          onSeeAll={() =>
            navigation.navigate('PlaceList', {
              category: 'restaurants',
              title: 'Restaurants in Hyderabad',
            })
          }
        />
        {restaurants.slice(0, 6).map((r) => (
          <RestaurantCard
            key={r.id}
            place={r}
            onPress={(p) =>
              navigation.navigate('PlaceDetails', { place: p })
            }
          />
        ))}
      </View>

      <View style={{ marginTop: 16 }}>
        <SectionHeader
          title="Recommended hotels"
          onSeeAll={() =>
            navigation.navigate('PlaceList', {
              category: 'hotels',
              title: 'Hotels in Hyderabad',
            })
          }
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {hotels.slice(0, 6).map((h) => (
            <HotelCard
              key={h.id}
              place={h}
              onPress={(p) =>
                navigation.navigate('PlaceDetails', { place: p })
              }
            />
          ))}
        </ScrollView>
      </View>

      <View style={{ marginTop: 24, alignItems: 'center' }}>
        <Text style={{ color: '#9CA3AF', fontSize: 12 }}>
          Made for exploring Hyderabad
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  headerCard: {
    backgroundColor: theme.colors.card,
    marginHorizontal: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    borderRadius: theme.radius.lg,
    padding: theme.spacing(2),
  },
  headerTitle: {
    color: theme.colors.text,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  headerSubtitle: {
    color: theme.colors.textMuted,
    fontSize: 14,
  },
  listContent: {
    paddingHorizontal: theme.spacing(2),
    paddingVertical: theme.spacing(2),
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: theme.spacing(1),
    color: theme.colors.textMuted,
  },
});
