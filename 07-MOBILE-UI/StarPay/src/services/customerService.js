import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "../config/firebase";

const customersRef = collection(db, "customers");

// CREATE
export const addCustomer = async (customer) => {
  return await addDoc(customersRef, {
    ...customer,
    createdAt: new Date()
  });
};

// READ ALL
export const getCustomers = async () => {
  const snapshot = await getDocs(customersRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// UPDATE
export const updateCustomer = async (id, updatedData) => {
  const customerDoc = doc(db, "customers", id);
  return await updateDoc(customerDoc, updatedData);
};

// DELETE
export const deleteCustomer = async (id) => {
  const customerDoc = doc(db, "customers", id);
  return await deleteDoc(customerDoc);
};