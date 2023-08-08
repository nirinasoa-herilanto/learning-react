import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth, provider } from '../../config/firebase.config';

import AppAuthCore from '../../services/auth/app.auth';

import AuthContext from './auth-context';

const appAuthCore = new AppAuthCore(auth, provider);

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const signingWithGoogleHandler = async () => {
    const user = await appAuthCore.loggedInWithGoogle();
    user && setUser(user);
  };

  const loggoutHandler = async () => {
    await appAuthCore.loggout();
  };

  const ctx = {
    user,
    auth: appAuthCore,
    signingWithGoogleHandler,
    loggoutHandler,
  };

  useEffect(() => {
    const unsubscrible = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null);
    });

    return () => unsubscrible();
  }, []);

  return (
    <AuthContext.Provider value={ctx}>{props.children}</AuthContext.Provider>
  );
};

export default React.memo(AuthProvider);
