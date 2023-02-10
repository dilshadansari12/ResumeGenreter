import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5lFGK3hWwOrKlNTD4o2UDPHs54h-xneA",
  authDomain: "resumepro-7386c.firebaseapp.com",
  projectId: "resumepro-7386c",
  storageBucket: "resumepro-7386c.appspot.com",
  messagingSenderId: "504314382017",
  appId: "1:504314382017:web:e2b1731ae00778359a3640"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig); 
export const Storeg = getStorage(app);

