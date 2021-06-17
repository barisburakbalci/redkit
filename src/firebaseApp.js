import FirebaseApp from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCORH4f77olQHU5tYYzkdeqg4yG4K0u9sE",
  authDomain: "redkit-db3d9.firebaseapp.com",
  projectId: "redkit-db3d9",
  storageBucket: "redkit-db3d9.appspot.com",
  messagingSenderId: "778599905049",
  appId: "1:778599905049:web:89692e4d3c971becacf788",
};
const app = FirebaseApp.initializeApp(config);
export default app;
