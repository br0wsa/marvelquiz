import app from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo6eBkrdmyGNFM-IHxYhcKeNSbdX8jC7s",
  authDomain: "marvel-quiz-a7c5d.firebaseapp.com",
  projectId: "marvel-quiz-a7c5d",
  storageBucket: "marvel-quiz-a7c5d.appspot.com",
  messagingSenderId: "112755098051",
  appId: "1:112755098051:web:b4fa8a3aba48ef72c27d76",
};

class Firebase {
  constructor() {
    // Initialize Firebase
    app.initializeApp(firebaseConfig);
  }
}

export default Firebase;
