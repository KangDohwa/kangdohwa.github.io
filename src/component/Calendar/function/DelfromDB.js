/* eslint-disable eqeqeq */
import { db, doc, updateDoc } from "@src/firebase";

export default async function DeltoDB() {
  var Answer = window.confirm("삭제하시겠습니까?");

  if (Answer == true) {

    const _CurrentDiv = document.getElementById(this.id);
    
    // console.log(_CurrentDiv.id);

    // const docRef = await setDoc(doc(db, "Calendar", _CurrentDiv.id), "Deleted", 1);

    updateDoc(doc(db, "Calendar", _CurrentDiv.id), {Deleted: 1});

    _CurrentDiv.remove(_CurrentDiv);
    alert("해당 일정을 삭제했습니다.");
  } else {
    alert("취소됐습니다.");
  }
}