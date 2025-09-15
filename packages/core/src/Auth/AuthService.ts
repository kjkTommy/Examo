import {GoogleAuthProvider, signInWithCredential} from 'firebase/auth';
import {auth} from '../../../../firebaseConfig';
import { onAuthStateChanged, User } from "firebase/auth";

export default class AuthService {
  currentUser: User | null = null;

  constructor() {
    onAuthStateChanged(auth, (user) => {
      this.currentUser = user;
      console.log("Auth state changed:", user);
    });
  }

  async signInWithGoogle(idToken: string): Promise<User> {
    const credential = GoogleAuthProvider.credential(idToken);
    const userCredential = await signInWithCredential(auth, credential);
    return userCredential.user;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  async signOut(): Promise<void> {
    await auth.signOut();
  }
}
