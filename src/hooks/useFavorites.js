import { useState, useEffect } from 'react';
import { PLACES } from '../data/places';

export default function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Prepopulate first 5 places as favorites for demo visuals
    setFavorites(PLACES.slice(0, 5));
  }, []);

  const toggleFavorite = (place) => {
    setFavorites((prev) => {
      const exists = prev.find((p) => p.id === place.id);
      if (exists) return prev.filter((p) => p.id !== place.id);
      return [...prev, place];
    });
  };

  const isFavorite = (placeId) => favorites.some((p) => p.id === placeId);

  return { favorites, toggleFavorite, isFavorite };
}
