import React from 'react'

import pic01 from '../images/pic01.jpg'

const Skills = ({ close }) => {
  return (
    <>
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
    </>
  )
}

export default Skills;
