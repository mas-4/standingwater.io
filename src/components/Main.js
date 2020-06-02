import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

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
                    <h2 className="major">Skills</h2>
                    <span className="image main">
                        <img src={pic01} alt="" />
                    </span>
                    <p>
                        I am primarily a Python programmer with extensive
                        experience in Flask and SQLAlchemy development. I have
                        written extensive substantial data-intensive web
                        applications using those libraries.
                    </p>
                    {close}
                </article>

                <article
                    id="work"
                    className={`${this.props.article === 'work' ? 'active' : ''} ${
                        this.props.articleTimeout ? 'timeout' : ''
                    }`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">Projects</h2>
                    <ul>
                        <li>
                            <a href="https://github.com/malan88/icc">Intertextual Canon Cloud</a>
                            <ul>
                                <li>Designed, developed, launched, and maintain the web application at <a href="https://anno.wiki">anno.wiki</a> solo.</li>
                                <li>Primarily coded in <a href="https://flask.palletsprojects.com/en/1.1.x/">Flask</a>/<a href="https://www.sqlalchemy.org/">SQLAlchemy</a></li>
                                <li><a href="https://github.com/malan88/texts/tree/master/processor">Wrote many ETL data pipeline scripts</a> for processing <a href="gutenberg.org">Project Gutenberg</a> text files into custom JSON format.</li>
                                <li><a href="https://www.heroku.com/">Heroku</a> for platform</li>
                                <li><a href="https://www.elastic.co/">Elasticsearch</a> for search</li>
                                <li><a href="https://mariadb.org/">MariaDB</a> for database</li>
                                <li>Vanilla JavaScript for AJAX progressive enhancement</li>
                                <li><a href="https://github.com/GoogleCloudPlatform/flask-talisman">Talisman</a> for CSRF security</li>
                                <li><a href="https://docs.pytest.org/en/latest/">PyTest</a> for testing</li>
                                <li><a href="https://wtforms.readthedocs.io/en/2.3.x/">WTForms</a> for forms</li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://glendalepainting.netlify.com">glendalepainting.com</a>
                            <ul>
                                <li><a href="https://www.gatsbyjs.org/">GatsbyJS</a> static site</li>
                                <li><a href="https://www.react-spring.io/">react-spring</a> for parallax animation</li>
                                <li><a href="https://www.react-reveal.com/">react-reveal</a> for transition animations</li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://github.com/malan88/minimalpairs">Minimal Pairs Scraping Project</a>
                            <ul>
                                <li>
                                    Generated
                                    an <a href="https://ankiweb.net/shared/info/1347940877">Anki deck</a> for
                                    recognizing phonemes difficult to hear for
                                    an American English speaker using “minimal
                                    pairs,” words in French which differ by only
                                    one phoneme
                                </li>
                                <li>
                                    Used <a href="https://requests.readthedocs.io/en/master/">Requests</a> for
                                    automated downloading of the audio files
                                </li>
                                <li>
                                    Used <a href="https://www.crummy.com/software/BeautifulSoup/">BeautifulSoup4</a> for
                                    scraping the list of minimal pairs in an <a href="https://ipython.org/">IPython</a> session
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://github.com/malan88/gobble">Gobble.py</a>
                            <ul>
                                <li>
                                    Python script using the <a href="https://docs.python.org/3/library/secrets.html">secrets</a> module from the Standard Library to generate a password including an English word from the Electronic Freedom Foundation's Diceware list in order to circumvent the "gobbledy-gook" social engineering vulnerability.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://github.com/malan88/teamup">teamup.py</a>
                            <ul>
                                <li>
                                    Script for programatically generating teams
                                    from individuals based on their skill level.
                                    The purpose is to minimize variance between
                                    the most skilled and least skilled team.
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
                    <h2 className="major">About</h2>
                    <span className="image main">
                        <img src={pic03} alt="" />
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
                        eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
                        erat volutpat. Praesent urna nisi, fringila lorem et vehicula
                        lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
                        Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
                        Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
                        amet.
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
                    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
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
                    <ul className="icons">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/michael-sendker"
                                className="icon fa-linkedin"
                            >
                                <span className="label">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://stackoverflow.com/story/malan88" className="icon fa-stack-overflow">
                                <span className="label">Stack Overflow</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/malan88"
                                className="icon fa-github"
                            >
                                <span className="label">GitHub</span>
                            </a>
                        </li>
                    </ul>
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
