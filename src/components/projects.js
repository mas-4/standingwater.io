import React from 'react'

import annowiki from '../images/annowiki.jpg'
import glendalepainting from '../images/glendalepainting.jpg'
import blog from '../images/blog.jpg'
import homepage from '../images/homepage.jpg'
import languagemap from '../images/languagemap.jpg'


const Projects = ({ close }) => {
  return (
    <>
      <h2 className="major">What I've Done</h2>
      <ul className="projects">
        <span className="image main project">
          <a href="https://anno.wiki">
            <img src={annowiki} alt="annowiki" />
          </a>
        </span>
        <li>
          <a href="https://github.com/malan88/icc">
            Intertextual Canon Cloud
          </a>{' '}
          (<a href="https://anno.wiki">anno.wiki</a>)
          <ul>
            <li>
              I designed, developed, launched, and continue to maintain the
              web application at <a href="https://anno.wiki">anno.wiki</a>{' '}
              solo.
            </li>
            <li>
              Primarily coded in{' '}
              <a href="https://flask.palletsprojects.com/en/1.1.x/">
                Flask
              </a>
              /<a href="https://www.sqlalchemy.org/">SQLAlchemy</a>
            </li>
            <li>
              Wrote many{' '}
              <a href="https://github.com/malan88/texts/tree/master/processor">
                ETL data pipeline scripts
              </a>{' '}
              for processing{' '}
              <a href="https://gutenberg.org">Project Gutenberg</a> text
              files into custom JSON format
            </li>
            <li>
              <a href="https://www.heroku.com/">Heroku</a> for platform
            </li>
            <li>
              <a href="https://www.elastic.co/">Elasticsearch</a> for search
            </li>
            <li>
              <a href="https://mariadb.org/">MariaDB</a> for database
            </li>
            <li>Vanilla JavaScript for AJAX progressive enhancement</li>
            <li>
              <a href="https://github.com/GoogleCloudPlatform/flask-talisman">
                Talisman
              </a>{' '}
              for CSRF security
            </li>
            <li>
              <a href="https://docs.pytest.org/en/latest/">PyTest</a> for
              testing
            </li>
            <li>
              <a href="https://wtforms.readthedocs.io/en/2.3.x/">WTForms</a>{' '}
              for forms
            </li>
          </ul>
        </li>
        <span className="image main project">
          <a href="https://language-map.com">
            <img src={languagemap} alt="Language Map" />
          </a>
        </span>
        <li>
          <a href="https://language-map.com">Language Map</a>
          <ul>
            <li>
              Extensive data gathering and web scraping mission detailed{' '}
              <a href="https://blog.standingwater.io/20200622-151403/">
                here
              </a>
            </li>
            <li>
              BeautifulSoup4, requests,{' '}
              <a href="http://pubproxy.com/">PubProxy</a>,{' '}
              <a href="https://scrapestack.com/">scrapestack</a>
            </li>
            <li>
              <a href="https://gspread.readthedocs.io/en/latest/">
                gspread
              </a>
              ,{' '}
              <a href="https://developers.google.com/sheets/api/reference/rest">
                Google Sheets API
              </a>
            </li>
            <li>pandas, csv, json</li>
            <li>ReactJS</li>
            <li>
              <a href="https://www.react-simple-maps.io/">
                React Simple Maps
              </a>
            </li>
            <li>
              <a href="https://material-ui.com/">Material-UI</a>
            </li>
            <li>Hosted on Netlify</li>
          </ul>
        </li>
        <li>
          <a href="https://github.com/malan88/vote">vote.py</a>
          <ul>
            <li>
              Automated Python script to encourage and remind people to
              register to vote.
            </li>
            <li>
              Deployed using AWS EC2 instance to enable continuous service.
            </li>
            <li>Integrated Twilio as texting client.</li>
          </ul>
        </li>
        <span className="image main project">
          <a href="https://glendalepainting.netlify.app">
            <img src={glendalepainting} alt="Glendale Painting" />
          </a>
        </span>
        <li>
          <a href="https://glendalepainting.netlify.com">
            glendalepainting.com
          </a>
          <ul>
            <li>
              <a href="https://www.gatsbyjs.org/">GatsbyJS</a> static site
            </li>
            <li>
              <a href="https://www.react-spring.io/">react-spring</a> for
              parallax animation
            </li>
            <li>
              <a href="https://www.react-reveal.com/">react-reveal</a> for
              transition animations
            </li>
          </ul>
        </li>
        <span className="image main project">
          <a href="https://blog.standingwater.io">
            <img src={blog} alt="Blog" />
          </a>
        </span>
        <li>
          <a href="https://blog.standingwater.io">blog.standingwater.io</a>
          <ul>
            <li>GatsbyJS blog built from default starter</li>
          </ul>
        </li>
        <span className="image main project">
          <a href="https://standingwater.io">
            <img src={homepage} alt="Standingwater" />
          </a>
        </span>
        <li>
          Standingwater
          <ul>
            <li>GatsbyJS portfolio site built from HTML5Up template</li>
          </ul>
        </li>
        <li>
          <a href="https://github.com/malan88/minimalpairs">
            Minimal Pairs Scraping Project
          </a>
          <ul>
            <li>
              Generated an{' '}
              <a href="https://ankiweb.net/shared/info/1347940877">
                Anki deck
              </a>{' '}
              for recognizing phonemes difficult to hear for an American
              English speaker using “minimal pairs,” words in French which
              differ by only one phoneme
            </li>
            <li>
              Used{' '}
              <a href="https://requests.readthedocs.io/en/master/">
                Requests
              </a>{' '}
              for automated downloading of the audio files
            </li>
            <li>
              Used{' '}
              <a href="https://www.crummy.com/software/BeautifulSoup/">
                BeautifulSoup4
              </a>{' '}
              for scraping the list of minimal pairs in an{' '}
              <a href="https://ipython.org/">IPython</a> session
            </li>
          </ul>
        </li>
        <li>
          <a href="https://github.com/malan88/gobble">Gobble.py</a>
          <ul>
            <li>
              Python script using the{' '}
              <a href="https://docs.python.org/3/library/secrets.html">
                secrets
              </a>{' '}
              module from the Standard Library to generate a password
              including an English word from the Electronic Freedom
              Foundation's Diceware list in order to circumvent the
              "gobbledy-gook" social engineering vulnerability.
            </li>
          </ul>
        </li>
        <li>
          <a href="https://github.com/malan88/teamup">teamup.py</a>
          <ul>
            <li>
              Script for programatically generating teams from individuals
              based on their skill level. The purpose is to minimize
              variance between the most skilled and least skilled team.
              Takes a yaml file as input.
            </li>
          </ul>
        </li>
      </ul>
      {close}
    </>
  )
}

export default Projects
