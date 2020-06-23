import React from 'react'

import pic03 from '../images/pic03.jpg'

const About = ({ close }) => {
  return (
    <>
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
    </>
  )
}

export default About
