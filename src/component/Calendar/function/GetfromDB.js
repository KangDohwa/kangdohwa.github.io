import { db, collection, getDocs } from "@src/firebase";

const CalendarRef = collection(db, "Calendar");
const _Div = document.getElementById("Display");

async function GetfromDB() {
  const docRef = await getDocs(CalendarRef);

  let _List = [];

  try {
    docRef.forEach((doc) => {
      const nowD = new Date();
      const now = nowD.getTime() + 2629800000; // month need +1 (2629800000)
      console.log("Time in number :", now);
      console.log("Time in date :", nowD);

      const currentDocId = doc.id;
      const docsTime = doc.data().id;
      const _Arr = [];

      const _BeginArr = _Arr.concat(doc.data().BeginDay.split("-"), doc.data().BeginTime.split(":"));
      const _BeginDay = new Date(..._BeginArr);
      
      const _EndArr = _Arr.concat(doc.data().EndDay.split("-"), doc.data().EndTime.split(":"));
      const _EndDay = new Date(..._EndArr);

      console.log(`Doc id : ${currentDocId}`);
      if (_BeginDay > now) {
        console.log("Starting Soon");
      } else if (_BeginDay < now && _EndDay > now) {
        console.log("On Time!");
      } else {
        console.log(`Outdated!`);
      }
      // _List.push(doc.data())
    });
  } catch (e) {
    console.error("Error Get: ", e);
  }
  
  return (
    <>
    <div id = "Calendar-Display">
      <table>
        <thead>
          <tr>
            <th>시작 시간</th>
            <th>끝나는 시간</th>
            <th>서버</th>
            <th></th>
            <th></th>
            <th>번지</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
    </>
  );
}


export default GetfromDB;