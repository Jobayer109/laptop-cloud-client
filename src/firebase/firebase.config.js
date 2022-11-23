import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAotrpjEW5HVKgo2UDlWlZUsd1e7wT3cEY",
  authDomain: "laptop-cloud.firebaseapp.com",
  projectId: "laptop-cloud",
  storageBucket: "laptop-cloud.appspot.com",
  messagingSenderId: "606629482910",
  appId: "1:606629482910:web:a9a8971e75a29a4467068f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
