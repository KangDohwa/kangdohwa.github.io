import "./Guide.scss";

import P1 from "./Calendar/1.png";
import P2 from "./Calendar/2.png";
import P3 from "./Calendar/3.png";
import P4 from "./Calendar/4.png";
import P5 from "./Calendar/5.png";

export default function GuideCalendar() {
  return (
    <>
    <div className = "Guide">
      <p>등록된 일정의 배경 색에 따라 현재 진행 중인지, 나중에 진행이 될 것인지 구분이 가능합니다.</p>
      <img src = {P1} alt = "P1"/>
      <br /><br /><br />
      <p>시작 시간 ~ 마감 시간으로 표시되며, 해당 일정의 서버, 하우징 거주구가 표시됩니다.</p>
      <p>일정에 대한 설명이 아래에 나오며, 링크가 등록된 경우 바로가기를 눌러 방문할 수 있습니다.</p>
      <img src = {P2} alt = "P2" />
      <br /><br /><br />
      <p>이하, 일정을 등록하는 방법입니다.</p>
      <br />
      <p>입력 폼에서, 시작 시간과 마감 시간은 각각의 달력/시계 아이콘을 눌러 설정할 수 있습니다.</p>
      <p>하우징이 위치한 서버와 모험가 거주구, 구역과 번지를 입력해주세요.</p>
      <img src = {P3} alt = "P3" />
      <br /><br /><br />
      <p>개최자에는 만추바 또는 아트파티 등의 호스트를 적어주세요.</p>
      <p>글 작성자에는 현재 이 폼을 작성중인 분의 정보를 적어주세요.</p>
      <p>글 작성자의 정보는 일정에 표시되지는 않지만, 부정 이용 등을 방지하기 위해 서버에 저장됩니다.</p>
      <img src = {P4} alt = "P4" />
      <br /><br /><br />
      <p>일정 추가하기 버튼을 누르면 작성한 일정이 서버에 추가됩니다.</p>
      <p>가져오기 버튼을 누르면 서버에 등록된 일정이 왼쪽의 화면에 표시됩니다.</p>
      <p>마감 시간이 지난 일정은 표시되지 않습니다.</p>
      <p>가져오기 버튼을 너무 많이 누르거나, 새로고침을 너무 많이 하면 서버가 고장날 수 있습니다. 주의해주세요!</p>
      <img src = {P5} alt = "P5" />
    </div>
    </>
  )
}