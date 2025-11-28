import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import theme from '../theme';

const SectionHeader = ({ title, onSeeAll }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 8 }}>
    <Text style={{ fontSize: 18, fontWeight: '600', color: theme.colors.text }}>{title}</Text>
    {onSeeAll ? (
      <TouchableOpacity onPress={onSeeAll}>
        <Text style={{ color: theme.colors.accent }}>See all</Text>
      </TouchableOpacity>
    ) : null}
  </View>
);

export default SectionHeader;
