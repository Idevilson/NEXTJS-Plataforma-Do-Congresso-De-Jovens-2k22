import { 
  initializeApp,
  getApp,
} from 'firebase/app';

import { 
  getFirestore,
  Firestore
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBnlCP9VbDwx4B76dcBYNqQ1oKAnTO2Qec",
  authDomain: "ieq-congresso-jovens.firebaseapp.com",
  projectId: "ieq-congresso-jovens",
  storageBucket: "ieq-congresso-jovens.appspot.com",
  messagingSenderId: "837289184884",
  appId: "1:837289184884:web:ce7c56f763c71b7b838b21",
  measurementId: "G-P90WM2X23D"
};

function startDB(){
  try {
    return getApp();
  } catch (error) {
    console.log("firebase reinicializado");
    return initializeApp(firebaseConfig);
  }
}

const app = startDB();
const db = getFirestore(app);
export { db };
