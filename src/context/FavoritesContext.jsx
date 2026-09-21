import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const FavoritesContext = createContext({
  favorites: { flights: [], hotels: [] },
  totalFavoritesCount: 0,
  isFavoriteFlight: () => false,
  toggleFavoriteFlight: () => {},
  isFavoriteHotel: () => false,
  toggleFavoriteHotel: () => {},
  removeFavoriteFlight: () => {},
  removeFavoriteHotel: () => {},
  clearFavorites: () => {},
});

const STORAGE_KEY = 'globeFavorites';

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          flights: Array.isArray(parsed.flights) ? parsed.flights : [],
          hotels: Array.isArray(parsed.hotels) ? parsed.hotels : [],
        };
      }
    } catch (e) {
      console.error('Error loading favorites from localStorage:', e);
    }
    return { flights: [], hotels: [] };
  });

  // Persist to localStorage whenever favorites changes
  const saveFavorites = useCallback((newFavs) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavs));
      window.dispatchEvent(new Event('favoritesChange'));
    } catch (e) {
      console.error('Error saving favorites to localStorage:', e);
    }
  }, []);

  // Sync across tabs and events
  useEffect(() => {
    const handleSync = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          setFavorites({
            flights: Array.isArray(parsed.flights) ? parsed.flights : [],
            hotels: Array.isArray(parsed.hotels) ? parsed.hotels : [],
          });
        }
      } catch (e) {
        console.error('Error syncing favorites:', e);
      }
    };

    window.addEventListener('storage', handleSync);
    window.addEventListener('favoritesChange', handleSync);
    return () => {
      window.removeEventListener('storage', handleSync);
      window.removeEventListener('favoritesChange', handleSync);
    };
  }, []);

  const isFavoriteFlight = useCallback(
    (id) => {
      return favorites.flights.some((f) => f.id === id);
    },
    [favorites.flights]
  );

  const toggleFavoriteFlight = useCallback(
    (flight) => {
      setFavorites((prev) => {
        const exists = prev.flights.some((f) => f.id === flight.id);
        const nextFlights = exists
          ? prev.flights.filter((f) => f.id !== flight.id)
          : [...prev.flights, flight];
        const nextFavs = { ...prev, flights: nextFlights };
        saveFavorites(nextFavs);
        return nextFavs;
      });
    },
    [saveFavorites]
  );

  const removeFavoriteFlight = useCallback(
    (id) => {
      setFavorites((prev) => {
        const nextFlights = prev.flights.filter((f) => f.id !== id);
        const nextFavs = { ...prev, flights: nextFlights };
        saveFavorites(nextFavs);
        return nextFavs;
      });
    },
    [saveFavorites]
  );

  const isFavoriteHotel = useCallback(
    (id) => {
      return favorites.hotels.some((h) => h.id === id);
    },
    [favorites.hotels]
  );

  const toggleFavoriteHotel = useCallback(
    (hotel) => {
      setFavorites((prev) => {
        const exists = prev.hotels.some((h) => h.id === hotel.id);
        const nextHotels = exists
          ? prev.hotels.filter((h) => h.id !== hotel.id)
          : [...prev.hotels, hotel];
        const nextFavs = { ...prev, hotels: nextHotels };
        saveFavorites(nextFavs);
        return nextFavs;
      });
    },
    [saveFavorites]
  );

  const removeFavoriteHotel = useCallback(
    (id) => {
      setFavorites((prev) => {
        const nextHotels = prev.hotels.filter((h) => h.id !== id);
        const nextFavs = { ...prev, hotels: nextHotels };
        saveFavorites(nextFavs);
        return nextFavs;
      });
    },
    [saveFavorites]
  );

  const clearFavorites = useCallback(() => {
    const empty = { flights: [], hotels: [] };
    setFavorites(empty);
    saveFavorites(empty);
  }, [saveFavorites]);

  const totalFavoritesCount = favorites.flights.length + favorites.hotels.length;

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        totalFavoritesCount,
        isFavoriteFlight,
        toggleFavoriteFlight,
        removeFavoriteFlight,
        isFavoriteHotel,
        toggleFavoriteHotel,
        removeFavoriteHotel,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
