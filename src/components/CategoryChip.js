import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import theme from '../theme';

const CategoryChip = ({ label, active, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 20,
      backgroundColor: active ? theme.colors.primary : theme.colors.surface,
      marginRight: 8,
    }}
  >
    <Text style={{ color: active ? '#fff' : '#6B7280', fontWeight: '600' }}>{label}</Text>
  </TouchableOpacity>
);

export default CategoryChip;
