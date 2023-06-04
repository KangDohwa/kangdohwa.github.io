import React from 'react';

import "./Footer.scss";

function Home() {

  return (
  <>
    <div className = "Footer">
      <p>
        이 사이트는 개인이 개발중인 사이트입니다.<br />
        <a href = "https://docs.github.com/ko/pages" target = "_blank" rel="noreferrer">Github Pages</a>를 통해 배포되고 있습니다.
      </p>
      {/* <p>
        사이트의 배경 이미지는 본인에게 저작권이 있으며, 배경 이미지를 생성기 이외의 용도로 사용하는 것을 금지합니다.<br />
        생성기의 코드 및 배경 이미지 등의 무단 수정을 금합니다.<br />
        ⓒ 2023 Dohwa.
      </p> */}
    </div>
  </>
  );
};

export default Home;