import styled from "styled-components";

const HeaderWrap = styled.div`
  max-width: 100%;
  height: 100px;
  padding: 18px 25px;
  box-sizing: border-box;
  background-color: #d7dbdd;
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    div {
      max-width: 100px;
      height: 100%;
      margin-right: 5rem;
      padding: 0 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      .logo {
        font-size: 4.5em;
        cursor: pointer;
      }
    }
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      margin: auto;
      padding: 0;
      @media (max-width: 960px) {
        display: none;
      }
      li {
        padding: 18px 25px;
        box-sizing: border-box;
        font-size: 18px;
        font-weight: 800;
        cursor: pointer;
        &:hover {
          background-color: #5d6d7e;
          color: #fff;
          border-radius: 10px;
        }
      }
    }
  }
  .bar_Icon {
    padding: 18px 25px;
    box-sizing: border-box;
    margin: 0;
    display: none;
    @media (max-width: 960px) {
      display: block;
    }
    .icon {
      font-size: 1.5em;
      cursor: pointer;
    }
  }
`;

const MobileHeader = styled.div`
  width: 100%;
  height: auto;
  background-color: #d7dbdd;
  display: flex;
  justify-content: end;
  flex-direction: column;
  padding: 18px 25px;
  box-sizing: border-box;
  @media (min-width: 960px) {
    display: none;
  }
  ul {
    width: 100%;
    list-style: none;
    line-height: 50px;
    padding: 0;
    li {
      text-align: center;
      width: 100%;
      font-size: 1.5em;
      font-weight: 800;
      margin-bottom: 10px;
      cursor: pointer;
      &:hover {
        background-color: #5d6d7e;
        color: #fff;
        border-radius: 10px;
      }
    }
  }
`;

export { HeaderWrap, MobileHeader };
