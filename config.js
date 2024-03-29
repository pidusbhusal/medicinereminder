// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAm2rs2Nw58ECEpGtaqZNXsly_DNXamTyc",

  authDomain: "librarybooks-ab9fb.firebaseapp.com",

  databaseURL: "https://librarybooks-ab9fb-default-rtdb.firebaseio.com",

  projectId: "librarybooks-ab9fb",

  storageBucket: "librarybooks-ab9fb.appspot.com",

  messagingSenderId: "738269887431",

  appId: "1:738269887431:web:2f2505e9b01ee38f6337e2",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export { app };