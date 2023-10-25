import { RouterProvider } from 'react-router-dom';

import { StoreContext } from '@/contexts/storeContext.ts';
import store from '@/stores/index.ts';

import { router } from './router';

const App = () => (
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>
);

export default App;
