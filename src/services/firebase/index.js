
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBI_P4eBhNMnJka5xfl5Ud7rN9QUdRvFRU",
  authDomain: "pulga-react.firebaseapp.com",
  projectId: "pulga-react",
  storageBucket: "pulga-react.appspot.com",
  messagingSenderId: "1054925642410",
  appId: "1:1054925642410:web:882646e359b80621044ed3",
  measurementId: "G-SG73F03XK3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore (app)