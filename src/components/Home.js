import React from "react";
import { HomeContainer } from "styles/homeCss";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  return (
    <HomeContainer>
      <section className="sec1">
        <img
          className="img1"
          src="http://storage.enuri.info/pic_upload/knowbox_rss/202104/aHR0cHM6Ly9ibHVlZnJhbWUuY28ua3IvZGF0YS9maWxlL25ld3MwNS8zNjk2MDE0NDMxX1dRSjZ0bGQwXzNkNTMwZTkxNGFiMGJlYzllZWFlNzY0NzM2MTlmMTVkMjI4Nzg3M2YuanBn"
          alt="광고이미지"
        />
      </section>

      <section className="sec2">
        <div>
          <h1>
            ’iPhone으로 찍다’를 <br /> iPhone으로 찍다.
          </h1>
        </div>
      </section>

      <section className="sec3">
        <div>
          <h2>iPhone13 Pro</h2>
          <h1>이게 바로 프로.</h1>
          <p>￦1,350,000부터(보상판매 * 미적용 가격)</p>
          <ul>
            <li className="button1">
              <Link to="/iphone">구입하기</Link>
            </li>
            <li className="button2">
              <a href="#">더 알아보기</a>
            </li>
          </ul>
        </div>
        <img
          className="img2"
          src="https://www.apple.com/v/iphone/home/bd/images/overview/hero/iphone_13_pro__en2q051lfus2_large.jpg"
        />
      </section>

      <section className="sec4">
        <div className="textArea">
          <h1>iPad Air</h1>
          <p className="fontFirst">강력하다.다채롭다.경의롭다.</p>
          <p>￦779,000부터</p>
          <ul className="buttonArea">
            <li className="buy_Button">
              <Link to="/ipad">구입하기</Link>
            </li>
            <li className="more_Button">
              <a href="#">더 알아보기</a>
            </li>
          </ul>
        </div>
        <div className="imgArea">
          <img
            className="img3"
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-202009_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1599066778000"
          />
        </div>
      </section>
    </HomeContainer>
  );
}
