import {
  signOut,
  signInWithPopup,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signInWithEmailAndPassword,
  updatePassword,
  deleteUser,
  sendSignInLinkToEmail,
} from 'firebase/auth';

/**
 * AppAuthCore class, is an abstraction of Firebase auth hooks.
 * - signupWithEmail(redirectionUrl, email)
 * - completeSignupRegistration(password)
 * - loggedInWithEmailAndPassword(email, password)
 * - loggedInWithGoogle
 * - loggout
 */
class AppAuthCore {
  constructor(auth, googleProvider) {
    this._auth = auth;
    this._googleProvider = googleProvider;
  }

  /**
   * Use to signup with email account
   */
  async signupWithEmail(redirectionUrl, email) {
    try {
      const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: redirectionUrl,
        handleCodeInApp: true,
      };

      await sendSignInLinkToEmail(this._auth, email, actionCodeSettings);

      window.localStorage.setItem('emailForSignIn', email);
    } catch (error) {
      throw new Error('Something went wrong, please try later!');
    }
  }

  /**
   * Use to complete registration of signup by providing password
   */
  async completeSignupRegistration(password) {
    try {
      if (!isSignInWithEmailLink(this._auth, window.location.href)) return;
      const email = window.localStorage.getItem('emailForSignIn');

      const { user } = await signInWithEmailLink(
        this._auth,
        email,
        window.location.href
      );

      if (!user.emailVerified) {
        // show user notification
        deleteUser(user);
        return;
      }

      await updatePassword(user, password);

      window.localStorage.removeItem('emailForSignIn');

      return user;
    } catch (error) {
      throw new Error('Something went wrong, please try later!');
    }
  }

  /**
   * Use to connect on the app with email & password
   */
  async loggedInWithEmailAndPassword(email, password) {
    const { user } = await signInWithEmailAndPassword(
      this._auth,
      email,
      password
    );

    return user;
  }

  /**
   * Use to connect with Google account
   */
  async loggedInWithGoogle() {
    const { user } = await signInWithPopup(this._auth, this._googleProvider);

    return user;
  }

  /**
   * Use to loggout on the app
   */
  async loggout() {
    await signOut(this._auth);
  }
}

export default AppAuthCore;
