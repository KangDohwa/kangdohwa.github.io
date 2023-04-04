import { Link } from "react-router-dom";

import "./Header.scss";

export default function Header() {
  return (
    <div className = "Calendar-Header">
      <p>사용법을 보시려면 <Link to = "/how/Calendar">여기</Link>
        를 눌러주세요!</p>
      <br />
      <p>V1.2.0 - 일정 출시</p>
      <p>V1.2.1 - 상단 네비게이션을 통해 페이지 로딩 시 일정이 바로 불러와지지 않던 점 수정</p>
      <p>V1.2.4 - 주소 입력 창에 앞부분이 http로 시작하지 않아도 제대로 연결되게 수정</p>
      <br />
      <p>가져오기를 너무 많이 누르면 서버에 과부하가 걸립니다. 주의해주세요!</p>
    </div>
  )
}