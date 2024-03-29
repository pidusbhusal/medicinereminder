let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");

let log = document.getElementById("log");
log.addEventListener("click", function () {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
});

let reg = document.getElementById("reg");
reg.addEventListener("click", function () {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
});

let eye = document.getElementById("toggle-password");
eye.addEventListener("click", function () {
  const passwordField = document.getElementById("login-Password");
  const toggleIcon = document.querySelector(".toggle-password i");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
});

document.querySelector("#Password").addEventListener("input", function () {
  const password = this.value;

  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
  const hasNumber = /\d/.test(password);

  const passwordIsValid = hasUpperCase && hasSpecialCharacter && hasNumber;

  if (passwordIsValid) {
    // document.getElementById("passValidity").innerHTML = "Valid Password";
    this.setCustomValidity("");

    console.log("Successful");
  } else {
    this.setCustomValidity(
      "Password must contain at least 1 capital letter, 1 special character, and 1 number."
    );
    // document.getElementById("passValidity").innerHTML = "Password must contain at least 1 capital letter, 1 special character, and 1 number.";
    console.log("Not successful");
  }
});

import { app } from "./config.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
const auth = getAuth(app);

const signup = () => {
  console.log(auth);
  // let username = document.getElementById("username")
  let email = document.getElementById("Email");
  let password = document.getElementById("Password");
  createUserWithEmailAndPassword(auth, email.value, password.value)
    //    console.log(email.value)
    .then((resolve) => {
      alert("successfully Signup", resolve);
    })
    .catch((reject) => {
      alert(reject);
    });
};

let signup_btn = document.getElementById("signup-btn");
signup_btn.addEventListener("click", signup);

const login = () => {
  let email = document.getElementById("login-Id");
  let password = document.getElementById("login-Password");

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((resolve) => {
      window.location = "/home.html";
    })
    .catch((reject) => {
      document.getElementById("txtErrorMessage").innerHTML = "Invalid Input";
    });
};

let login_btn = document.getElementById("login-btn");

login_btn.addEventListener("click", login);
