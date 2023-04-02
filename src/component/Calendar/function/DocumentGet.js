import { db, collection, getDocs } from "@src/firebase";

const scheduleCollectionRef = collection(db, "schedules");

async function getData() {
  try {
    const docRef = await getDocs(scheduleCollectionRef)
    const docLoc = document.getElementById("DocGet");
    docRef.forEach((doc) => {
      docLoc.appendChild(doc.id);
      console.log(`${doc.id} => ${doc.data()}`);
    });
  } catch (e) {
    console.error("Error Get: ", e);
  }
}


function DocGet() {
  return (
    <>
    <div id = "DocGet">
      <button onClick = {getData}>Get</button>
    </div>
    </>
  );
}

export default DocGet;