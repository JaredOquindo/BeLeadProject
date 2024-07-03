// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtAvX7_GVAe_nFevef5DYTKd5pBt6o-jE",
  authDomain: "maderazojames.firebaseapp.com",
  databaseURL: "https://maderazojames-default-rtdb.firebaseio.com",
  projectId: "maderazojames",
  storageBucket: "maderazojames.appspot.com",
  messagingSenderId: "568111861618",
  appId: "1:568111861618:web:c22b18fc6c95c0688957eb",
  measurementId: "G-WR9C3VKHL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Add event listener to the submit button
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Log in successful!");
      window.location.href = "home_page.html"; // Redirect to home page after successful login
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage); // Display the error message
    });
});
