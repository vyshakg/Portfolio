import React from "react";
import { useTheme } from "../../themes/themeContext";
import { Container } from "../../ui";
import { HeroIconsLink, HeroLinkHelper, HeroPara, HeroTag, SwitchHelperText, HeroSummary } from "../../ui/fontColor";

function Hero({ timeLineRef, contactsRef }) {
    const themeState = useTheme();

    return (
        <section className="hero">
            <Container>
                <div className="inner-hero">
                    <div className="hero-left">
                        <HeroTag>Hey, I'm</HeroTag>
                        <h1 className="hero-name">Vyshak G</h1>
                        <span className="hero-dash" />
                        <HeroPara>
                            Lead Developer | Full Stack Developer 
                        </HeroPara>
                        <HeroSummary>
                        Full Stack Software Developer with 6+ years of experience in developing web applications and backend systems.
                        Working towards to be strong software architect & love to explore in AI application development using lang chain.
                        </HeroSummary>
                        <div className="hero-links">
                            <div>
                                <HeroLinkHelper>Find Me on</HeroLinkHelper>
                                <a href="https://github.com/vyshakg" target="_blank" rel="noopener noreferrer" alt="github">
                                    <HeroIconsLink
                                        className="fab fa-github"
                                        style={{
                                            marginRight: "20px",
                                        }}
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/vyshak-g-gowda/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="linkedin"
                                >
                                    <HeroIconsLink className="fab fa-linkedin" />
                                </a>
                            </div>
                            <div className="resume-preview-right-icon">
                                <HeroLinkHelper>Resume Preview</HeroLinkHelper>
                                <a
                                    href="https://drive.google.com/file/d/18h9RwEAmJMKDnJZRKj-OsWFRbyQs2aZc/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="github"
                                >
                                    <HeroIconsLink
                                        className="fas fa-file-pdf"
                                        style={{
                                            marginRight: "20px",
                                        }}
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="hero-cta">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                className="button button-primary"
                                onClick={() => {
                                    if (contactsRef && contactsRef.current) {
                                        contactsRef.current.scrollIntoView({
                                            behavior: "smooth",
                                            inline: "center",
                                        });
                                    }
                                }}
                            >
                                Contact Me
                            </a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                className="button"
                                onClick={() => {
                                    if (timeLineRef && timeLineRef.current) {
                                        timeLineRef.current.scrollIntoView({
                                            behavior: "smooth",
                                            inline: "center",
                                        });
                                    }
                                }}
                            >
                                Timeline
                            </a>
                        </div>
                        <div style={{ display: "flex", marginTop: "1rem" }}>
                            <input
                                type="checkbox"
                                id="switch"
                                defaultChecked={!themeState.dark}
                                onClick={() => themeState.toggle()}
                            />
                            <label className="labelCustom" htmlFor="switch">
                                Toggle
                            </label>
                            <SwitchHelperText>{themeState.dark ? "Light Mode" : "Dark Mode"}</SwitchHelperText>
                        </div>
                    </div>
                    <div className="hero-media">
                        <div className="header-illustration">
                            <img
                                className="header-illustration-image asset-dark"
                                src={themeState.images.headerIllustration}
                                alt="Header illustration"
                            />
                        </div>
                        <div className="hero-media-illustration">
                            <img
                                className="hero-media-illustration-image asset-dark"
                                src={themeState.images.heroMediaIllustration}
                                alt="Hero media illustration"
                            />
                        </div>
                        <div className="hero-media-container">
                            <img className="hero-media-image asset-dark" src={themeState.images.heroMedia} alt="Hero media" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Hero;
