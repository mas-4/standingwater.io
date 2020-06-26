import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic03 from '../images/pic03.jpg'
import annowiki from '../images/annowiki.jpg'
import glendalepainting from '../images/glendalepainting.jpg'
import blog from '../images/blog.jpg'
import homepage from '../images/homepage.jpg'
import languagemap from '../images/languagemap.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">What I Can Do</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            I consider myself principally a Python developer. I have spent the
            past three years developing a diverse range of software in Python,
            from ETL pipelines to password generators to combinatoric
            optimizers. But by far most of my time has been spent developing a
            single web application in the pursuit of my obsession.
          </p>
          <p>
            Consisting of ≈14,000 lines of code in Python, Flask, and
            SQLAlchemy, <a href="https://anno.wiki">anno.wiki</a> is my pet
            project to supply the world with definitive, collaborative, and
            exhaustive annotations to all the world's great literature.
          </p>
          <p>
            In addition, since my childhood I have developed simple websites and
            portfolio sites. Most recently I have spent a lot of time writing in
            GatsbyJS, in which this site is built.
          </p>
          <p>
            Recently, I have begun to explore ML, and am taking several MOOCs on
            statistics and data science.
          </p>
          <p>A semi-exhaustive list of my skills is found below:</p>
          <ul style={{ columns: 2 }}>
            <li>
              <strong>Python</strong>: Flask, SQLAlchemy, pytest, WTForms,
              Talisman, BeautifulSoup4, Requests, Matplotlib, Seaborn, NumPy,
              pandas, Scikit-Learn
            </li>
            <li>
              <strong>Javascript</strong>: extensive experience with vanilla JS,
              GatsbyJS, React, some JQuery
            </li>
            <li> Heroku </li>
            <li> MariaDB/MySQL </li>
            <li> Elasticsearch </li>
            <li> Sass/CSS3 </li>
            <li>
              <strong>Linux</strong>: My principle distribution of choice is
              Arch, but I have worked with Ubuntu and Debian.
            </li>
            <li>
              Bash, SSH, Taskwarrior, passwordstore, and a variety of other cli
              tools.
            </li>
            <li> Vim/Neovim </li>
            <li>
              I have experience working with GPG keys, SSH keys, and Yubikeys.
            </li>
            <li>
              I have dabbled in Java, C, and Lisp. I am interested in learning
              Ruby and Go.
            </li>
            <li>I am fluent in French and am currently learning Spanish.</li>
          </ul>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
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
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Who I Am</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I've always been interested in computers, developing my first
            website in just HTML and CSS at age 13, but was more pulled by the
            liberal arts. I majored in philosophy and classics at Florida State
            University. I only became more interested in programming as part of
            my developing obsession with literature.
          </p>
          <p>
            As I embarked on a personal study of the tragedies of Shakespeare
            and the King James Bible, I became upset at the lack of definitive
            and exhaustive resources for deep reading in literature. Annotations
            on any classical text are scattered among a smattering of academic
            and popular books with no consistency in quality and content even
            within one text. They often focused on pedantic textual issues
            irrelevant to my interest in a deeper grasp of authorial meaning and
            the text's place in cultural history. So I decided to write my own
            application for that: a collaborative wiki for annotating classical
            literature: <a href="https://anno.wiki">anno.wiki</a>.
          </p>
          <p>
            As a result of that experience I delved far deeper into programming
            and computers than I expected. I studied computer security and
            calculus. I studied C and Lisp through Structure and Interpretation
            of Computer Programs. I delved into Linux ricing and React. I began
            to recognize the{' '}
            <a href="https://blog.standingwater.io/20200608-073745/">
              High Culture of Open Source
            </a>
            .
          </p>
          <p>I continue to learn, and am currently studying the following:</p>
          <ul>
            <li>
              <a href="https://www.coursera.org/specializations/statistics-with-python">
                UM's Statistics with Python Specialization
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/course/statistics-probability/">
                Udemy's Become a Probability & Statistics Master
              </a>
            </li>
            <li>
              <a href="https://www.kaggle.com/learn/overview">
                Kaggle's Machine Learning Mini-Courses
              </a>
            </li>
            <li>
              <a href="https://www.gopl.io/">
                Donovan and Kernighan's{' '}
                <emphasis>The Go Programming Language</emphasis>
              </a>
            </li>
          </ul>
          <p>
            In my spare time I enjoy literature (particularly William Faulkner
            and Cormac McCarthy), wine, and running.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
