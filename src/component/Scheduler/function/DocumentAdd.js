import { db, collection, addDoc } from "@src/firebase";

const scheduleCollectionRef = collection(db, "schedules");

async function addData() {
  try {
    const docRef = await addDoc(scheduleCollectionRef, {
      id: "Test",
      password: "testpw",
      date_register: 1900
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export { addData };