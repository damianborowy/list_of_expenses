import { createContext, useContext } from 'react';

import store from '@/stores';

export const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);
