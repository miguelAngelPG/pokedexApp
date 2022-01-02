import React from 'react'
import { Provider } from 'react-redux'
import { Router } from './routers/Router'

import { store } from './store/store'

export const PokeApp = () => {

  return (
    <Provider store={ store }>
      <Router />
    </Provider>
  );
}
