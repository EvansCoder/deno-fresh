import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC5B6zytgLhCqOqhx-usFUx7R0WUaIWXUw",
  authDomain: "fir-9-58344.firebaseapp.com",
  projectId: "fir-9-58344",
  storageBucket: "fir-9-58344.appspot.com",
  messagingSenderId: "1094571097097",
  appId: "1:1094571097097:web:a852d38e5128188e5d4cd8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db};
