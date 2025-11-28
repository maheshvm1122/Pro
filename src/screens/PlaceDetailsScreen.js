import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Linking,
  ImageBackground
} from 'react-native';
import theme from '../theme';

export default function PlaceDetailsScreen({ route, navigation }) {
  const { place } = route.params;

  const openMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address)}`;
    Linking.openURL(url);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ImageBackground source={{ uri: place.image }} style={{ height: 260, justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 40, left: 16 }}>
          <Text style={{ color: '#fff' }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ position: 'absolute', top: 40, right: 16 }} onPress={() => {}}>
          <Text style={{ color: '#fff' }}>♥</Text>
        </TouchableOpacity>
        <View style={{ backgroundColor: 'rgba(0,0,0,0.35)', padding: 16 }}>
          <Text style={{ color: '#fff', fontSize: 22, fontWeight: '700' }}>{place.name}</Text>
          <Text style={{ color: '#fff', marginTop: 4 }}>{place.subCategory} · {place.address}</Text>
        </View>
      </ImageBackground>

      <ScrollView style={{ padding: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 8 }}>Overview</Text>
        <Text style={{ color: '#6B7280' }}>{place.overview || place.shortDescription}</Text>

        <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 12 }}>Highlights</Text>
        {place.highlights?.map((h, idx) => (
          <Text key={idx} style={{ color: '#6B7280', marginTop: 6 }}>• {h}</Text>
        ))}

        <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 12 }}>Things to do</Text>
        {place.thingsToDo?.map((t, idx) => (
          <Text key={idx} style={{ color: '#6B7280', marginTop: 6 }}>• {t}</Text>
        ))}

        <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 12 }}>Location & Map</Text>
        <Text style={{ color: '#6B7280', marginTop: 6 }}>{place.address}</Text>
        <TouchableOpacity onPress={openMaps} style={{ marginTop: 12, backgroundColor: theme.colors.primary, padding: 12, borderRadius: 12, alignItems: 'center' }}>
          <Text style={{ color: '#fff' }}>Open in Maps</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  card: {
    margin: theme.spacing(2),
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: theme.spacing(2),
  },
  mainLabel: {
    color: theme.colors.textMuted,
    fontSize: 14,
    marginBottom: 2,
  },
  title: {
    color: theme.colors.text,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: theme.spacing(2),
  },
  section: {
    marginTop: theme.spacing(2),
  },
  sectionTitle: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: theme.spacing(1),
  },
  bodyText: {
    color: theme.colors.text,
    fontSize: 14,
    lineHeight: 20,
  },
  mapText: {
    color: theme.colors.accent,
    fontSize: 14,
    lineHeight: 20,
  },
  backButton: {
    marginTop: theme.spacing(3),
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing(1.5),
    borderRadius: theme.radius.lg,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
