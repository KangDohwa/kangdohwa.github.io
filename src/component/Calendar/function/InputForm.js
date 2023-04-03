import AddtoDB from "./AddtoDB";

import { SessionStorage } from "@component/Hooks";

export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    AddtoDB();
  }

  const [text, setText] = SessionStorage("Calendar", "");

  const {
    BeginDay = "", 
  } = text;

  const changeText = event => { // text change
    setText({
      ...text,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form id = "Form" onSubmit = {handleSubmit}>
      <div className = "Input">
        <label htmlFor = "BeginDay" id = "Time">시작하는 시간</label>
        <input id = "BeginDay" type = "date" value = {BeginDay | "1900-01-01"} onChange = {changeText} required />
        <input id = "BeginTime" type = "time" required />
        <label htmlFor = "EndDay" id = "Time">끝나는 시간</label>
        <input id = "EndDay" type = "date" required />
        <input id = "EndTime" type = "time" required />

        <label htmlFor = "Server">서버</label>
        <select id = "Server" name = "Server" required>
          <option value = "">==서버==</option>
          <option>모그리</option>
          <option>초코보</option>
          <option>카벙클</option>
          <option>톤베리</option>
          <option>펜리르</option>
        </select>
        <label htmlFor = "Town">모험가 거주구</label>

        <select id = "Town" name = "Town" required>
          <option value = "">==거주구==</option>
          <option>안갯빛 마을</option>
          <option>라벤더 안식처</option>
          <option>하늘잔 마루</option>
          <option>시로가네</option>
          <option>지고천 거리</option>
        </select>

        <input id = "Res1" type = "number" name = "Res1" required />
        <label htmlFor = "Res1" id = "Res">구</label>
        <input id = "Res2" type = "number" name = "Res2" required />
        <label htmlFor = "Res2" id = "Res">번지</label>
        
        <input id = "Username" type = "text" name = "Username" placeholder = "닉네임@서버" required />
        <label htmlFor = "Username">개최자(or 작성자)</label>
        <input id = "Password" type = "password" name = "Password" required />
        <label htmlFor = "Password">일정 비밀번호</label>
      </div>
      <div className = "Button">
        <button type = "submit">일정 추가하기</button>
      </div>
    </form>
  )
};