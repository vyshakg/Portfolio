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
              <div className="info">System Engineer Trainee</div>
              <div className="helpinfo">Mysore</div>
              <div className="worked_on">
                WORKED ON : <TimeLineTags> Java </TimeLineTags>
                <TimeLineTags> React JS </TimeLineTags>
                <TimeLineTags> SQL </TimeLineTags>
              </div>
            </div>
            <span className="number">
              <span>Jan'18</span> <span>May'18</span>
            </span>
          </TimeLineContainerLi>
          <TimeLineContainerLi>
            <TimeLineImg src={Infosys} alt="institute" />
            <div>
              <span />
              <div className="title">Infosys</div>
              <div className="info">System Engineer </div>
              <div className="helpinfo">Chennai,Mysore</div>

              <div className="work_desc">
                My Role is to create React Components , Web application and
                Enhancing the User Experience in the User Interfacae and also
                Rapid prototyping on various client based Web application for
                Demo and Presentation purposes.
              </div>
              <div className="worked_on">
                WORKED ON :<TimeLineTags> React JS</TimeLineTags>
                <TimeLineTags> Mongo DB </TimeLineTags>
                <TimeLineTags> Node JS </TimeLineTags>
              </div>
            </div>
            <span className="number">
              <span>Jun'18</span> <span>Apr'19</span>
            </span>
          </TimeLineContainerLi>

          <TimeLineContainerLi>
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
          </TimeLineContainerLi>
        </TimeLineContainerUL>
      </Container>
    </section>
  );
}
