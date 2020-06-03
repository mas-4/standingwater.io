import PropTypes from 'prop-types'
import React from 'react'
import Heron from '../assets/svg/heron.svg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
        <img src={Heron} alt="Heron Logo" style={{ transform: 'translateY(10px)' }} />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Michael Sendker</h1>
        <p>
            Full stack web developer. Python generalist. Specialized in <a href="https://www.gatsbyjs.org/">GatsbyJS</a> and <a href="https://flask.palletsprojects.com/en/1.1.x/">Flask</a>/<a href="https://www.sqlalchemy.org/">SQLAlchemy</a>.
        </p>
          <p>
            Dedicated to learning.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
              Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
