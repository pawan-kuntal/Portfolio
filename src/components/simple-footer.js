import React from 'react'

import './simple-footer.css'

const SimpleFooter = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="simple-footer" role="contentinfo">
      <div className="simple-footer__line">
        Made by <span className="simple-footer__name">Pawan Kuntal</span>
      </div>
      <div className="simple-footer__copyright">© {year}</div>
    </footer>
  )
}

export default SimpleFooter
