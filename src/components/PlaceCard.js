import React from 'react';
import { View, Text, Pressable, StyleSheet, Image, TouchableOpacity } from 'react-native';
import theme from '../theme';

export default function PlaceCard({ place, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress && onPress(place)} style={{ width: 240, marginRight: 12 }}>
      <View style={{ borderRadius: 16, overflow: 'hidden', backgroundColor: theme.colors.card }}>
        {place?.image ? (
          <Image source={{ uri: place.image }} style={{ height: 140, width: '100%' }} />
        ) : (
          <Image source={{ uri: 'https://source.unsplash.com/800x600/?landmark' }} style={{ height: 140, width: '100%' }} />
        )}
        <View style={{ padding: 12 }}>
          <Text numberOfLines={1} style={{ fontWeight: '700', fontSize: 16, color: theme.colors.text }}>{place?.name || 'Unknown'}</Text>
          <Text numberOfLines={1} style={{ color: '#6B7280', marginTop: 4 }}>{place?.subCategory || ''} · {place?.city || ''}</Text>
          <View style={{ flexDirection: 'row', marginTop: 8, alignItems: 'center' }}>
            <Text style={{ marginRight: 8 }}>★ {place?.rating || '-'}</Text>
            <View style={{ paddingHorizontal: 8, paddingVertical: 4, backgroundColor: '#F3F4F6', borderRadius: 12 }}>
              <Text style={{ fontSize: 12 }}>{place?.priceLevel || '-'}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    marginBottom: theme.spacing(2),
    borderRadius: theme.radius.lg,
    padding: theme.spacing(2),
    elevation: 3,
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  badge: {
    backgroundColor: theme.colors.primaryDark,
    borderRadius: theme.radius.sm,
    paddingHorizontal: theme.spacing(1),
    paddingVertical: 2,
    marginBottom: theme.spacing(1),
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
  },
  mainLabel: {
    color: theme.colors.textMuted,
    fontSize: 14,
    marginBottom: 2,
  },
  title: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: theme.spacing(1),
  },
  description: {
    color: theme.colors.text,
    fontSize: 14,
    lineHeight: 20,
  },
});
