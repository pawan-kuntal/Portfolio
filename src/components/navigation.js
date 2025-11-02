import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-wrapper, .navigation-logo, .navigation-logo-icon, .navigation-link, .navigation-toggle, .navigation-mobile, .navigation-mobile-link {
  transition: none;
  animation: none;
}
.navigation-cta-pulse, .navigation-scanline {
  animation: none;
  opacity: 0;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav
        id="navigation-main"
        role="navigation"
        aria-label="Main navigation"
        className="navigation-wrapper"
      >
        <div className="navigation-container">
          <a href="#hero" aria-label="Home" className="navigation-logo">
            <img src="/images/Gemini_Generated_Image_l30wtsl30wtsl30w.png" alt="PK logo" className="navigation-logo-icon" />
          </a>
          <div className="navigation-links-desktop">
            <a href="#skills">
              <div className="navigation-link">
                <span className="navigation-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
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
                </span>
                <span className="navigation-link-text">Skills</span>
                <span
                  aria-hidden="true"
                  className="navigation-link-underline"
                ></span>
              </div>
            </a>
            <a href="#experience">
              <div className="navigation-link">
                <span className="navigation-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </g>
                  </svg>
                </span>
                <span className="navigation-link-text">Projects</span>
                <span
                  aria-hidden="true"
                  className="navigation-link-underline"
                ></span>
              </div>
            </a>
            <a href="#about">
              <div className="navigation-link">
                <span className="navigation-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </g>
                  </svg>
                </span>
                <span className="navigation-link-text">About</span>
                <span
                  aria-hidden="true"
                  className="navigation-link-underline"
                ></span>
              </div>
            </a>
            <a href="#contact">
              <div className="navigation-link">
                <span className="navigation-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    </g>
                  </svg>
                </span>
                <span className="navigation-link-text">Contact</span>
                <span
                  aria-hidden="true"
                  className="navigation-link-underline"
                ></span>
              </div>
            </a>
          </div>
          <div className="navigation-cta-desktop">
            <a href="#contact">
              <div className="navigation-cta-button btn btn-primary">
                <span>Let&apos;s Connect</span>
                <span
                  aria-hidden="true"
                  className="navigation-cta-pulse"
                ></span>
              </div>
            </a>
          </div>
          <button
            id="navigation-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            aria-controls="navigation-mobile"
            className="navigation-toggle"
          >
            <span className="navigation-navigation-toggle-icon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 5h16M4 12h16M4 19h16"
                ></path>
              </svg>
            </span>
            <span className="navigation-navigation-toggle-icon2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 6L6 18M6 6l12 12"
                ></path>
              </svg>
            </span>
            <span
              aria-hidden="true"
              className="navigation-navigation-toggle-bg"
            ></span>
          </button>
        </div>
        <div
          id="navigation-mobile"
          aria-hidden="true"
          className="navigation-mobile"
        >
          <div aria-hidden="true" className="navigation-mobile-backdrop"></div>
          <div className="navigation-mobile-content">
            <div className="navigation-mobile-links">
              <a href="#skills">
                <div className="navigation-mobile-link">
                  <span className="navigation-mobile-link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
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
                  </span>
                  <span className="navigation-mobile-link-text">Skills</span>
                  <span
                    aria-hidden="true"
                    className="navigation-mobile-link-glow"
                  ></span>
                </div>
              </a>
              <a href="#experience">
                <div className="navigation-mobile-link">
                  <span className="navigation-mobile-link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                      </g>
                    </svg>
                  </span>
                  <span className="navigation-mobile-link-text">Projects</span>
                  <span
                    aria-hidden="true"
                    className="navigation-mobile-link-glow"
                  ></span>
                </div>
              </a>
              <a href="#about">
                <div className="navigation-mobile-link">
                  <span className="navigation-mobile-link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </g>
                    </svg>
                  </span>
                  <span className="navigation-mobile-link-text">About</span>
                  <span
                    aria-hidden="true"
                    className="navigation-mobile-link-glow"
                  ></span>
                </div>
              </a>
              <a href="#contact">
                <div className="navigation-mobile-link">
                  <span className="navigation-mobile-link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      </g>
                    </svg>
                  </span>
                  <span className="navigation-mobile-link-text">Contact</span>
                  <span
                    aria-hidden="true"
                    className="navigation-mobile-link-glow"
                  ></span>
                </div>
              </a>
            </div>
            <div className="navigation-mobile-cta">
              <a href="#contact">
                <div className="btn btn-primary btn-lg">
                  <span>Let&apos;s Connect</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="navigation-scanline"></div>
      </nav>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
        @keyframes navigation-pulse {0%,100% {opacity: 0;
transform: scale(0.8);}
50% {opacity: 1;
transform: scale(1.2);}}@keyframes navigation-slide-in {to {transform: translateX(0);
opacity: 1;}}@keyframes navigation-slide-up {to {transform: translateY(0);
opacity: 1;}}@keyframes navigation-scanline {0% {transform: translateX(-100%);}
100% {transform: translateX(100%);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  const navigationToggle = document.getElementById("navigation-toggle")
  const navigationMobile = document.getElementById("navigation-mobile")
  const navigationMobileLinks = document.querySelectorAll(
    ".navigation-mobile-link"
  )

  if (navigationToggle && navigationMobile) {
    // Toggle mobile menu
    navigationToggle.addEventListener("click", () => {
      const isExpanded =
        navigationToggle.getAttribute("aria-expanded") === "true"
      navigationToggle.setAttribute("aria-expanded", !isExpanded)
      navigationMobile.setAttribute("aria-hidden", isExpanded)

      // Prevent body scroll when menu is open
      if (!isExpanded) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
    })

    // Close mobile menu when clicking on links
    navigationMobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navigationToggle.setAttribute("aria-expanded", "false")
        navigationMobile.setAttribute("aria-hidden", "true")
        document.body.style.overflow = ""
      })
    })

    // Close mobile menu when clicking backdrop
    const backdrop = document.querySelector(".navigation-mobile-backdrop")
    if (backdrop) {
      backdrop.addEventListener("click", () => {
        navigationToggle.setAttribute("aria-expanded", "false")
        navigationMobile.setAttribute("aria-hidden", "true")
        document.body.style.overflow = ""
      })
    }

    // Close mobile menu on ESC key
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        navigationToggle.getAttribute("aria-expanded") === "true"
      ) {
        navigationToggle.setAttribute("aria-expanded", "false")
        navigationMobile.setAttribute("aria-hidden", "true")
        document.body.style.overflow = ""
        navigationToggle.focus()
      }
    })
  }

  // Add scroll effect to navigation
  let lastScrollY = window.scrollY
  const navigationWrapper = document.getElementById("navigation-main")

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY

      if (navigationWrapper) {
        if (currentScrollY > 100) {
          navigationWrapper.style.boxShadow =
            "0 8px 32px color-mix(in srgb, var(--color-primary) 12%, transparent)"
          navigationWrapper.style.background =
            "color-mix(in srgb, var(--color-surface) 95%, transparent)"
        } else {
          navigationWrapper.style.boxShadow =
            "0 4px 24px color-mix(in srgb, var(--color-primary) 8%, transparent)"
          navigationWrapper.style.background =
            "color-mix(in srgb, var(--color-surface) 85%, transparent)"
        }
      }

      lastScrollY = currentScrollY
    },
    { passive: true }
  )
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
