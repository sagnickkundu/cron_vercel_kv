"use server";

/* eslint-disable camelcase */
import { db } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore/lite";

export async function getTest() {
  const docRef = doc(db, "tokens", "test");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const tokenData = docSnap.data();
    const { name } = tokenData;
    return name;
  }
  return undefined;
}

export async function updateTest(name: string) {
  const docRef = doc(db, "tokens", "test");
  await updateDoc(docRef, { name });
}
