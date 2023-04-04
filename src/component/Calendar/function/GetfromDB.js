/* eslint-disable eqeqeq */
import { db, collection, doc, setDoc, getDocs, deleteDoc } from "@src/firebase";
import { analytics, logEvent } from "@src/firebase";

import DeltoDB from "./DelfromDB";

function createCard({...props}) {

  const _Div = document.getElementById(`${props.name}`);

  var __Card = document.createElement("div");
  __Card.id = props.time;
  __Card.className = props.name;

  var __Times = document.createElement("div");
  __Times.className = "Times";
  __Times.innerHTML = (props._BeginDay + " ~ " + props._EndDay);

  var __Server = document.createElement("div");
  __Server.className = "Server";
  __Server.innerHTML = (props._Server + " 서버");

  var __Location = document.createElement("div");
  __Location.className = "Location";
  __Location.innerHTML = (props._Town + " " + props._Res1 + "구 " + props._Res2 + "번지");

  var __Description = document.createElement("div");
  __Description.className = "Description";
  __Description.innerHTML = (props._Description == undefined) ? "" : props._Description;

  var __Host = document.createElement("div");
  __Host.className = "Host";
  __Host.innerHTML = ("호스트 : " + props._Host);

  var __Link = document.createElement("div");
  __Link.className = "Link";
  var __Link_a = document.createElement("a");
  __Link_a.setAttribute("href", props._Link.substr(0,4) == "http" ? props._Link : "//"+props._Link);
  __Link_a.setAttribute("target", "_blank");
  __Link_a.setAttribute("rel", "noreferrer");
  __Link_a.setAttribute("disabled", (props._Link == "") ? "disabled" : "enabled");
  console.log(props._Link);
  __Link_a.innerHTML = "바로가기";
  __Link.appendChild(__Link_a);

  var __Delete = document.createElement("button");
  __Delete.id = props.time;
  __Delete.onclick = DeltoDB;
  __Delete.innerHTML = "삭제";

  _Div.appendChild(__Card);
  __Card.appendChild(__Times);
  __Card.appendChild(__Server);
  __Card.appendChild(__Location);
  __Card.appendChild(__Description);
  __Card.appendChild(__Host);
  __Card.appendChild(__Link);
  __Link.appendChild(__Delete);
}

function sortByBeginDay(Array) {
  Array.sort(function(a, b) {
    return (
      (a._BeginArr[0] - b._BeginArr[0]) == 0 ? 
      (a._BeginArr[1] - b._BeginArr[1]) == 0 ?
      (a._BeginArr[2] - b._BeginArr[2]) == 0 ?
      (a._BeginArr[3] - b._BeginArr[3]) == 0 ?
      (a._BeginArr[4] - b._BeginArr[4]) == 0 ? 0 : 
      a._BeginArr[4] - b._BeginArr[4] : 
      a._BeginArr[3] - b._BeginArr[3] : 
      a._BeginArr[2] - b._BeginArr[2] : 
      a._BeginArr[1] - b._BeginArr[1] : 
      a._BeginArr[0] - b._BeginArr[0]
    )
  });
}

async function GetfromDB() {
  logEvent(analytics, "Calendar_Load");
  const docRef = await getDocs(collection(db, "Calendar"));
  // const _Div = document.getElementById("Display");
  const _DivCur = document.getElementById("Current");
  const _DivFut = document.getElementById("Future");
  
  var _Array = [];
  var _ArrayOutdated = [];
  // var _CurrentArr = [];
  // var _FutureArr = [];

  try {
    // while (_Div.hasChildNodes()) {
    //   console.log("removing");
    //   _Div.removeChild(_Div.firstChild);
    // }
    while (_DivCur.hasChildNodes()) {
      // console.log("removing");
      _DivCur.removeChild(_DivCur.firstChild);
    }
    while (_DivFut.hasChildNodes()) {
      // console.log("removing");
      _DivFut.removeChild(_DivFut.firstChild);
    }

    docRef.forEach((doc) => {
      const now = new Date().getTime(); // month need +1 (2629800000)
      
      // const currentDocId = doc.id;
      const _Arr = [];

      var _ArrB1 = doc.data().BeginDay.split("-");
      var _ArrB2 = doc.data().BeginTime.split(":");
      // var _ArrB = _Arr.concat(_ArrB1[0], String(_ArrB1[1]-1), _ArrB1[2], _ArrB2);

      var _ArrE1 = doc.data().EndDay.split("-");
      var _ArrE2 = doc.data().EndTime.split(":");
      // var _ArrE = _Arr.concat(_ArrE1[0], String(_ArrE1[1]-1), _ArrE1[2], _ArrE2);

      const _DocID = doc.data().id;
      const _DocTIME = doc.data().time;
      const _BeginArr = _Arr.concat(_ArrB1[0], String(_ArrB1[1]-1), _ArrB1[2], _ArrB2);
      const _BeginDay = new Date(..._BeginArr);
      const _EndArr = _Arr.concat(_ArrE1[0], String(_ArrE1[1]-1), _ArrE1[2], _ArrE2);
      const _EndDay = new Date(..._EndArr);
      const _Server = doc.data().Server;
      const _Town = doc.data().Town;
      const _Res1 = doc.data().Res1;
      const _Res2 = doc.data().Res2;
      const _Description = doc.data().Description;
      const _Link = doc.data().Link;
      const _Username = doc.data().Username;
      const _Host = doc.data().Host;
      // const _Password = doc.data().Password;
      const _Deleted = doc.data().Deleted;

      // console.log(_BeginArr);
      // console.log(_BeginDay);

      // console.log(`Current Doc id : ${currentDocId}`);

      if (_BeginDay > now && _Deleted == 0) {
        _Array.push({
          id: _DocID,
          time: _DocTIME,
          name: "Future",
          _BeginDay: _BeginDay.toLocaleString(),
          _BeginArr: _BeginArr,
          _EndDay: _EndDay.toLocaleString(),
          _EndArr: _EndArr,
          _Server: _Server,
          _Town: _Town,
          _Res1: _Res1,
          _Res2: _Res2,
          _Description: _Description,
          _Link: _Link,
          _Username: _Username,
          _Host: _Host,
        });
      } else if (_BeginDay < now && _EndDay > now && _Deleted == 0) {
        _Array.push({
          id: _DocID,
          time: _DocTIME,
          name: "Current",
          _BeginDay: _BeginDay.toLocaleString(),
          _BeginArr: _BeginArr,
          _EndDay: _EndDay.toLocaleString(),
          _EndArr: _EndArr,
          _Server: _Server,
          _Town: _Town,
          _Res1: _Res1,
          _Res2: _Res2,
          _Description: _Description,
          _Link: _Link,
          _Username: _Username,
          _Host: _Host,
        });
      } else {
        _ArrayOutdated.push({
          id: _DocID || "",
          time: _DocTIME || "",
          name: "Current" || "",
          _BeginDay: _BeginDay || "",
          _BeginTime: doc.data().BeginTime || "",
          _EndDay: _EndDay || "",
          _EndTime: doc.data().EndTime || "",
          _Server: _Server || "",
          _Town: _Town || "",
          _Res1: _Res1 || "",
          _Res2: _Res2 || "",
          _Description: _Description || "",
          _Link: _Link || "",
          _Username: _Username || "",
          _Host: _Host || "",
          _Deleted: _Deleted || "",
        });
      }
    });
  } catch (e) {
    console.error("Error Get: ", e);
  }

  // sortByBeginDay(_CurrentArr);
  // sortByBeginDay(_FutureArr);
  sortByBeginDay(_Array);
  // console.log("Sort Completed.")

  console.log(_ArrayOutdated);

  // console.log(_Array);

  for (let i = 0; i < _Array.length; i++) {
    createCard({
      id: _Array[i].id,
      time: _Array[i].time,
      name: _Array[i].name,
      _BeginDay: _Array[i]._BeginDay.toLocaleString(),
      _EndDay: _Array[i]._EndDay.toLocaleString(),
      _Server: _Array[i]._Server,
      _Town: _Array[i]._Town,
      _Res1: _Array[i]._Res1,
      _Res2: _Array[i]._Res2,
      _Description: _Array[i]._Description,
      _Link: _Array[i]._Link,
      _Username: _Array[i]._Username,
      _Host: _Array[i]._Host,
    });
  };


  for (let i = 0; i < _ArrayOutdated.length; i++) {
    const _CalendarDocRef = doc(db, "Calendar", _ArrayOutdated[i].time)
    const _StorageDocRef = doc(db, "Storage", _ArrayOutdated[i].time)

    console.log(_ArrayOutdated[i].time);

    setDoc(_StorageDocRef, {
      id: _ArrayOutdated[i].id,
      time: _ArrayOutdated[i].time,
      BeginDay: _ArrayOutdated[i]._BeginDay,
      BeginTime: _ArrayOutdated[i]._BeginTime,
      EndDay: _ArrayOutdated[i]._EndDay,
      EndTime: _ArrayOutdated[i]._EndTime,
      Server: _ArrayOutdated[i]._Server,
      Town: _ArrayOutdated[i]._Town,
      Res1: _ArrayOutdated[i]._Res1,
      Res2: _ArrayOutdated[i]._Res2,
      Description: _ArrayOutdated[i]._Description,
      Link: _ArrayOutdated[i]._Link,
      Username: _ArrayOutdated[i]._Username,
      Host: _ArrayOutdated[i]._Host,
      Deleted: _ArrayOutdated[i]._Deleted,
    })

    deleteDoc(_CalendarDocRef);
  };
  
  return (
    <>
    </>
  );
}

GetfromDB();

export default GetfromDB;