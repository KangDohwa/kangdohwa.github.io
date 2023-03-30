import React from 'react';

import "./Home.scss";

function Home() {

  return (
  <>
    <div className = "Home">
      <header>
        쩨의 사이트에 오신 것을 환영합니다!
      </header>
      <p>
        아직은 개발 및 테스트중입니다.<br />
        문의는 twitter : <a href = "https://www.twitter.com/Jjae_ff14">@Jjae_ff14</a>로 해주세요.
      </p>
      <p><a href = "./Fonts">사용한 폰트</a></p>
    </div>
  </>
  );
};

export default Home;