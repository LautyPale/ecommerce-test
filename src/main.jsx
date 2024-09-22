import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4zIxiNTDEz1TzRFTMO35Wr6eZHdFyrf4",
  authDomain: "ecommerce-palelauty.firebaseapp.com",
  projectId: "ecommerce-palelauty",
  storageBucket: "ecommerce-palelauty.appspot.com",
  messagingSenderId: "116151652113",
  appId: "1:116151652113:web:2701071b8665eb71e186b0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)
