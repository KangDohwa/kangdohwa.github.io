// import { useState } from "react";
import { db, doc, setDoc } from "@src/firebase";

async function AddtoDB() {
  const _BeginDay = document.getElementById("BeginDay").value;
  const _BeginTime = document.getElementById("BeginTime").value;
  const _EndDay = document.getElementById("EndDay").value;
  const _EndTime = document.getElementById("EndTime").value;
  const _Server = document.getElementById("Server").value;
  const _Town = document.getElementById("Town").value;
  const _Res1 = document.getElementById("Res1").value;
  const _Res2 = document.getElementById("Res2").value;
  const _Username = document.getElementById("Username").value;
  const _Password = document.getElementById("Password").value;
  const _Description = document.getElementById("Description").value;
  const _Link = document.getElementById("Link").value;

  const now = new Date();

  const _Y = String(now.getFullYear());
  const _M = String(now.getMonth()+1).padStart(2, "0");
  const _D = String(now.getDate()+1).padStart(2, "0");
  const _h = String(now.getHours()).padStart(2, "0");
  const _m = String(now.getMinutes()).padStart(2, "0");
  const _s = String(now.getSeconds()).padStart(2, "0");

  const time = _Y+"-"+_M+"-"+_D+"-"+_h+"_"+_m+"_"+_s;

  const docRef = doc(db, "Calendar", time);

  try {
    await setDoc(docRef, {
      id: now.getTime() + 2629800000,
      time: time,
      BeginDay: _BeginDay,
      BeginTime: _BeginTime,
      EndDay: _EndDay,
      EndTime: _EndTime,
      Server: _Server,
      Town: _Town,
      Res1: _Res1,
      Res2: _Res2,
      Username: _Username,
      Password: _Password,
      Description: _Description,
      Link: _Link,
    });
    console.log("Document has written with ID :", docRef.id);
  } catch (e) {
    console.error("Error adding Calendar :", e);
  };
};

export default AddtoDB;