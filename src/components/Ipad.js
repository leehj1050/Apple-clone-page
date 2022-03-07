import React from "react";
import { IpadDetailWrap } from "styles/ipadDetailCss";
import { FaBox, FaBoxOpen, FaEnvelopeOpenText } from "react-icons/fa";

export default function Ipad() {
  return (
    <IpadDetailWrap>
      <section>
        <div className="imgArea">
          <img
            src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-202009?wid=443&hei=535&fmt=jpeg&qlt=95&.v=1599066777000"
            alt="ipad-Air"
          />
          <div className="img_text_Area">
            <ul>
              <li>
                <div>
                  <FaBox />
                </div>
                <p>무료배송</p>
              </li>
              <li style={{ marginLeft: "18px" }}>
                <div>
                  <FaEnvelopeOpenText />
                </div>
                <p>무료 개인 메시지 각인 서비스</p>
              </li>
              <li>
                <div>
                  <FaBoxOpen />
                </div>
                <p>무료로 손쉽게 반품</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="Buy_button_Area">
          <h1>iPad Air 구입하기</h1>
          <h4>마감</h4>
          <div className="container">
            <div>스페이스 그레이</div>
            <div>실버</div>
            <div>그린</div>
            <div>로즈 골드</div>
            <div>스카이 블루</div>
          </div>
        </div>
      </section>
    </IpadDetailWrap>
  );
}
