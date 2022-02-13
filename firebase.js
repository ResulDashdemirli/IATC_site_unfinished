// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";

import { getDatabase, set,ref,onValue,push,remove} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjXcrJv9fI0kGo6pWZKppERr9-tB4mhDM",
  authDomain: "front-end-project-a5dfd.firebaseapp.com",
  databaseURL: "https://front-end-project-a5dfd-default-rtdb.firebaseio.com",
  projectId: "front-end-project-a5dfd",
  storageBucket: "front-end-project-a5dfd.appspot.com",
  messagingSenderId: "682383289673",
  appId: "1:682383289673:web:2e0f0ea8edd441d3ae3e98",
  measurementId: "G-9P06H1TV9F"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export{
    set,ref,onValue,push,remove
}