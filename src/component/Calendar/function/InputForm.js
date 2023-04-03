import AddtoDB from "./AddtoDB";
import GetfromDB from "./GetfromDB";

import { SessionStorage } from "@component/Hooks";

import "./InputForm.scss";

export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    AddtoDB();
  }

  const [text, setText] = SessionStorage("Calendar", "");

  const {
    BeginDay = "", BeginTime = "", EndDay = "", EndTime = "",
    Server = "", Town = "", Res1 = "", Res2 = "",
    Username = "", Password = "", Description = "", Link = "",
  } = text;

  const changeText = event => { // text change
    setText({
      ...text,
      [event.target.id]: event.target.value
    });
  };
  
  return (
    <form id = "Form" onSubmit = {handleSubmit}>
      <div className = "TimeField">
        <div>
          <p>시작하는 시간</p>
          <input id = "BeginDay" type = "date" value = {BeginDay} onChange = {changeText} required />
          <input id = "BeginTime" type = "time" value = {BeginTime} onChange = {changeText} required />
        </div>
        <div className = "Spacer">
          <p>~</p>
        </div>
        <div>
          <p>끝나는 시간</p>
          <input id = "EndDay" type = "date" value = {EndDay} onChange = {changeText} required />
          <input id = "EndTime" type = "time" value = {EndTime} onChange = {changeText} required />
        </div>
      </div>

      <div className = "SelectField">
        <div>
          <label htmlFor = "Server">서버 : </label>
          <select id = "Server" value = {Server} onChange = {changeText} required>
            <option value = "">==서버==</option>
            <option>모그리</option>
            <option>초코보</option>
            <option>카벙클</option>
            <option>톤베리</option>
            <option>펜리르</option>
          </select>
        </div>

        <div>
          <label htmlFor = "Town">모험가 거주구 : </label>
          <select id = "Town" value = {Town} onChange = {changeText} required>
            <option value = "">==거주구==</option>
            <option>안갯빛 마을</option>
            <option>라벤더 안식처</option>
            <option>하늘잔 마루</option>
            <option>시로가네</option>
            <option>지고천 거리</option>
          </select>
        </div>
      </div>

      <div className = "TextField">
        <div>
          <input id = "Res1" type = "number" value = {Res1} onChange = {changeText} min = {1} max = {24} required />
          <label htmlFor = "Res1" id = "Res">구</label>
          <input id = "Res2" type = "number" value = {Res2} onChange = {changeText} min = {1} max = {60} required />
          <label htmlFor = "Res2" id = "Res">번지</label>
        </div>

        <div>
          <textarea id = "Description" value = {Description} onChange = {changeText} placeholder = "일정에 대한 설명을&#10;여기에 입력해주세요!" />
          <textarea id = "Link" value = {Link} onChange = {changeText} placeholder = "포스타입 등의&#10;안내 페이지가 있다면&#10;여기에 입력해주세요!" />
        </div>
        
        <div className = "UserInfo">
          <div>
            <p>개최자(or 작성자)</p>
            <input id = "Username" type = "text" value = {Username} onChange = {changeText} placeholder = "닉네임@서버" required />
          </div>
          {/* <div>
            <p>비밀번호</p>
            <input id = "Password" type = "password" value = {Password} onChange = {changeText} required />
          </div> */}
        </div>
      </div>
      <div className = "BtnField">
        <button type = "submit">일정 추가하기</button>
        <button type = "button" onClick = {GetfromDB}>가져오기</button>
      </div>
    </form>
  )
};