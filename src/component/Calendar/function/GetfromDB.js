import { db, collection, getDocs } from "@src/firebase";
import { analytics, logEvent } from "@src/firebase";

async function GetfromDB() {
  // logEvent(analytics, "Calendar_Load");
  const _Div = document.getElementById("Display");
  const docRef = await getDocs(collection(db, "Calendar"));

  try {
    while (_Div.hasChildNodes()) {
      console.log("removing");
      _Div.removeChild(_Div.firstChild);
    }

    docRef.forEach((doc) => {
      const now = new Date().getTime(); // month need +1 (2629800000)
      
      const currentDocId = doc.id;
      const _Arr = [];

      var _ArrB1 = doc.data().BeginDay.split("-");
      var _ArrB2 = doc.data().BeginTime.split(":");
      // var _ArrB = _Arr.concat(_ArrB1[0], String(_ArrB1[1]-1), _ArrB1[2], _ArrB2);

      var _ArrE1 = doc.data().EndDay.split("-");
      var _ArrE2 = doc.data().EndTime.split(":");
      // var _ArrE = _Arr.concat(_ArrE1[0], String(_ArrE1[1]-1), _ArrE1[2], _ArrE2);
      

      const _DocID = doc.data().id;
      const _BeginArr = _Arr.concat(_ArrB1[0], String(_ArrB1[1]-1), _ArrB1[2], _ArrB2);
      const _BeginDay = new Date(..._BeginArr);
      const _EndArr = _Arr.concat(_ArrE1[0], String(_ArrE1[1]-1), _ArrE1[2], _ArrE2);
      const _EndDay = new Date(..._EndArr);
      const _Server = doc.data().Server;
      const _Town = doc.data().Town;
      const _Res1 = doc.data().Res1;
      const _Res2 = doc.data().Res2;
      const _Username = doc.data().Username;
      // const _Password = doc.data().Password;
      const _Description = doc.data().Description;
      const _Link = doc.data().Link;

      console.log(`Current Doc id : ${currentDocId}`);
      if (_BeginDay > now) {
        var __Future = document.createElement("div");
        __Future.className = "Future";

        var __Times = document.createElement("div");
        __Times.className = "Times";
        __Times.innerHTML = ((_BeginDay).toLocaleDateString() + " ~ " + _EndDay.toLocaleDateString());

        var __Server = document.createElement("div");
        __Server.className = "Server";
        __Server.innerHTML = (_Server + "서버");

        var __Location = document.createElement("div");
        __Location.className = "Location";
        __Location.innerHTML = (_Town + " " + _Res1 + "구 " + _Res2 + "번지");

        var __Username = document.createElement("div");
        __Username.className = "Username";
        __Username.innerHTML = ("등록자 : " + _Username);

        var __Description = document.createElement("div");
        __Description.className = "Description";
        __Description.innerHTML = _Description;

        var __Link = document.createElement("div");
        __Link.className = "Link";
        var __Link_a = document.createElement("a");
        __Link_a.setAttribute("href", _Link);
        __Link_a.setAttribute("target", "_blank");
        __Link_a.setAttribute("rel", "noreferrer");
        __Link_a.innerHTML = "바로가기";
        __Link.appendChild(__Link_a);

        console.log("Starting Soon");

        _Div.appendChild(__Future);
        __Future.appendChild(__Times);
        __Future.appendChild(__Server);
        __Future.appendChild(__Location);
        __Future.appendChild(__Username);
        __Future.appendChild(__Description);
        __Future.appendChild(__Link);
      } else if (_BeginDay < now && _EndDay > now) {
        console.log("On Time!");
      } else {
        console.log("Outdated!");
      }
    });
  } catch (e) {
    console.error("Error Get: ", e);
  }
  
  return (
    <>
    <div id = "Calendar-Container">
      <div id = "Now">

      </div>
      <div id = "Future">

      </div>
    </div>
    </>
  );
}


export default GetfromDB;