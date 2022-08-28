import React from "react";
import styled from "styled-components";
import { Fields } from "../Components/Fields";
import { Review } from "../Components/Review";
import { Container, Topcont, Left, Emildiv, Right, Rht, RtHead, RtPara,Logo, GreenBox, Row, ImgDiv,
   HeadDiv, BookDemo, Inptbx } from "../Styled/hompage.styled";



export const Homepage = () => {
  return (
    <div>

      <Container>
        <Topcont>
          <Left>
            <h1>Free time tracking software</h1>
            <h2>
            Increase project profitability with time tracking <br />
            </h2>
            <ul>
              <li>✓ Unlimited users</li>
              <li>✓ Unlimited projects</li>
              <li>✓ 30+ integrations</li>
              <li>✓ Automated time tracking</li>
            </ul>
            <Emildiv>
              <input className="Inptbx" type="text" placeholder="Your e-mail address"/><br/>
              <p>By signing up you agree to our Terms and Conditions andPrivacy Policy.</p>
              <button>Start tracking time</button>
              <span>or sign up with</span>
              <button>G</button>
              
            </Emildiv>
          </Left>
          <Right>
            <Rht>
              <img src="https://cdn-m.timecamp.com/img/person.jpg" alt="" />
            </Rht>
            <RtHead>
              Adam Wagner, Co-owner and Chief Strategy Officer
            </RtHead>
            <RtPara>
              „TimeCamp proved to be an essential management tool that gives us
              clear insight into a project’s efficiency and helps to avoid an
              overblown workload for our team.”
            </RtPara>
            <Logo
              src="https://cdn-m.timecamp.com/img/raindrop_logo.svg"
              alt=""
            />
          </Right>
        </Topcont>
      </Container>

      <GreenBox>
        <Row>
          <HeadDiv>
            <h3>
              Trusted by 18,000 teams from all over the world (and still
              growing!)
            </h3>
          </HeadDiv>
          <ImgDiv>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png"
              alt=""
            />
          </ImgDiv>
          <ImgDiv>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png"
              alt=""
            />
          </ImgDiv>
          <ImgDiv>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png"
              alt=""
            />
          </ImgDiv>
          <ImgDiv>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png"
              alt=""
            />
          </ImgDiv>
          <ImgDiv>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png"
              alt=""
            />
          </ImgDiv>
          <ImgDiv>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png"
              alt=""
            />
          </ImgDiv>
        </Row>
      </GreenBox>

      <BookDemo>
        <div>
          <p>Want to track time in your team ?</p>
          <a href="#">Book a Demo  </a>
        </div>
        <div>
          <h2>
            Try an automatic, easy-to-use time tracker for the entire
            organization!
          </h2>
        </div>
      </BookDemo>
      <Fields/>
      <Review/>

    </div>
  );
};