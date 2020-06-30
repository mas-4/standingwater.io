import PropTypes from 'prop-types'
import React from 'react'

import Heron from '../assets/svg/heron.svg'
import InstaPaper from '../assets/svg/instapaper.svg'

const Icon = ({ faCode, title, url }) => {
  return (
    <li>
      <a
        style={{ textShadow: "none" }}
        title={title}
        href={url}
        className={faCode}
      ></a>
    </li>
  )
}

const SVGIcon = ({ SVG, title, url }) => {
  return (
    <li>
      <a title={title} href={url}>
        <SVG
          style={{
            fill: "white",
            marginBottom: "6px",
            verticalAlign: "middle",
            cursor: "pointer",
          }}
        />
      </a>
    </li>
  )

}

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <Heron style={{ marginTop: "0.5rem" }} />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Michael Sendker</h1>
        <p>
          Full stack web developer. Python generalist. Specialized in{' '}
          <a href="https://www.gatsbyjs.org/">GatsbyJS</a> and{' '}
          <a href="https://flask.palletsprojects.com/en/1.1.x/">Flask</a>/
          <a href="https://www.sqlalchemy.org/">SQLAlchemy</a>.
        </p>
        <ul className="icons">
          <Icon
            title="GitHub"
            faCode="fab fa-github"
            url="https://github.com/malan88"
          />
          <Icon
            title="Keybase"
            faCode="fab fa-keybase"
            url="https://keybase.io/m88"
          />
          <Icon
            title="Spotify"
            faCode="fab fa-spotify"
            url="https://open.spotify.com/user/vsb2duo6ee07ks0tqiudrdqns"
          />
          <Icon
            title="Stack Overflow"
            faCode="fab fa-stack-overflow"
            url="https://stackoverflow.com/story/malan88"
          />
          <Icon
            title="HackerRank"
            faCode="fab fa-hackerrank"
            url="https://www.hackerrank.com/mas88"
          />
          <Icon
            title="Kaggle"
            faCode="fab fa-kaggle"
            url="https://kaggle.com/malan88"
          />
          <SVGIcon
            title="InstaPaper"
            href="https://www.instapaper.com/p/mas"
            SVG={InstaPaper}
          />
          <Icon
            title="LinkedIn"
            faCode="fab fa-linkedin"
            url="https://www.linkedin.com/in/michael-sendker"
          />
          <Icon
            title="Résumé"
            faCode="fas fa-file-pdf"
            url="https://github.com/malan88/resume/raw/master/main.pdf"
          />
          <Icon
            title="Blog"
            faCode="fas fa-align-left"
            url="https://blog.stdwtr.io"
          />
        </ul>
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
