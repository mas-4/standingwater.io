import React from 'react'
import styled from 'styled-components'

import pic01 from '../images/pic01.jpg'

const UL = styled.ul`
columns: 2;
`

const Skills = ({ close }) => {
  return (
    <>
      <h2 className="major">What I Can Do</h2>
      <span className="image main">
        <img src={pic01} alt="" />
      </span>
      <p>
        I prefer Python, but I can wear a lot of hats. I have written code in
        Python, JavaScript, ReactJS, and C#. I have dabbled in PHP, C, C++,
        Scheme, and Bash. I have built static sites in GatsbyJS, interfaces in
        WPF, and webscrapers in Python. I've done data analysis and
        visualization with Pandas and Seaborn. I've messed with Scikit-Lean.
        I've done generative art with PyCairo, of which, the picture above is a
        sample. I even built an Arduino-based PID controller for a popcorn
        popper to roast my own coffee.
      </p>
      <p>
        I am also a rigorous documenter. I often make sure I have my
        documentation system ready to go as I write the software. You can see an
        example of my documentation-in-progress for ICC2{' '}
        <a href="https://wiki.anno.wiki/">here</a>. And I am meticulous about my
        system management and organization.{' '}
        <a href="https://github.com/malan88/dotfiles">I use YADM to manage my
        dotfiles in a very particular way</a> (see <code>.zshrc</code> and
        <code>.zshrc.d/</code> for an example). I'm still surprised I've never
        seen anyone do that before.
      </p>
      <p>Below is a semi-exhaustive list of technology tasks I've performed</p>
      <UL>
        <li>CRUD web applications</li>
        <li>Single page web applications</li>
        <li>Static portfolio sites (both single page Gatsby-based and HTML-based)</li>
        <li>Twitter bots</li>
        <li>Web/Api scraping</li>
        <li>Data cleaning</li>
        <li>Data visualization</li>
        <li>Data analysis</li>
        <li>Arduino-based hardware and circuitry</li>
        <li>Server deployment/management</li>
        <li>Python testing</li>
        <li>Desktop application interfaces</li>
        <li>ETL scripts</li>
        <li>Text processing</li>
        <li>Complex git structures (submodules)</li>
        <li>Linux ricing</li>
        <li>Open Source contribution</li>
        <li>Twilio-based texting notification bots</li>
        <li>Multithreading</li>
        <li>Task automation / general purpose scripting</li>
        <li>Encryption using GPG, Keybase, and Matrix.org</li>
        <li>Graphics work with Photoshop and GIMP</li>
      </UL>
      <p>Below is an exhaustive list of languages I've worked with sorted by strength</p>
      <UL>
        <li>Python</li>
        <li>JavaScript</li>
        <li>C#</li>
        <li>SQL</li>
        <li>HTML/CSS</li>
        <li>C</li>
        <li>Bash</li>
        <li>Arduino-based C++</li>
        <li>Scheme</li>
        <li>PHP</li>
      </UL>
      <p>Below is a semi-exhaustive list of technologies I've worked with</p>
      <UL>
        <li>
          <strong>Web Development</strong>: Flask, Django, ReactJS, GatsbyJS,
          Sergey, Vanilla JS, JQuery, Sass, CSS3, Styled-Components, Auth0
        </li>
        <li>
          <strong>Data management</strong>: SQLAlchemy, Django ORM
        </li>
        <li>
          <strong>Data Storage</strong>: MariaDB, MySQL, PostgreSQL, DynamoDB, SQLite, AWS DynamoDB, ElasticSearch
        </li>
        <li>
          <strong>Web Scraping</strong>: Requests, urllib3, BeautifulSoup4, Selenium
        </li>
        <li>
          <strong>Data Analysis</strong>: Jupyter Notebooks, pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn
        </li>
        <li>
          <strong>Cloud Applications</strong>: Heroku, AWS EC2, AWS Lambda, General VPS
        </li>
        <li>
          <strong>Linux</strong>: Arch Linux, Ubuntu, Debian, Gnome, i3wm, BSPWM/SXHKD, Cinnamon, KDE
        </li>
        <li>
          <strong>Web Design</strong>: Styled Components, Sass, CSS3, Photoshop, GIMP
        </li>
        <li>
          <strong>Miscellaneous</strong>: Docker, Docker Compose, Excel, PyCairo, gspread, openpyxl, Systemd Units, Chron
        </li>
      </UL>
      {close}
    </>
  )
}

export default Skills;
