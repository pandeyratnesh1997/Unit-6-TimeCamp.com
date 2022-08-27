import React from "react";
import styled from "styled-components";

const Topp = styled.div`
  width: 30%;
  margin: auto;

  & h3 {
    color: #25cf60;
    font-weight: bold;
    margin-left: 200px;
  }

  & h1 {
    font-size: 35px;
    font-weight: bold;
    margin: 30px 0 20px 70px;
  }

  & p {
    font-size: 20px;
    text-align: center;
  }
`;

const Outa = styled.div`
  margin: auto;
  width: 90%;
  height: 550px;
  margin-top:30px;
  
`;

const Inna = styled.div`
  display: flex;
  margin: auto;
  width: 80%;
  height: 550px;
  gap: 25px;
`;
const Free = styled.div`
  width: 250px;
  height: 550px;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const Basica = styled.div`
  width: 250px;
  height: 550px;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Pros = styled.div`
  width: 250px;
  height: 550px;
  border-radius: 40px;
  background-color:#25cf60;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Enterpris = styled.div`
  width: 250px;
  height: 550px;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Firstt = styled.div`
  width: 210px;
  height: 420px;
  margin: 25px 0 0 30px;
`;

const Seco = styled.div`
  width: 210px;
  height: 420px;
  margin: 25px 0 0 30px;
`;

const Thirdo = styled.div`
  width: 210px;
  height: 420px;
  margin: 25px 0 0 30px;
  
`;

const Forth = styled.div`
  width: 210px;
  height: 420px;
  margin: 25px 0 0 30px;
  
`;

const Pricing = () => {
  return (
    <div>
      <Topp>
        <h3>PRICING</h3>
        <h1>Your time cost more</h1>
        <p>
          Use free forever plan or subscribe to a paid plan to get more
          features!
        </p>
      </Topp>

      <Outa>
        <Inna>
          <Free>
            <Firstt>
              <div>
                <h1
                  style={{
                    color: "#25cf60",
                    fontSize: "40px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Free
                </h1>
                <p
                  style={{
                    fontSize: "17px",
                    textAlign: "center",
                    borderBottom: "1px solid #25cf60",
                  }}
                >
                  Free forever plan
                </p>
              </div>
              <p style={{ marginTop: "10px" }}>
                Measure on which activities you spend time while working
              </p>
              <button
                style={{
                  width: "200px",
                  height: "50px",
                  backgroundColor: "#25cf60",
                  margin: "15px -5px",
                  borderRadius: "50px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Join for free
              </button>
              <ul>
                <li>Unlimited Users</li>
                <li style={{fontWeight: "bold"}}>Unlimited Projects & tasks</li>
                <li>Desktop & Mobile app</li>
              </ul>
            </Firstt>
          </Free>

          <Basica>
            <Seco>
              <div>
                
                <h1
                  style={{
                    color: "#25cf60",                
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  BASIC
                </h1>
                <h1
                  style={{   
                    fontSize:"30px" ,                                
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  $ 6.3
                </h1>
                <p
                  style={{
                    fontSize: "17px",
                    textAlign: "center",
                    borderBottom: "1px solid #25cf60",
                  }}
                >
                  user/mo
                </p>
              </div>
              <p style={{ marginTop: "10px" }}>
              Be more transparent and gain customers' trust
              </p>
              <button
                style={{
                  width: "200px",
                  height: "50px",
                  backgroundColor: "#25cf60",
                  margin: "28px -5px",
                  borderRadius: "50px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Start your free trial
              </button>
              <ul>
                <li>Time rounding</li>
                <li>Custom report</li>
                <li>Hide time from users</li>
                <li>Management roles</li>
                <li>Team productivity tracking</li>
                <li>XLS reports export</li>
                <li>Unlimited integrations</li>
                <li>Billable time & budgeting</li>
              </ul>
            </Seco>
          </Basica>

          <Pros>
            <Thirdo>
            
              <div>
                
                <h1
                  style={{
                    color: "white",                
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  PRO
                </h1>
                <h1
                  style={{   
                    fontSize:"30px" ,                                
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  $ 9
                </h1>
                <p
                  style={{
                    fontSize: "17px",
                    textAlign: "center",
                    borderBottom: "1px solid white",
                  }}
                >
                  user/mo
                </p>
              </div>
              <p style={{ marginTop: "10px" }}>
              Get full control over your business
              </p>
              <button
                style={{
                  width: "200px",
                  height: "50px",
                  backgroundColor: "white",
                  margin: "30px -5px",
                  borderRadius: "50px",
                  color: "#25cf60",
                  fontWeight: "bold",
                }}
              >
                Start your free trial
              </button>
              <p style={{color: "white", 
              fontSize: "16px",fontWeight:"bold"}}>Everything in Basic plus</p>
              <ul style={{color: "white"}}>
                <li>Custom user roles</li>
                <li>Billing rates</li>
                <li>Invoicing</li>
                <li>Timesheet approvals</li>
                <li>Screenshots</li>
                <li>SSO login</li>
                <li>2-factor authentication</li>
              </ul>
            
            </Thirdo>
          </Pros>

          <Enterpris>
            <Forth>
            <div>
                
                <h1
                  style={{
                    color: "#25cf60",                
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                 ENTERPRISE
                </h1>
                <h1
                  style={{   
                    fontSize:"30px" ,                                
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Let's discuss
                </h1>
                <p
                  style={{
                    fontSize: "17px",
                    textAlign: "center",
                    borderBottom: "1px solid #25cf60",
                  }}
                >
                  
                </p>
              </div>
              <p style={{ marginTop: "10px" }}>
              Customize TimeCamp to your custom needs
              </p>
              <button
                style={{
                  width: "200px",
                  height: "50px",
                  backgroundColor: "#25cf60",
                  margin: "55px -5px",
                  borderRadius: "50px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Contact us
              </button>
              <p style={{
              fontSize: "16px",fontWeight:"bold"}}>Everything in Pro plus</p>
              <ul>
                <li>Personalized training</li>
                <li>Private cloud implimentation</li>
                <li>Self hosted server</li>
                
              </ul>
            </Forth>
          </Enterpris>
        </Inna>
      </Outa>
    </div>
  );
};

export default Pricing;
