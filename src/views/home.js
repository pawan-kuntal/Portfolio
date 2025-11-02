import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import SimpleFooter from '../components/simple-footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>PK Portfolio</title>
        <meta property="og:title" content="PK Portfolio" />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.hero__card {
  animation: none;
  transition: none;
}
}
@media (prefers-reduced-motion: reduce) {
.portfolio__card:hover {
  transform: none;
}
.portfolio__card:hover .portfolio__card-media img {
  transform: none;
}
}
@media (prefers-reduced-motion: reduce) {
.skills__card:hover, .skills__card:focus {
  transform: none;
}
.skills__card--highlight {
  animation: none;
}
}
@media (prefers-reduced-motion: reduce) {
.experience__card:hover {
  transform: none;
}
.experience__card:hover .experience__card-media img {
  transform: none;
}
}
@media (prefers-reduced-motion: reduce) {
.contact__method:hover {
  transform: none;
}
}
@media (prefers-reduced-motion: reduce) {
.cta__inner {
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <section id="hero" aria-labelledby="hero-heading" className="hero">
        <div className="hero__backplate"></div>
        <div className="hero__mid">
          <div className="hero__card">
            <div className="hero__content">
              <img
                src="/images/images.jpeg"
                alt="Pawan Kuntal portrait"
                className="hero__avatar"
              />
              <h1 id="hero-heading" className="hero__title">
                <span className="home-heroname">Pawan Kuntal</span>
              </h1>
              <p className="hero__tagline">Frontend Web Developer</p>
              <p className="hero__description">
                {' '}
                I build futuristic, high-performance interfaces. Specializing in
                HTML, CSS, JavaScript and React.js, I craft responsive,
                accessible experiences that feel effortless and
                forward-thinking.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="hero__skills">
                <div className="hero__skill">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewbox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                    ></path>
                  </svg>
                  <span>HTML/CSS/JS</span>
                </div>
                <div className="hero__skill">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewbox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                    ></path>
                  </svg>
                  <span>React.js</span>
                </div>
                <div className="hero__skill">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
                      <path d="M3 12a9 3 0 0 0 18 0"></path>
                    </g>
                  </svg>
                  <span>API Integration</span>
                </div>
              </div>
              <div className="hero__cta">
                <a href="#experience">
                  <div
                    aria-label="Explore projects"
                    className="btn btn-primary"
                  >
                    <span>
                      {' '}
                      Explore Projects
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
                <a href="#contact">
                  <div aria-label="Get in touch" className="btn btn-outline">
                    <span>
                      {' '}
                      Get in Touch
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="skills"
        role="region"
        aria-label="Skills and proficiency"
        className="skills"
      >
        <div className="skills__container">
          <div className="skills__header">
            <h2 className="section-title">Core Toolkit</h2>
            <p className="section-subtitle">Precision Frontend Engineering</p>
          </div>
          <div className="skills__grid">
            <div className="skills__column skills__column--left">
              <div tabindex="0" className="skills__card">
                <div className="skills__card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewbox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                    ></path>
                  </svg>
                </div>
                <h3 className="skills__card-title">Semantic Structure</h3>
                <p className="skills__card-description">
                  {' '}
                  HTML5 markup that scales with modern interfaces
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="HTML5 proficiency 95%"
                  className="skills__proficiency"
                >
                  <div className="home-skillsproficiency-bar1 skills__proficiency-bar"></div>
                  <span className="skills__proficiency-text">Expert</span>
                </div>
              </div>
              <div tabindex="0" className="skills__card">
                <div className="skills__card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
                      <path d="M3 12a9 3 0 0 0 18 0"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="skills__card-title">Data &amp; Persistence</h3>
                <p className="skills__card-description">
                  {' '}
                  Practical SQL for feature-complete apps
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="SQL proficiency 75%"
                  className="skills__proficiency"
                >
                  <div className="home-skillsproficiency-bar2 skills__proficiency-bar"></div>
                  <span className="skills__proficiency-text">Competent</span>
                </div>
              </div>
            </div>
            <div className="skills__column skills__column--center">
              <div
                tabindex="0"
                className="skills__card skills__card--highlight"
              >
                <div className="skills__card-icon skills__card-icon--large">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewbox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                    ></path>
                  </svg>
                </div>
                <h3 className="skills__card-title">Interactive Logic</h3>
                <p className="skills__card-subtitle">Robust JavaScript</p>
                <p className="skills__card-description">
                  {' '}
                  ES6+ patterns, event-driven architecture and clean module
                  design for responsive client experiences
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div
                  role="progressbar"
                  aria-valuenow="92"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="JavaScript proficiency 92%"
                  className="skills__proficiency"
                >
                  <div className="home-skillsproficiency-bar3 skills__proficiency-bar"></div>
                  <span className="skills__proficiency-text">Expert</span>
                </div>
              </div>
              <div
                tabindex="0"
                className="skills__card skills__card--highlight"
              >
                <div className="skills__card-icon skills__card-icon--large">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="skills__card-title">Reactive Interfaces</h3>
                <p className="skills__card-subtitle">React.js Mastery</p>
                <p className="skills__card-description">
                  {' '}
                  Component architecture, hooks-driven state, performance
                  optimization and API integration for real-time UIs
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="React.js proficiency 90%"
                  className="skills__proficiency"
                >
                  <div className="home-skillsproficiency-bar4 skills__proficiency-bar"></div>
                  <span className="skills__proficiency-text">Expert</span>
                </div>
              </div>
              <div
                tabindex="0"
                className="skills__card skills__card--highlight"
              >
                <div className="skills__card-icon skills__card-icon--large">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path>
                      <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                      <rect width="8" height="8" x="8" y="8" rx="1"></rect>
                    </g>
                  </svg>
                </div>
                <h3 className="skills__card-title">Styling Systems</h3>
                <p className="skills__card-subtitle">Scalable UI</p>
                <p className="skills__card-description">
                  {' '}
                  CSS3, Tailwind CSS and Material UI for pixel-perfect layouts
                  and design systems
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div
                  role="progressbar"
                  aria-valuenow="88"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="CSS proficiency 88%"
                  className="skills__proficiency"
                >
                  <div className="home-skillsproficiency-bar5 skills__proficiency-bar"></div>
                  <span className="skills__proficiency-text">Advanced</span>
                </div>
              </div>
            </div>
            <div className="skills__column skills__column--right">
              <div tabindex="0" className="skills__card">
                <div className="skills__card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewbox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19h8M4 17l6-6l-6-6"
                    ></path>
                  </svg>
                </div>
                <h3 className="skills__card-title">Tooling &amp; Workflow</h3>
                <p className="skills__card-description">
                  {' '}
                  VSCode, GitHub, CI-friendly project organization
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="Tooling proficiency 85%"
                  className="skills__proficiency"
                >
                  <div className="home-skillsproficiency-bar6 skills__proficiency-bar"></div>
                  <span className="skills__proficiency-text">Advanced</span>
                </div>
              </div>
              <div tabindex="0" className="skills__card skills__card--stat">
                <div className="skills__stat-number">
                  <span>15+</span>
                </div>
                <p className="skills__stat-label">Projects Delivered</p>
                <p className="skills__card-description">
                  {' '}
                  Real-world applications from concept to production
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="experience"
      >
        <div className="experience__container">
          <div className="experience__header">
            <h2 id="experience-heading" className="section-title">
              {' '}
              Experience &amp; Projects
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="section-subtitle">
              {' '}
              Bridging design and code to build future-ready interfaces
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="experience__timeline">
            <div className="experience__column experience__column--timeline">
              <article
                role="article"
                aria-labelledby="exp-1"
                className="experience__card experience__card--hero"
              >
                <div className="experience__card-media">
                  <img
                    src="https://images.pexels.com/photos/33433724/pexels-photo-33433724.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="AI Image Enhancer project workspace"
                  />
                  <div className="experience__card-overlay"></div>
                </div>
                <div className="experience__card-content">
                  <div className="experience__card-meta">
                    <span className="experience__year">2025</span>
                    <span className="experience__type">Featured Project</span>
                  </div>
                  <h3 id="exp-1" className="experience__card-title">
                    AI Image Enhancer
                  </h3>
                  <p className="experience__role">
                    {' '}
                    Interactive Image Enhancement Platform
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <p className="experience__card-description">
                    {' '}
                    Built a responsive, high-performance web app that leverages
                    external image-enhancement APIs to upscale and restore
                    photos in real time. Implemented robust error handling,
                    progressive loading states, and client-side previews for
                    instant feedback.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="experience__tech-stack">
                    <span className="experience__tech">React.js</span>
                    <span className="experience__tech">Tailwind CSS</span>
                    <span className="experience__tech">Fetch API</span>
                    <span className="experience__tech">State Management</span>
                  </div>
                  <div className="experience__card-actions">
                    <a href="https://ai-image-enhancer123.netlify.app" target="_blank" rel="noreferrer">
                      <div
                        aria-label="View live demo"
                        className="btn btn-primary btn-sm"
                      >
                        <span>
                          {' '}
                          View Demo
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                    <a href="https://github.com/pawan-kuntal?tab=repositories">
                      <div
                        aria-label="View code repository"
                        className="btn btn-outline btn-sm"
                      >
                        <span>
                          {' '}
                          Repository
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="experience__timeline-node"
                ></div>
              </article>
              <article
                role="article"
                aria-labelledby="exp-2"
                className="experience__card"
              >
                <div className="experience__card-media">
                  <img
                    src="https://images.pexels.com/photos/17483867/pexels-photo-17483867.jpeg?auto=compress&cs=tinysrgb&w=1500"
                    alt="AI Voice Assistant concept visualization"
                  />
                  <div className="experience__card-overlay"></div>
                </div>
                <div className="experience__card-content">
                  <div className="experience__card-meta">
                    <span className="experience__year">2025</span>
                    <span className="experience__type">Featured Project</span>
                  </div>
                  <h3 id="exp-2" className="experience__card-title">
                    {' '}
                    AI Voice Assistant
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <p className="experience__role">
                    {' '}
                    Conversational Frontend with Live Commands
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <p className="experience__card-description">
                    {' '}
                    Engineered a voice-driven assistant interface capable of
                    parsing natural commands, handling event flows, and fetching
                    live data from multiple APIs. Focused on accessibility,
                    low-latency interactions, and modular components for
                    reusable voice-control patterns.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="experience__tech-stack">
                    <span className="experience__tech">JavaScript</span>
                    <span className="experience__tech">React Hooks</span>
                    <span className="experience__tech">Web Speech API</span>
                    <span className="experience__tech">Material UI</span>
                  </div>
                  <div className="experience__card-actions">
                    <a href="https://baby-voice-assistant.netlify.app" target="_blank" rel="noreferrer">
                      <div
                        aria-label="View live demo"
                        className="btn btn-primary btn-sm"
                      >
                        <span>
                          {' '}
                          View Demo
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                    <a href="https://github.com/pawan-kuntal?tab=repositories">
                      <div
                        aria-label="View code repository"
                        className="btn btn-outline btn-sm"
                      >
                        <span>
                          {' '}
                          Repository
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="experience__timeline-node"
                ></div>
              </article>
              <article
                role="article"
                aria-labelledby="exp-3"
                className="experience__card"
              >
                <div className="experience__card-media">
                  <img
                    src="https://images.pexels.com/photos/17484975/pexels-photo-17484975.png?auto=compress&cs=tinysrgb&w=1500"
                    alt="Collaborative projects visualization"
                  />
                  <div className="experience__card-overlay"></div>
                </div>
                <div className="experience__card-content">
                  <div className="experience__card-meta">
                    <span className="experience__year">2023 - Present</span>
                    <span className="experience__type">Academic</span>
                  </div>
                  <h3 id="exp-3" className="experience__card-title">
                    {' '}
                    Collaborative Projects
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <p className="experience__role">
                    Scalable Frontend Components
                  </p>
                  <p className="experience__card-description">
                    {' '}
                    Designed and delivered component libraries and
                    micro-interaction patterns as part of university projects
                    and team collaborations. Emphasized semantic HTML, CSS
                    architecture, and testable, documented components to
                    accelerate development cycles in group settings.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="experience__tech-stack">
                    <span className="experience__tech">Component Design</span>
                    <span className="experience__tech">CSS Architecture</span>
                    <span className="experience__tech">Documentation</span>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="experience__timeline-node"
                ></div>
              </article>
            </div>
            <div className="experience__column experience__column--highlights">
              <div className="experience__card experience__card--insight">
                <div className="experience__card-content">
                  <div className="experience__insight-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewbox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="experience__card-title">
                    What I Bring to Your Project
                  </h3>
                  <p className="experience__card-description">
                    {' '}
                    A pragmatic mix of creative UI sensibility and engineering
                    discipline: pixel-precise interfaces, API-first thinking,
                    and component-driven design that scales. I focus on
                    measurable UX improvements and developer ergonomics to
                    shorten time-to-value.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="experience__card experience__card--education">
                <div className="experience__card-content">
                  <div className="experience__card-meta">
                    <span className="experience__year">2022 - 2026</span>
                    <span className="experience__type">Education</span>
                  </div>
                  <h3 className="experience__card-title">
                    B.Tech in Computer Science
                  </h3>
                  <p className="experience__role">
                    {' '}
                    J.C. Bose University of Sciences and Technology
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <p className="experience__card-description">
                    {' '}
                    Focused on web development, software engineering principles,
                    and modern frontend architecture. Active participant in
                    coding clubs and tech communities.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="experience__card experience__card--cta">
                <div className="experience__card-media">
                  <img
                    src="https://images.pexels.com/photos/17485658/pexels-photo-17485658.png?auto=compress&cs=tinysrgb&w=1500"
                    alt="Abstract tech visualization"
                  />
                  <div className="experience__card-overlay"></div>
                </div>
                <div className="experience__card-content">
                  <p className="experience__card-description">
                    {' '}
                    Explore the full case studies and code repositories in the
                    Portfolio section, or reach out to discuss collaboration.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <a href="#contact">
                    <div
                      aria-label="Start collaboration"
                      className="btn btn-accent"
                    >
                      <span>
                        {' '}
                        Start a Conversation
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" aria-labelledby="about-heading" className="about">
        <div className="about__container">
          <h2 id="about-heading" className="section-title">About Me</h2>
          <div className="about__card">
            <p>
              I am a passionate and detail-oriented <span className="about__accent">Frontend Web Developer</span> with strong skills in
              <span className="about__accent"> HTML</span>,<span className="about__accent"> CSS</span>,<span className="about__accent"> JavaScript</span>, and <span className="about__accent">React.js</span>.
              Currently pursuing my Bachelor of Technology in Computer Science and Engineering at J.C. Bose University of Sciences and Technology.
            </p>
            <p>
              I have hands-on experience building real-world projects like an <span className="about__accent">AI Image Enhancer</span>
              using API integration—learning API handling, state management, and creating responsive user interfaces. I'm also proficient in
              <span className="about__accent"> Redux</span>,<span className="about__accent"> Context API</span>, and modern development tools.
            </p>
            <p>
              I aim to grow as a skilled frontend developer by working on innovative web solutions that combine
              <span className="about__accent"> technology and creativity</span>. When I'm not coding, I'm exploring new web technologies
              and staying up-to-date with the latest trends in frontend development.
            </p>
          </div>
        </div>
      </section>
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="contact"
      >
        <div className="contact__container">
          <div className="contact__content">
            <div className="contact__left">
              <h2 id="contact-heading" className="contact__title">
                {' '}
                Ready to build something forward-thinking?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="contact__description">
                {' '}
                I&apos;m Pawan Kuntal — frontend developer focused on sleek,
                high-performance interfaces. If you have a project, idea, or
                collaboration, let&apos;s connect and create the next-gen web
                experience together.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="contact__methods">
                <a href="mailto:pawankuntal833@gmail.com?subject=">
                  <div
                    aria-label="Email me at pawankuntal833@gmail.com"
                    className="contact__method"
                  >
                    <div className="contact__method-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <div className="contact__method-content">
                      <span className="contact__method-label">Email</span>
                      <span className="contact__method-value">
                        pawankuntal833@gmail.com
                      </span>
                    </div>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/pawan-kuntal0">
                  <div
                    aria-label="Connect on LinkedIn"
                    className="contact__method"
                  >
                    <div className="contact__method-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                          <circle cx="4" cy="4" r="2"></circle>
                        </g>
                      </svg>
                    </div>
                    <div className="contact__method-content">
                      <span className="contact__method-label">LinkedIn</span>
                      <span className="contact__method-value">
                        /in/pawan-kuntal0
                      </span>
                    </div>
                  </div>
                </a>
                <a href="https://github.com/pawan-kuntal">
                  <div
                    aria-label="View GitHub profile"
                    className="contact__method"
                  >
                    <div className="contact__method-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="contact__method-content">
                      <span className="contact__method-label">GitHub</span>
                      <span className="contact__method-value">
                        /pawan-kuntal
                      </span>
                    </div>
                  </div>
                </a>
                <a href="mailto:pawankuntal833@gmail.com?subject=Quick%20call%20request">
                  <div
                    aria-label="Book a quick call"
                    className="contact__method contact__method--cta"
                  >
                    <div className="contact__method-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M8 2v4m8-4v4"></path>
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="M3 10h18"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="contact__method-content">
                      <span className="contact__method-label">
                        Book a quick call
                      </span>
                      <span className="contact__method-value">
                        {' '}
                        15 minutes to scope your idea
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="contact__form">
                <h3 className="contact__form-title">Project Brief</h3>
                <form className="contact__form-fields" action="https://formsubmit.co/pawankuntal833@gmail.com" method="POST">
                  <input type="hidden" name="_subject" value="New message from portfolio" />
                  <div className="contact__form-group">
                    <label
                      htmlFor="contact-name"
                      className="contact__form-label"
                    >
                      {' '}
                      Your Name
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="John Doe"
                      required="true"
                      className="contact__form-input"
                    />
                  </div>
                  <div className="contact__form-group">
                    <label
                      htmlFor="contact-email"
                      className="contact__form-label"
                    >
                      {' '}
                      Your Email
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="john@example.com"
                      required="true"
                      className="contact__form-input"
                    />
                  </div>
                  <div className="contact__form-group">
                    <label
                      htmlFor="contact-message"
                      className="contact__form-label"
                    >
                      {' '}
                      Project Details
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Briefly describe your project, timeline, and tech preferences..."
                      rows="4"
                      required="true"
                      className="contact__form-textarea"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    aria-label="Send message"
                    className="btn btn-primary"
                  >
                    {' '}
                    Send Message
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </form>
              </div>
            </div>
            <div className="contact__right">
              <div className="contact__visual-stack">
                <div className="contact__visual-card contact__visual-card--1">
                  <img
                    src="https://images.pexels.com/photos/31862218/pexels-photo-31862218.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Developer workspace with multiple screens"
                  />
                </div>
                <div className="contact__visual-card contact__visual-card--2">
                  <img
                    src="https://images.pexels.com/photos/14011035/pexels-photo-14011035.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Futuristic keyboard with blue backlighting"
                  />
                </div>
                <div className="contact__visual-card contact__visual-card--3">
                  <img
                    src="https://images.pexels.com/photos/17484975/pexels-photo-17484975.png?auto=compress&cs=tinysrgb&w=1500"
                    alt="Digital neural network visualization"
                  />
                </div>
                <div className="contact__visual-card contact__visual-card--4">
                  <img
                    src="https://images.pexels.com/photos/17485658/pexels-photo-17485658.png?auto=compress&cs=tinysrgb&w=1500"
                    alt="AI-generated abstract tech visualization"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="cta"
        role="region"
        aria-labelledby="cta-heading"
        className="cta"
      >
        <div className="cta__card">
          <div className="cta__background">
            <video
              autoPlay="true"
              loop="true"
              muted="true"
              playsInline="true"
              aria-hidden="true"
              src="https://videos.pexels.com/video-files/3141211/3141211-hd_1920_1080_25fps.mp4"
              className="cta__video"
            ></video>
            <div className="cta__overlay"></div>
          </div>
          <div className="cta__inner">
            <div className="cta__left">
              <h2 id="cta-heading" className="cta__title">
                {' '}
                Ready to build the next-generation web experience?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="cta__pitch">
                {' '}
                Let&apos;s craft interfaces that feel effortless and
                future-ready. Work with Pawan — Frontend precision, creative
                problem-solving, and modern stacks to turn bold ideas into
                polished products.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="cta__actions">
                <a href="#contact">
                  <div
                    aria-label="Start a project"
                    className="btn btn-primary btn-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewbox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      Start a Project
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div aria-hidden="true" className="cta__right">
              <div className="cta__decorative-grid"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<style>
        @keyframes hero-pulse {0%,100% {box-shadow: var(--shadow-level-2),
        0 0 40px color-mix(in srgb, var(--color-primary) 15%, transparent);}
50% {box-shadow: var(--shadow-level-2),
        0 0 60px color-mix(in srgb, var(--color-primary) 25%, transparent);}}@keyframes skills-glow {0%,100% {box-shadow: var(--shadow-level-2),
        0 0 18px color-mix(in srgb, var(--color-primary) 12%, transparent);}
50% {box-shadow: var(--shadow-level-2),
        0 0 28px color-mix(in srgb, var(--color-primary) 20%, transparent);}}@keyframes cta-glow {0%,100% {box-shadow: var(--shadow-level-3),
        0 0 60px color-mix(in srgb, var(--color-primary) 20%, transparent);}
50% {box-shadow: var(--shadow-level-3),
        0 0 80px color-mix(in srgb, var(--color-primary) 30%, transparent);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container6">
        <div className="home-container7">
          <Script
            html={`<script defer data-name="homepage">
(function(){
  // Smooth scroll behavior for internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]')

  internalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        e.preventDefault()
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    })
  })

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Apply animation to cards
  const cards = document.querySelectorAll(
    ".portfolio__card, .skills__card, .experience__card, .contact__method"
  )
  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    animateOnScroll.observe(card)
  })

  // Hero typing effect for tagline
  const tagline = document.querySelector(".hero__tagline")
  if (tagline) {
    const originalText = tagline.textContent
    tagline.textContent = ""
    let charIndex = 0

    const typeChar = () => {
      if (charIndex < originalText.length) {
        tagline.textContent += originalText.charAt(charIndex)
        charIndex++
        setTimeout(typeChar, 50)
      }
    }

    setTimeout(typeChar, 500)
  }


  // Parallax effect removed to keep images stacked and visible

  // Glow effect on skill proficiency bars
  const proficiencyBars = document.querySelectorAll(".skills__proficiency-bar")
  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target
          const width = bar.style.width
          bar.style.width = "0"
          setTimeout(() => {
            bar.style.width = width
            bar.style.transition = "width 1s ease"
          }, 100)
          barObserver.unobserve(bar)
        }
      })
    },
    { threshold: 0.5 }
  )

  proficiencyBars.forEach((bar) => barObserver.observe(bar))

  // Enhanced focus states for accessibility
  const focusableElements = document.querySelectorAll(
    'a, button, input, textarea, [tabindex="0"]'
  )

  focusableElements.forEach((element) => {
    element.addEventListener("focus", function () {
      this.style.outline = \`3px solid var(--color-outline)\`
      this.style.outlineOffset = "3px"
    })

    element.addEventListener("blur", function () {
      this.style.outline = ""
      this.style.outlineOffset = ""
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <SimpleFooter />
    </div>
  )
}

export default Home
