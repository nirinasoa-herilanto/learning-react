import React, { useEffect } from 'react';

import { auth, provider } from '../../config/firebase.config';

import AppAuthCore from '../../services/auth/app.auth';

import AuthContext from './auth-context';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

const appAuthCore = new AppAuthCore(auth, provider);

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const ctx = {
    auth: appAuthCore,
    user,
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
