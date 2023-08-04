import { ADD_TRANSACTION, FETCH_TRANSACTIONS } from "../type";
import { initializeApp } from "firebase/app"; // Import the initializeApp function
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; // Import Firestore functions

const firebaseConfig = {
  // Replace with your Firebase configuration
  apiKey: "AIzaSyChhLsPAZMlueLVq-rpBFRYWOxYAfEPRdI",
  authDomain: "enverex-7c0a5.firebaseapp.com",
  projectId: "enverex-7c0a5",
  storageBucket: "enverex-7c0a5.appspot.com",
  messagingSenderId: "384682036239",
  appId: "1:384682036239:web:f62046d6603b1083f8677a",
  measurementId: "G-1QEJJDFEWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

// Action to add a new transaction to Firebase Firestore
export const addTransaction = (newTransaction) => {
  return async (dispatch) => {
    try {
      // Add the new transaction to the "transactions" collection in Firestore
      await addDoc(collection(db, "transactions"), newTransaction);

      // If the transaction is added successfully, fetch the updated transactions
      dispatch(fetchTransactions());
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };
};

// Action to fetch transactions from Firebase Firestore
export const fetchTransactions = () => {
  return async (dispatch) => {
    try {
      // Fetch transactions from the "transactions" collection in Firestore
      const querySnapshot = await getDocs(collection(db, "transactions"));

      // Convert the fetched data into an array of transactions
      const transactionsData = [];
      querySnapshot.forEach((doc) => {
        transactionsData.push({ id: doc.id, ...doc.data() });
      });

      // Dispatch the action with the fetched data
      dispatch({
        type: FETCH_TRANSACTIONS,
        payload: transactionsData
      });
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };
};
