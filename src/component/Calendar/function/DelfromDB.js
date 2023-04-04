import { db, doc, updateDoc } from "@src/firebase";

export default async function DeltoDB() {
  const _CurrentDiv = document.getElementById(this.id);
  
  // console.log(_CurrentDiv.id);

  // const docRef = await setDoc(doc(db, "Calendar", _CurrentDiv.id), "Deleted", 1);

  updateDoc(doc(db, "Calendar", _CurrentDiv.id), {Deleted: 1});

  _CurrentDiv.remove(_CurrentDiv);
}