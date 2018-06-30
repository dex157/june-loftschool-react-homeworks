import React from 'react';

const {
  Provider: AuthProvider,
  Consumer: AuthConsumer,
} = React.createContext({ isAuthorized: false });

export { AuthProvider, AuthConsumer };
