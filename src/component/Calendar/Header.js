import { Link } from "react-router-dom";

import "./Header.scss";

export default function Header() {
  return (
    <div className = "Calendar-Header">
    <p>사용법을 보시려면 <Link to = "/how/Calendar">여기</Link>
      를 눌러주세요!</p>
    <br />
      <p>V1.2.0 일정 출시</p>
      <br />
      <p>가져오기를 너무 많이 누르면 서버에 과부하가 걸립니다. 주의해주세요!</p>
    </div>
  )
}