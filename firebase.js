  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDZ8du2oRzvCiEtLC3VmAYPHof86zwaqNw",
    authDomain: "ca2-database-dcb64.firebaseapp.com",
    projectId: "ca2-database-dcb64",
    storageBucket: "ca2-database-dcb64.appspot.com",
    messagingSenderId: "1072053663923",
    appId: "1:1072053663923:web:0e83e58ec1eef557a798c6",
    measurementId: "G-HR4ZJRP56G"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

