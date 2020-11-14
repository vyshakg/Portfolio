/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Infosys from '../../images/infosys.png';
import Tc from '../../images/team-computers.png';
import Institute from '../../images/school.jpg';
import { Container } from '../../ui';
import { PortfolioTitle } from '../../ui/fontColor';
import { TimeLineContainerLi, TimeLineContainerUL, TimeLineImg, TimeLineTags, TimeLineMainWrapper } from '../../ui/TimeLineUi';
import docker from '../../images/icons/docker.svg';
import mongodb from '../../images/icons/mongodb.svg';

import nodejs from '../../images/icons/nodejs.svg';

import react from '../../images/icons/react.svg';
import postgresql from '../../images/icons/postgresql.svg';
import redis from '../../images/icons/redis.svg';
import java from '../../images/icons/java.svg';
import springboot from '../../images/icons/springboot.svg';
// import elasticsearch from '../../images/icons/elasticsearch.svg';
import drools from '../../images/icons/drools.svg';

export default function TimeLine({ timeLineRef }) {
    const now = new Date();
    const current = now.toLocaleString('default', { month: 'short' }) + "'" + now.getFullYear().toString().substr(2);

    return (
        <section ref={timeLineRef} className='container' style={{ marginTop: '7rem' }}>
            <Container>
                <div style={{ textAlign: 'center' }}>
                    <PortfolioTitle>My TimeLine</PortfolioTitle>
                </div>
                <TimeLineContainerUL>
                    <TimeLineContainerLi>
                        <TimeLineImg src={Institute} alt='institute' />
                        <span />
                        <div>
                            <div className='title'>BE - Information Science & Engineer</div>
                            <div className='info'>Vidyavardhaka College of Engineering</div>
                            <div className='helpinfo'>Mysore</div>
                        </div>
                        <span className='number'>
                            <span>Jul'13</span> <span>Jun'17</span>
                        </span>
                    </TimeLineContainerLi>
                    <TimeLineContainerLi>
                        <TimeLineImg src={Infosys} alt='institute' />
                        <TimeLineMainWrapper>
                            <div className='timeline-wrapper'>
                                <span />
                                <div className='title'>Infosys</div>
                                <div className='info'>System Engineer</div>
                                <div className='helpinfo'>Mysore</div>
                                <div className='work_desc'>
                                    <br /> • Mentor junior members of the team, overseeing development work efforts and quality.
                                    <br /> • Migrated C# and .NET services to Spring framework code base.
                                    <br /> • Tools/Tech Used : Java, Spring boot, Spring JPA, JIRA, MS SQL, Git, Node.js, React.
                                    <br /> • Designed Java microservices application components through Spring boot and cloud.
                                    <br /> • Deployed multiple Java application in IDP Infosys deployment platform) through Docker.
                                    <br /> • Creating react components and building rapid development of website for client presentation.
                                    <br /> • building reusable components, and performance optimization.
                                    <br /> • Work in a high-speed, agile environment to ship features in the shortest time possible.
                                    <br /> • Have good understanding in the Authentication of user using JWT.
                                </div>
                                <div className='worked_on'>
                                    WORKED ON :<TimeLineTags> Java </TimeLineTags>
                                    <TimeLineTags> Spring Boot </TimeLineTags>
                                    <TimeLineTags> Spring JPA </TimeLineTags>
                                    <TimeLineTags> Spring Cloud </TimeLineTags>
                                    <TimeLineTags> Drools </TimeLineTags>
                                    <TimeLineTags> React JS </TimeLineTags>
                                    <TimeLineTags> Nodejs </TimeLineTags>
                                    <TimeLineTags> Javascript </TimeLineTags>
                                    <TimeLineTags> Postgres </TimeLineTags>
                                    <TimeLineTags> Docker </TimeLineTags>
                                    <TimeLineTags> ELK stack </TimeLineTags>
                                    <TimeLineTags> Microservices </TimeLineTags>
                                </div>
                            </div>
                            <div className='tech-icosns-holder'>
                                <div className='tooltip'>
                                    <img src={java} alt='java-icn' className='icons-style ' />
                                    <span className='tooltiptext'>Java</span>
                                </div>
                                <div className='tooltip'>
                                    <img src={springboot} alt='spring-boot-icn' className='icons-style ' style={{ width: '85%' }} />
                                    <span className='tooltiptext'>Spring Boot</span>
                                </div>
                                <div className='tooltip'>
                                    <img src={nodejs} alt='nodejs-icn' className='icons-style ' />
                                    <span className='tooltiptext'>Nodejs</span>
                                </div>
                                {/* <div className='tooltip'>
                                    <img src={elasticsearch} alt='elasticsearch-icn' className='icons-style' />
                                    <span className='tooltiptext'>Elasticsearch</span>
                                </div> */}
                                <div className='tooltip'>
                                    <img src={mongodb} alt='mongodb-icn' className='icons-style' />
                                    <span className='tooltiptext'>mongodb</span>
                                </div>
                                <div className='tooltip'>
                                    <img src={drools} alt='drools-icn' className='icons-style' />
                                    <span className='tooltiptext'>Drools</span>
                                </div>

                                <div className='tooltip'>
                                    <img src={docker} alt='docker-icn' className='icons-style' style={{ width: '60%' }} />
                                    <span className='tooltiptext'>Docker</span>
                                </div>
                            </div>
                        </TimeLineMainWrapper>
                        <span className='number'>
                            <span>Jan'18</span> <span>Jan'20</span>
                        </span>
                    </TimeLineContainerLi>
                    <TimeLineContainerLi>
                        <TimeLineImg src={Tc} alt='institute' />
                        <TimeLineMainWrapper>
                            <div className='timeline-wrapper'>
                                <span />
                                <div className='title'>Team Computers</div>
                                <div className='info'>Software Engineer II</div>
                                <div className='helpinfo'>Bangalore</div>
                                <div className='work_desc'>
                                    <br /> • Built an analytics tool with Node.js and PostgresSQL, that provided external/internal <br />
                                    dashboards for 1B daily events.
                                    <br /> • Worked on their Products like Chat bots and Email Bot and creating customs chat bots
                                    <br /> and chat cards to meet the client requirements.
                                    <br /> • Optimizing queries and creating best index for better performance.
                                    <br /> • Created a complex algorithm to manipulate data and feed it to train ML models.
                                    <br /> • Integrated more than 2 external software like Facebook, Zendesk and others.
                                    <br /> • Have a knowledge on writing efficient Dockerfile with multi-stage and passing ENV's.
                                    <br /> • Have a knowledge on fixing security issues in npm modules.
                                </div>
                                <div className='worked_on'>
                                    WORKED ON :<TimeLineTags> Node JS </TimeLineTags>
                                    <TimeLineTags> Javascript </TimeLineTags>
                                    <TimeLineTags> Express/Koa </TimeLineTags>
                                    <TimeLineTags> Microservices </TimeLineTags>
                                    <TimeLineTags> Postgres </TimeLineTags>
                                    <TimeLineTags> Mongo DB </TimeLineTags>
                                    <TimeLineTags> Docker </TimeLineTags>
                                </div>
                                {/* <HeroLinkHelper style={{ marginBottom: '13px' }}>Technologies used:</HeroLinkHelper> */}
                            </div>
                            <div className='tech-icosns-holder'>
                                <div className='tooltip'>
                                    <img src={nodejs} alt='nodejs-icn' className='icons-style ' />
                                    <span className='tooltiptext'>Nodejs</span>
                                </div>
                                <div className='tooltip'>
                                    <img src={mongodb} alt='mongodb-icn' className='icons-style' />
                                    <span className='tooltiptext'>mongodb</span>
                                </div>

                                <div className='tooltip'>
                                    <img src={react} alt='react-icn' className='icons-style' />
                                    <span className='tooltiptext'>React</span>
                                </div>
                                <div className='tooltip'>
                                    <img src={postgresql} alt='postgresql-icn' className='icons-style' />
                                    <span className='tooltiptext'>Postgresql</span>
                                </div>
                                <div className='tooltip'>
                                    <img src={redis} alt='react-icn' className='icons-style' />
                                    <span className='tooltiptext'>Redis</span>
                                </div>
                                <div className='tooltip'>
                                    <img src={docker} alt='docker-icn' className='icons-style' style={{ width: '60%' }} />
                                    <span className='tooltiptext'>Docker</span>
                                </div>
                            </div>
                        </TimeLineMainWrapper>
                        <span className='number'>
                            <span>Feb'20</span> <span>{current}</span>
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
