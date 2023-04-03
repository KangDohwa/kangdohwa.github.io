import AddtoDB from "./AddtoDB";

import { SessionStorage } from "@component/Hooks";

export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    AddtoDB();
  }

  const [text, setText] = SessionStorage("Calendar", "");

  const {
    BeginDay = "", BeginTime = "", EndDay = "", EndTime = "",
    Server = "", Town = "", Res1 = "", Res2 = "",
    Username = "", Password = "",
  } = text;

  const changeText = event => { // text change
    setText({
      ...text,
      [event.target.id]: event.target.value
    });
  };
  
  return (
    <form id = "Form" onSubmit = {handleSubmit}>
      <div className = "Input">
        <label htmlFor = "BeginDay" id = "Time">시작하는 시간</label>
        <input id = "BeginDay" type = "date" value = {BeginDay} onChange = {changeText} required />
        <input id = "BeginTime" type = "time" value = {BeginTime} onChange = {changeText} required />
        <label htmlFor = "EndDay" id = "Time">끝나는 시간</label>
        <input id = "EndDay" type = "date" value = {EndDay} onChange = {changeText} required />
        <input id = "EndTime" type = "time" value = {EndTime} onChange = {changeText} required />

        <label htmlFor = "Server">서버</label>
        <select id = "Server" value = {Server} onChange = {changeText} required>
          <option value = "">==서버==</option>
          <option>모그리</option>
          <option>초코보</option>
          <option>카벙클</option>
          <option>톤베리</option>
          <option>펜리르</option>
        </select>
        <label htmlFor = "Town">모험가 거주구</label>

        <select id = "Town" value = {Town} onChange = {changeText} required>
          <option value = "">==거주구==</option>
          <option>안갯빛 마을</option>
          <option>라벤더 안식처</option>
          <option>하늘잔 마루</option>
          <option>시로가네</option>
          <option>지고천 거리</option>
        </select>

        <input id = "Res1" type = "number" value = {Res1} onChange = {changeText} min = {1} max = {24} required />
        <label htmlFor = "Res1" id = "Res">구</label>
        <input id = "Res2" type = "number" value = {Res2} onChange = {changeText} min = {1} max = {60} required />
        <label htmlFor = "Res2" id = "Res">번지</label>
        
        <input id = "Username" type = "text" value = {Username} onChange = {changeText} placeholder = "닉네임@서버" required />
        <label htmlFor = "Username">개최자(or 작성자)</label>
        <input id = "Password" type = "password" value = {Password} onChange = {changeText} required />
        <label htmlFor = "Password">일정 비밀번호</label>
      </div>
      <div className = "Button">
        <button type = "submit">일정 추가하기</button>
      </div>
    </form>
  )
};