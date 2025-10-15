import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
  signInWithPopup,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import {firebaseConfig} from '../../../../firebaseConfig';
import {initializeApp, getApps, getApp} from 'firebase/app';
import {Platform} from 'react-native';

export default class AuthService {
  currentUser: User | null = null;
  private authInstance;

  constructor() {
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    this.authInstance = getAuth(app);

    onAuthStateChanged(this.authInstance, (user) => {
      this.currentUser = user;
      console.log('Auth state changed:', user);
    });
  }

  /**
   * Вход через Google
   * @param idToken - используется на мобильных (Expo)
   * На Web idToken можно не передавать, используем popup auth
   */
  async signInWithGoogle(idToken?: string): Promise<User> {
    if (Platform.OS === 'web') {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.authInstance, provider);
      return result.user;
    } else {
      if (!idToken) throw new Error('idToken required for mobile login');
      const credential = GoogleAuthProvider.credential(idToken);
      const userCredential = await signInWithCredential(this.authInstance, credential);
      return userCredential.user;
    }
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  async signOut(): Promise<void> {
    await this.authInstance.signOut();
  }
}
