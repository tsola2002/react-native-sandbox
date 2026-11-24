import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [tab, setTabState] = useState('Home');
  const [stack, setStack] = useState([]);
  const [favorites, setFavorites] = useState(['porsche-911', 'tesla-model-3']);

  const navigate = useCallback((name, params = {}) => {
    setStack((current) => [
      ...current,
      { name, params, key: `${name}-${current.length}-${Date.now()}` },
    ]);
  }, []);

  const goBack = useCallback(() => {
    setStack((current) => current.slice(0, -1));
  }, []);

  const setTab = useCallback((next) => {
    setStack([]);
    setTabState(next);
  }, []);

  const toggleFavorite = useCallback((id) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [id, ...current]
    );
  }, []);

  const value = useMemo(
    () => ({
      tab,
      setTab,
      stack,
      navigate,
      goBack,
      favorites,
      toggleFavorite,
      isFavorite: (id) => favorites.includes(id),
    }),
    [tab, setTab, stack, navigate, goBack, favorites, toggleFavorite]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used inside AppProvider');
  return context;
}
