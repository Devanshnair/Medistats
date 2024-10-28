import { createContext, useContext, useState } from 'react';

const PrefetchContext = createContext();

export const usePrefetch = () => {
    const context = useContext(PrefetchContext);
    if (!context) {
      throw new Error('usePrefetch must be used within a PrefetchProvider');
    }
    return context;
  };

export const PrefetchProvider = ({ children }) => {
  const [prefetchedData, setPrefetchedData] = useState(null);

  return (
    <PrefetchContext.Provider value={{ prefetchedData, setPrefetchedData }}>
      {children}
    </PrefetchContext.Provider>
  );
};
