import styled from "styled-components";


 export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: hidden;
  font-weight: 300;
  position: relative;
  font-family: nunito sans, sans-serif;
  background-color: #fff;
  color: #1b1b20;
  line-height: 1.5;
  text-align: left;
  background-image: url("https://cdn-m.timecamp.com/img/backgroundTop.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 6rem 0;
`;

export const Topcont = styled.div`
  width: 75%;
  margin: auto;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const Left = styled.div`
height:800px;
  padding: 3rem;
  border-radius: 6px;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.9);
  flex: 0 0 50%;
  max-width: 50%;

  & h1 {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.1;
    width: 93%;
    margin-right: auto;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  & h2 {
    font-weight: 700;
    color: #1b1b20;
    font-size: 52px;
    line-height: 1.1;
    width: 93%;
    margin-right: auto;
    margin-bottom: 0.5rem;
    margin-top: 20px;
  }
  & ul {
    padding: 1rem;
    margin-bottom: 2rem;
    margin-top: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const Emildiv = styled.div`
  // display: flex;
  white-space: nowrap;
  text-align: center;
  & button {
    padding: 15px 40px;
    width: 200px;
    background-color: #25cf60;
    border-radius: 26px;
    padding: 15px 40px;
    color: #fff;
    font-weight: 700;
    border: none;
    white-space: nowrap;
    text-align: center;

    :hover {
      background-color: #1da44c;
    }
  }

  & span {
    display: block;
    font-size: 16px;
    font-weight: 300;
    padding: 15px;
    white-space: nowrap;
    text-align: center;
  }
`;
export const Right = styled.div`
  margin-top: 17rem;
  margin-bottom: 3rem;
  left: 10rem;
  animation: fade 3s ease-out;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Rht = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.9);
  position: relative;
  top: -2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    border-radius: 100%;
    width: 70px;
    height: 70px;
    vertical-align: middle;
    border-style: none;
    aspect-ratio: auto 70 / 70;
  }
`;

export const RtHead = styled.p`
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 14px;
  text-align: center;
  margin-top: 0;
  padding: 0 2rem;
`;

export const RtPara = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin-top: 0;
  padding: 0 2rem;
  margin-bottom: 3rem;
`;
export const Logo = styled.img`
  width: 20%;
  margin-bottom: 3rem;
  vertical-align: middle;
  border-style: none;
  aspect-ratio: auto 91 / 21;
  height: 21px;
`;

export const GreenBox = styled.div`
  background-color: #25cf60;
  width: 100%;
  padding-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Row = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  width: 75%;
  margin: auto;
`;

export const HeadDiv = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  & h3 {
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    font-family: nunito sans, sans-serif;
    text-align: center;
  }
`;

export const ImgDiv = styled.div`
  text-align: center;
  margin: 1rem 0;
  align-items: center;
  display: flex;
  justify-content: center;

  position: relative;
  // width:
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  &img {
    vertical-align: middle;
    border-style: none;
  }
`;

export const BookDemo = styled.div`
  margin-top: 3rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  & div {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    & h2{
      font-size: 36px;
      font-weight: 800;
      width: 80%;
      margin: auto;
      text-align: center;
      font-family: lato,sans-serif;
    }
  }

  & div:first-child {
    margin: 2rem 0 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &>p{
      margin-bottom: 0;
      margin-top: 0;
      font-weight: 700;
      padding-right: 1rem;
    }
    &>a{
      text-decoration: none;
      color: #25cf60!important;
      cursor: pointer;
      font-weight: 700;
    }
  } 
`;

export const Inptbx= styled.input`
height:50px;
width:80%;
background-color:red;
`;
