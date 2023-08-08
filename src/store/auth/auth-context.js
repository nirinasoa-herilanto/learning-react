import React from 'react';

const AuthContext = React.createContext({
  user: null,
  signingWithGoogleHandler: async () => {},
  loggoutHandler: async () => {},
});

/**
 * Use to consume store
 */
export const useAuthStore = () => React.useContext(AuthContext);

export default AuthContext;
