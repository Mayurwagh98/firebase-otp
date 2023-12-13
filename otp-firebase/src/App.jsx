import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import PhoneVerify from "./components/PhoneVerify";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBG_wESbuV6lvTg3TUSMVrHvvtavscLFY0",
    authDomain: "otp-fire-c9153.firebaseapp.com",
    projectId: "otp-fire-c9153",
    storageBucket: "otp-fire-c9153.appspot.com",
    messagingSenderId: "904994879393",
    appId: "1:904994879393:web:caebacf7af0b48adca7de0",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  useEffect(() => {
    const unSubscriber = onAuthStateChanged(firebase.auth(), (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => unSubscriber();
  }, []);
  return (
    <>
      <h1>Verify OTP</h1>
      <PhoneVerify auth={firebase.auth()}></PhoneVerify>
    </>
  );
}

export default App;
