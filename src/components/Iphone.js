import React from "react";
import { IphoneDetailWrap } from "styles/iphoneDetailCss";

export default function Detail() {
  return (
    <IphoneDetailWrap>
      <div className="imgContainer">
        <img
          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-family-hero?wid=470&hei=556&fmt=png-alpha&.v=1631220221000"
          alt="iphone-13"
        />
      </div>
      <div className="divContainer">
        <div>
          <p style={{ margin: "0px", color: "#bf4800" }}>New</p>
          <h1
            className="h1style"
            style={{ margin: "0px", marginBottom: "10px" }}
          >
            iPhone 13 Pro구입하기
          </h1>
          <p style={{ margin: "0px", marginBottom: "10px" }}>
            iPhone 8 이후 모델을 보상 판매하고 ￦70,000 - ￦750,000 <br />더
            저렴하게*
          </p>
        </div>
        <div>
          <h2
            style={{
              fontSize: "15px",
            }}
          >
            원하는 모델을 선택하세요.
          </h2>
          <div className="selectModel">
            <div type="button" className="Mb13pro">
              <span>iPhone 13 Pro</span>
              <span>￦1,350,000부터</span>
            </div>
            <div type="button" className="Mb13pro_Max">
              <span>iPhone 13 Pro Max</span>
              <span>￦1,490,000부터</span>
            </div>
          </div>
        </div>
      </div>
    </IphoneDetailWrap>
  );
}
