import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
const firebaseConfig = {
  //Add your code below to setup web app's Firebase configuration
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");
const logoutButton = document.getElementById("logout");
// Check if a user is already logged in (you may need to customize this part)
const user = auth.currentUser;

if (user) {
  // User is logged in, show the logout button and hide the login/signup form
  logoutButton.style.display = "block";
  main.style.display = "none";
  createacct.style.display = "none";
} else {
  // User is not logged in, hide the logout button
  logoutButton.style.display = "none";
}
// Login functionality
const submitButton = document.getElementById("submit");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
submitButton.addEventListener("click", function () {
  const email = emailInput.value;
  const password = passwordInput.value;
  signInWithEmailAndPassword(auth, email, password)
  //Add your code below to check given email and password is authenticated or not  
});
// Sign-up functionality
const signupButton = document.getElementById("sign-up");
signupButton.addEventListener("click", function () {
  main.style.display = "none";
  createacct.style.display = "block";
});
const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById(
  "confirm-password-signup"
);
const createacctbtn = document.getElementById("create-acct-btn");
const returnBtn = document.getElementById("return-btn");
createacctbtn.addEventListener("click", function () {
  var isVerified = true;
  const signupEmail = signupEmailIn.value;
  const confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail !== confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }
  const signupPassword = signupPasswordIn.value;

  const confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if (signupPassword !== confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }
  if (
    signupEmail === "" ||
    confirmSignupEmail === "" ||
    signupPassword === "" ||
    confirmSignUpPassword === ""
  ) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }
  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
    //Add your code below to create authentication using email and password
     
  }
});
returnBtn.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
});

// Logout functionality
logoutButton.addEventListener("click", function () {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("User signed out.");
      window.alert("You have been logged out.");
      logoutButton.style.display = "none";
      main.style.display = "block";
      createacct.style.display = "none";
    })
    .catch((error) => {
      // An error happened.
      console.error("Error occurred while signing out:", error);
      window.alert("Error occurred while signing out. Please try again.");
    });
});
