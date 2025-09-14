import {GoogleAuthProvider, signInWithCredential, User} from 'firebase/auth';
import {auth} from '../../../../firebaseConfig';

export default class OauthService {
  async signInWithGoogle(idToken: string): Promise<User> {
    const credential = GoogleAuthProvider.credential(idToken);
    const userCredential = await signInWithCredential(auth, credential);
    return userCredential.user;
  }

  getCurrentUser(): User | null {
    return auth.currentUser;
  }

  async signOut(): Promise<void> {
    await auth.signOut();
  }
}
