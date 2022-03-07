import styled from "styled-components";

const IphoneDetailWrap = styled.div`
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 20px 0 0 0;
  box-sizing: border-box;
  .imgContainer {
    max-width: 100%;
    img {
      max-width: 100%;
    }
  }
  .divContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    .h1style {
      @media (max-width: 960px) {
        font-size: 16px;
      }
    }
  }
  .selectModel {
    @media (max-width: 960px) {
      padding: 0px 5px;
    }
    margin: 50px 0;
    .Mb13pro {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-between;
      padding: 30px;
      box-sizing: border-box;
      border: 1px solid #d2d2d7;
      margin-bottom: 30px;
      border-radius: 20px;
      cursor: pointer;
      @media (max-width: 960px) {
        padding: 20px 5px;
      }
      &:hover {
        border: 1px solid rgba(0, 125, 250, 0.6);
      }
      span {
        font-size: 17px;
        font-weight: 800;
        @media (max-width: 960px) {
          font-size: 10px;
        }
      }
    }
    .Mb13pro_Max {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-between;
      padding: 30px;
      box-sizing: border-box;
      border: 1px solid #d2d2d7;
      border-radius: 20px;
      cursor: pointer;
      @media (max-width: 960px) {
        padding: 20px 5px;
      }
      &:hover {
        border: 1px solid rgba(0, 125, 250, 0.6);
      }
      span {
        font-size: 17px;
        font-weight: 800;
        @media (max-width: 960px) {
          font-size: 10px;
        }
      }
    }
  }
`;

export { IphoneDetailWrap };
