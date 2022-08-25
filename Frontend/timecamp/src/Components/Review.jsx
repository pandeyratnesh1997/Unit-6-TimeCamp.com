import React from "react";
import styled from "styled-components";

const Head = styled.div`
  text-align: center;
  letter-spacing: 1px;
  & p {
    margin-top: 100px;
    font-size: 14px;
    color: #25cf60;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  & h2 {
    font-size: 36px;
    font-weight: 700;
    padding: 0 24%;
  }
`;
const Heading = styled.div`
  display: flex;
  justify-content: center;
  gap: 12%;
  margin: 40px 0;
`;
const P = styled.p`
  font-weight: 500;
  padding-bottom: 5px;
  border-bottom: 2px solid #25cf60;
`;
const Reviews = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
  padding: 0 20px;
  margin-top: 80px;

  &>div{
    width: 22%;
    padding: 20px;
  }
`;

const Spl = styled.div`
background-color: #f3f3f3;
border-radius: 20px;
`
const IMG = styled.div`
display: flex;
justify-content: space-evenly;
margin: 100px 0;
& img{
    width: 150px;
    height: 75px;
}
`
export const Review = () => {
  return (
    <div>
      <Head>
        <p>REVIEWS</p>
        <h2>
          Time tracking software for businesses across all industries and sizes
        </h2>
      </Head>
      <Heading>
        <P>Marketing agencies</P>
        <p>IT & Software houses</p>
        <p>Designers</p>
        <p>Accounting</p>
      </Heading>

      <Reviews>
        <div>
          <p>
            We've tried a lot of tools and the integration, flexibility and fast
            array of features that come with TimeCamp have really made this tool
            stand out and pay for itself. It connects to a number of tools we
            use like our in house project management tools, our client's project
            management tools and our accounting software.
          </p>
          <br />
          <p>
            <b>Jakes</b>
          </p>
        </div>
        <div>
          <p>
            The primary reason I chose TimeCamp was the direct
            timekeeping-to-invoicing function, which has been a tremendous
            timesaver. I love the way it shows me what I'm spending my time on
            even when I'm not logging billable hours.
          </p>
          <br />
          <p>
            <b>Kathryn</b>
          </p>
        </div>
        <Spl>
          <p>
            Great asset to managing our marketing agency. We love the ease it
            takes to input times. We never have to worry about time record
            keeping because TimeCamp does it so accurately. It makes creating
            our invoices at the end of each month so much easier.
          </p>
          <br />
          <p>
            Review from <b>GetApp.com</b>
          </p>
        </Spl>
        <div>
          <p>
            Our business problem was simple at any given time we have 20 or so
            contractors working on a handful of different projects and we needed
            to be scientific about knowing how many of whose hours were being
            spent on which project. TimeCamp solved this problem well and
            simply.
          </p>
          <br />
          <p>
            <b>Noah</b>
          </p>
        </div>
      </Reviews>

      <IMG>
        <img src="https://cdn-m.timecamp.com/img/greenbranding/features/crozdesk.png" alt="" />
        <img src="https://cdn-m.timecamp.com/img/greenbranding/features/capterra.png" alt="" />
        <img src="https://cdn-m.timecamp.com/img/greenbranding/features/crowd.png" alt="" />
        <img src="https://cdn-m.timecamp.com/img/greenbranding/features/get-app.png" alt="" />
      </IMG>
    </div>
  );
};