import React from 'react';

import { auth, provider } from '../../config/firebase.config';

import AppAuthCore from '../../services/auth/app.auth';

const appAuthCore = new AppAuthCore(auth, provider);

const AuthContext = React.createContext({
  auth: appAuthCore,
});

/**
 * Use to consume store
 */
export const useAuthStore = () => React.useContext(AuthContext);

export default AuthContext;
