/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import Infosys from "../../images/infosys.jpg";
import Institute from "../../images/school.jpg";
import { Container } from "../../ui";
import { PortfolioTitle } from "../../ui/fontColor";
import {
  TimeLineContainerLi,
  TimeLineContainerUL,
  TimeLineImg,
  TimeLineTags
} from "../../ui/TimeLineUi";

export default function TimeLine() {
  const now = new Date();
  const current =
    now.toLocaleString("default", { month: "short" }) +
    "'" +
    now
      .getFullYear()
      .toString()
      .substr(2);

  return (
    <section className="container" style={{ marginTop: "7rem" }}>
      <Container>
        <div style={{ textAlign: "center" }}>
          <PortfolioTitle>My TimeLine</PortfolioTitle>
        </div>
        <TimeLineContainerUL>
          <TimeLineContainerLi>
            <TimeLineImg src={Institute} alt="institute" />
            <span />
            <div>
              <div className="title">BE - Information Science & Engineer</div>
              <div className="info">Vidyavardhaka College of Engineering</div>
              <div className="helpinfo">Mysore</div>
            </div>
            <span className="number">
              <span>Jul'13</span> <span>Jun'17</span>
            </span>
          </TimeLineContainerLi>
          <TimeLineContainerLi>
            <TimeLineImg src={Infosys} alt="institute" />
            <div>
              <span />
              <div className="title">Infosys</div>
              <div className="info">System Engineer</div>
              <div className="helpinfo">Mysore - Chennai</div>
              <div className="work_desc">
                <div className="work_desc">
                  • Finished My Infosys Training with 82% percent aggregation in
                  Java, SQL and React.
                  <br /> • Creating react components and building rapid
                  development of website for client presentation.
                  <br /> • building reusable components, and performance
                  optimization.
                  <br /> • Architected frontend, created reducers, data
                  retrieval mechanisms.
                  <br /> • Handled cross browser compatibility and
                  responsiveness for the front end.
                  <br /> • Responsible for state management (Redux based) of our
                  application.
                  <br /> • Experience in development of React components. Worked
                  with Axios & React.JS for AJAX Calls making.
                </div>
              </div>
              <div className="worked_on">
                WORKED ON :<TimeLineTags> React JS </TimeLineTags>
                <TimeLineTags> Redux </TimeLineTags>
                <TimeLineTags> Javascript </TimeLineTags>
              </div>
            </div>
            <span className="number">
              <span>Jan'18</span> <span>Oct'18</span>
            </span>
          </TimeLineContainerLi>
          <TimeLineContainerLi>
            <TimeLineImg src={Infosys} alt="institute" />
            <div>
              <span />
              <div className="title">Infosys</div>
              <div className="info">Full stack web developer (MERN)</div>
              <div className="helpinfo">Mysore</div>

              <div className="work_desc">
                • Mentor junior members of the team, overseeing development work
                efforts and quality. <br />
                • Designed Node.js application components through Express.js.
                <br />
                • Develop and execute unit, testing of developed software
                components or API’s.
                <br />
                • Work in a high-speed, agile environment to ship features in
                the shortest time possible.
                <br />
                • Calling multiple third-party API’s in Asynchronous fashion.
                <br />
                • Strong knowledge in unit testing with jest & Super-test.
                <br />
                • Have experience with using Node.js to interact with MongoDB
                (mongoose).
                <br />
                • MERN Stack development experience (Mongo dB, Express, Node,
                React).
                <br />
                • Implemented Git + Gitlab for version control.
                <br />
                • Deployed multiple Nodejs application in IDP (Infosys
                deployment platform) through Docker.
                <br />
                • Have good understanding in the Authentication of user using
                JWT.
                <br />
                • Have strong knowledge in writing Dockerfile and docker-compose
                files.
                <br />
                • Deployed multiple application in Heroku and Netlify.
                <br />
              </div>
              <div className="worked_on">
                WORKED ON :<TimeLineTags> React JS</TimeLineTags>
                <TimeLineTags> Mongo DB </TimeLineTags>
                <TimeLineTags> Node JS </TimeLineTags>
                <TimeLineTags> Express </TimeLineTags>
              </div>
            </div>
            <span className="number">
              <span>Nov'18</span> <span>{current}</span>
            </span>
          </TimeLineContainerLi>

          {/* <TimeLineContainerLi>
            <TimeLineImg src={Infosys} alt="institute" />
            <div>
              <span />
              <div className="title">Infosys</div>
              <div className="info">System Engineer </div>
              <div className="helpinfo">Mysore</div>

              <div className="work_desc">
                Moving Towards Open Source Technology which is Migrating from
                .Net/C# to Spring boot Microservices. My Responisblity is to
                design,create and deploy service created in Spring boot and also
                managing a small team and assigning a work for the Team.
              </div>
              <div className="worked_on">
                WORKED ON :<TimeLineTags> Java </TimeLineTags>
                <TimeLineTags> Spring Boot </TimeLineTags>
                <TimeLineTags> Docker </TimeLineTags>
                <TimeLineTags> Microservices </TimeLineTags>
              </div>
            </div>
            <span className="number">
              <span>Mar'19</span> <span>{current}</span>
            </span>
          </TimeLineContainerLi> */}
        </TimeLineContainerUL>
      </Container>
    </section>
  );
}
