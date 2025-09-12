import {GoogleAuthProvider, signInWithCredential, User} from 'firebase/auth';
import {auth} from '../../../../firebaseConfig';

export default class AuthService {
  async signInWithGoogle(idToken: string): Promise<User> {
    try {
      const credential = GoogleAuthProvider.credential(idToken);
      const userCredential = await signInWithCredential(auth, credential);
      return userCredential.user;
    } catch (error) {
      console.error('Google sign-in error:', error);
      throw error;
    }
  }

  getCurrentUser() {
    return auth.currentUser;
  }

  async signOut() {
    return auth.signOut();
  }
}
