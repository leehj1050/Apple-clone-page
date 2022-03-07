import styled from "styled-components";

const IpadDetailWrap = styled.div`
  max-width: 100%;
  height: auto;
  section {
    max-width: 100%;
    display: flex;
    justify-content: center;
    .imgArea {
      max-width: 100%;
      @media (max-width: 960px) {
        max-width: 100%;
        height: auto;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      .img_text_Area {
        max-width: 100%;
        ul {
          display: flex;
          justify-content: space-around;
          list-style: none;
          padding: 0;
          margin: 0;
          margin-top: 50px;
          li {
            display: flex;
            flex-direction: column;
            div {
              text-align: center;
              font-size: 20px;
            }
            p {
              font-size: 11px;
              font-weight: 900;
              @media (max-width: 960px) {
                text-align: center;
              }
            }
          }
        }
      }
    }

    .Buy_button_Area {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0 20px;
      box-sizing: border-box;
      @media (max-width: 960px) {
        max-width: 100%;
        justify-content: start;
        height: auto;
      }
      h1 {
        font-size: 40px;
        @media (max-width: 960px) {
          font-size: 12px;
        }
      }
      h4 {
        margin: 0;
        @media (max-width: 960px) {
          margin-bottom: 30px;
          font-size: 12px;
        }
      }
      .container {
        max-width: auto;
        height: auto;
        display: grid;
        grid-template-rows: repeat(3, 100px);
        grid-template-columns: repeat(2, 200px);
        grid-gap: 15px;
        @media (max-width: 960px) {
          grid-template-rows: repeat(5, 50px);
          grid-template-columns: repeat(1, 100px);
        }
        div {
          border: 1px solid lightgray;
          border-radius: 15px;
          text-align: center;
          line-height: 100px;
          font-weight: 800;
          cursor: pointer;
          &:hover {
            border: 1px solid rgba(0, 125, 250, 0.6);
          }
          @media (max-width: 960px) {
            font-size: 13px;
            line-height: 50px;
          }
        }
      }
    }
  }
`;

export { IpadDetailWrap };
