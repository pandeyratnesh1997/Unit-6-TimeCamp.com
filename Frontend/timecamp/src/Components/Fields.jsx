import React from "react";
import styled from "styled-components";

const FeatureSection = styled.div`
  margin-bottom: 2rem;
`;
const Container = styled.div`
  margin-top: 4rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  max-width: 1140px;
`;

const Row = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TextDiv = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  margin-top: 2rem;
  position: relative;
  width: 42%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;
const ImgDiv = styled.div`
  height: 650px;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  text-align: center;
  margin-top: 2rem;
  position: relative;
  width: 49%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  & img {
    width: 100%;
    vertical-align: middle;
    border-style: none;
    text-align: center;
  }
`;
const GP = styled.p`
  font-size: 14px;
  color: #25cf60;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 2rem;
  margin-top: 0;
  text-align: left;
`;
const H2 = styled.h2`
  padding-right: 2rem !important;
  text-align: left;
  font-size: 48px;
  font-weight: 700;
  color: #1b1b20;
  z-index: 1;
  position: relative;
  letter-spacing: 0;
  cursor: default;
  font-family: lato, sans-serif;
  margin-bottom: 0.5rem;
  line-height: 1.1;
`;

const Para = styled.p`
  font-size: 16px;
  font-weight: 400;
  padding: 1rem 0;
  text-align: left;
  margin-top: 0;
  margin-bottom: 1rem;
`;
const Content = styled.div`
  margin-top: 10px;
  min-height: 240px;
`;

const Card = styled.div`
  border: none;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 0.25rem;
`;
const H3 = styled.h3`
  padding: 0;
  text-align: left;
  margin-bottom: 0 !important;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 0;
  background-color: #f3f3f3;
  & button {
    font-size: 15px;
    text-decoration: none;
    border-bottom: 2px solid #25cf60;
    color: #1b1b20;
    font-weight: 700;
    padding-bottom: 10px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    line-height: 1.25;
    transition: all 0.15s ease-in-out;
    background-color: #f3f3f3;
  }
`;

const CardBody = styled.div`
  margin: 0 !important;
  padding: 1rem 0 0;
  flex: 1 1 auto;
  background-color: #f3f3f3;
  & p {
    text-align: left;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
const XYZ = styled.div`
  border-bottom: 0;
  background-color: #f3f3f3;
  padding: 0;
  & h3 {
    padding: 0;
    text-align: left;
    margin-bottom: 0 !important;
    letter-spacing: 0;
    cursor: default;
    font-family: lato, sans-serif;
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
    margin-top: 0;
  }
  & button {
    font-size: 15px;
    border-bottom: none;
    text-decoration: none;
    color: #767676;
    font-weight: 400;
    padding-bottom: 10px;
  }
`;

const GreenBtn = styled.a`
  display: flex;
  margin-top: 2rem;
  width: fit-content;
  background-color: #25cf60;
  border-radius: 26px;
  padding: 15px 40px;
  color: #fff;
  font-weight: 700;
  text-decoration: none;

  :hover {
    background-color: #1da44c;
  }
`;

export const Fields = () => {
  return (
    <div>
      <FeatureSection>
        <Container>
          <Row>
            <TextDiv>
              <div>
                <GP>for employees</GP>
                <H2>Track your employees working time</H2>
                <Para>
                  Log working hours of your employees automatically or manually
                  and make sure they are billed fairly.
                </Para>
                <Content>
                  <Card>
                    <div>
                      <H3>
                        <button>
                          Check logged time on the handy Timesheet
                        </button>
                      </H3>
                    </div>
                    <CardBody>
                      <p>
                        Enjoy the transparency - check your employees time
                        records with more detailed information on the handy
                        timesheet or a graphical, calendar-like view.
                      </p>
                    </CardBody>
                  </Card>

                  <Card>
                    <XYZ>
                      <h3>
                        <button>Try our easy-to-use desktop app</button>
                      </h3>
                    </XYZ>
                  </Card>

                  <Card>
                    <XYZ>
                      <h3>
                        <button>Track your activities automatically</button>
                      </h3>
                    </XYZ>
                  </Card>
                </Content>
                <GreenBtn href="#">Track employees time</GreenBtn>
              </div>
            </TextDiv>
            <ImgDiv>
              <img
                src="https://cdn-m.timecamp.com/img/greenbranding/features/img-home-features.png"
                alt=""
              />
            </ImgDiv>
          </Row>
          <Row>
            <ImgDiv>
              <img
                src="https://cdn-m.timecamp.com/img/greenbranding/features/reporting-features.png"
                alt=""
              />
            </ImgDiv>
            <TextDiv>
              <div>
                <GP>FOR MANAGERS</GP>
                <H2>Track project time and budget easier than ever before</H2>
                <Para>
                  Stay on top of your team’s performance and create accurate
                  resource estimates for all the projects.
                </Para>
                <Content>
                  <Card>
                    <div>
                      <H3>
                        <button>
                          Ensure project profitability by analyzing reports
                        </button>
                      </H3>
                    </div>
                    <CardBody>
                      <p>
                        TimeCamp provides you with all the data you need to
                        analyze the projects’ performance to ensure your team
                        always stays on track. Look at the clear graphics and
                        get a better view of the time tracked!
                      </p>
                    </CardBody>
                  </Card>

                  <Card>
                    <XYZ>
                      <h3>
                        <button>
                          Integrate with other tools for better performance
                        </button>
                      </h3>
                    </XYZ>
                  </Card>

                  <Card>
                    <XYZ>
                      <h3>
                        <button>
                          Take advantage of a simple, accurate budgeting
                        </button>
                      </h3>
                    </XYZ>
                  </Card>
                </Content>
                <GreenBtn href="#">Increase team productivity</GreenBtn>
              </div>
            </TextDiv>
          </Row>
          <Row>
            <TextDiv>
              <div>
                <GP>ENTERPRISE</GP>
                <H2>Try enterprise time tracking at the highest level</H2>
                <Para>
                  Custom needs? No problem! Contact us, and we will definitely
                  find a perfect solution for your enterprise.
                </Para>
                <Content>
                  <Card>
                    <div>
                      <H3>
                        <button>Transfer multilevel project structures</button>
                      </H3>
                    </div>
                    <CardBody>
                      <p>
                        No matter how many projects your team is currently
                        working on, with TimeCamp you'll be able to organize
                        work time without any problem
                      </p>
                    </CardBody>
                  </Card>

                  <Card>
                    <XYZ>
                      <h3>
                        <button>
                          Achieve full compliance with data regulations
                        </button>
                      </h3>
                    </XYZ>
                  </Card>

                  <Card>
                    <XYZ>
                      <h3>
                        <button>
                          Get help from our Customer Success Manager
                        </button>
                      </h3>
                    </XYZ>
                  </Card>
                </Content>
                <GreenBtn href="#">Contact for customized solution</GreenBtn>
              </div>
            </TextDiv>
            <ImgDiv>
              <img
                src="https://cdn-m.timecamp.com/img/greenbranding/features/project-structure.png"
                alt=""
              />
            </ImgDiv>
          </Row>
          <Row>
            <ImgDiv>
              <img
                src="https://cdn-m.timecamp.com/img/greenbranding/features/attendance-features.png"
                alt=""
              />
            </ImgDiv>
            <TextDiv>
              <div>
                <GP>for hr</GP>
                <H2>Check Timesheets and control attendance in one place</H2>
                <Para>
                  With TimeCamp you can forget about endless stacks of papers!
                  Take advantage of convenient and easy to use tools to support
                  your daily HR and payroll work.
                </Para>
                <Content>
                  <Card>
                    <div>
                      <H3>
                        <button>Track attendance automatically</button>
                      </H3>
                    </div>
                    <CardBody>
                      <p>
                        TimeCamp allows both you and your employees to keep an
                        eye on their absence, sick days, or vacation leaves.
                        Track attendance and working hours easily as never
                        before.
                      </p>
                    </CardBody>
                  </Card>

                  <Card>
                    <XYZ>
                      <h3>
                        <button>Check and approve employees Timesheets</button>
                      </h3>
                    </XYZ>
                  </Card>

                  <Card>
                    <XYZ>
                      <h3>
                        <button>
                          Integrate with payroll tools to work faster
                        </button>
                      </h3>
                    </XYZ>
                  </Card>
                </Content>
                <GreenBtn href="#">Make HR's work easier</GreenBtn>
              </div>
            </TextDiv>
          </Row>
        </Container>
      </FeatureSection>
      <img
        src="https://www.linkpicture.com/q/Screenshot-2022-07-22-034419.png"
        alt=""
        style={{ width: "100%" }}
      />
    </div>
  );
};