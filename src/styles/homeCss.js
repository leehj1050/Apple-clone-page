import styled from "styled-components";

const HomeContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  section {
    width: 100%;
    height: 100%;
    .img1 {
      width: 100%;
      height: 100%;
    }
  }
  .sec2 {
    max-width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    text-align: center;
    background-color: #eee;
    div {
      width: 100%;
      height: auto;
      margin: 50px;
      h1 {
        box-sizing: border-box;
        font-size: 4em;
        @media (max-width: 960px) {
          font-size: 28px;
        }
      }
    }
  }

  .sec3 {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      max-width: 850px;
      margin: 50px 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2,
      h1,
      p,
      ul {
        margin: 0;
      }
      h2 {
        margin-bottom: 10px;
        @media (max-width: 960px) {
          font-size: 22px;
        }
      }
      h1 {
        font-size: 3em;
        margin-bottom: 15px;
        @media (max-width: 960px) {
          font-size: 28px;
        }
      }
      p {
        margin-bottom: 15px;
        @media (max-width: 960px) {
          font-size: 13px;
        }
      }
      ul {
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: center;
        padding: 0;
        margin-top: 15px;
        @media (max-width: 960px) {
          flex-direction: column;
          align-items: center;
        }
        .button1 {
          width: 100px;
          padding: 15px 15px;
          box-sizing: border-box;
          background-color: #0071e3;
          border-radius: 50px;
          margin-right: 10px;
          @media (max-width: 960px) {
            margin: 0;
          }
          a {
            text-decoration: none;
            color: #fff;
            font-weight: 700;
            font-size: 17px;
            cursor: pointer;
          }
        }
        .button2 {
          padding: 15px 15px;
          margin-left: 10px;
          @media (max-width: 960px) {
            margin: 0;
          }
          a {
            text-decoration: none;
            color: #0071e3;
            font-weight: 700;
            font-size: 17px;
            cursor: pointer;
            &:hover {
              border-bottom: 2px solid #0071e3;
            }
          }
        }
      }
    }
    .img2 {
      max-width: 850px;
      height: auto;
      @media (max-width: 960px) {
        max-width: 100%;
      }
    }
  }
  .sec4 {
    max-width: 100%;
    display: flex;
    .textArea {
      max-width: 100%;
      flex: 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @media (max-width: 960px) {
        max-width: 100%;
      }
      h1 {
        font-size: 50px;
        margin-bottom: 0;
        @media (max-width: 960px) {
          font-size: 28px;
        }
      }
      p {
        margin: 0;
        margin-bottom: 15px;
      }
      .fontFirst {
        font-weight: 900;
        font-size: 20px;
        @media (max-width: 960px) {
          font-size: 12px;
        }
      }
      .buttonArea {
        list-style: none;
        display: flex;
        padding: 0;
        @media (max-width: 960px) {
          flex-direction: column;
        }
        .buy_Button {
          background-color: #0071e3;
          padding: 15px;
          box-sizing: border-box;
          border-radius: 50px;
          margin: 0px 10px 0px 0px;
          @media (max-width: 960px) {
            margin: 0;
            padding: 15px 25px;
          }
          a {
            font-size: 17px;
            text-decoration: none;
            color: #fff;
            cursor: pointer;
            font-weight: 900;
          }
        }
        .more_Button {
          padding: 15px;
          margin: 0px 0px 0px 10px;
          box-sizing: border-box;
          @media (max-width: 960px) {
            margin: 0;
          }
          a {
            font-size: 17px;
            text-decoration: none;
            cursor: pointer;
            color: #0071e3;
            font-weight: 700;
            &:hover {
              border-bottom: #0071e3;
            }
          }
        }
      }
    }
    .imgArea {
      flex: 5;
      .img3 {
        max-width: 800px;
        height: auto;
        @media (max-width: 960px) {
          max-width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
export { HomeContainer };
