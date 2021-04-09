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
        my ongoing obsession with literature.
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
        It's been almost four years since I started that project, and while the
        first iteration has never taken off, I've been redesigning it on and off
        for the past two years as a Single Page Application using a better data
        structure design cribbed <a href="https://github.com/okfn/textus/">from
        those who came before me</a> in the desire to see an open source,
        collaborative, exhaustive, and definitive repository of literary
        annotations. It is, for all intents and purposes, my life's work.
      </p>
      <p>
        As a result of that pursuit I have delved far deeper into programming
        and computers than I'd expected. I've studied computer security and
        calculus. I've studied C through K&R and Lisp through SICP. I've delved
        into Linux ricing and React. I've recognized the beauty in computing. In
        short, I began to recognize the{' '}
        <a href="https://blog.standingwater.io/20200608-073745/">
          High Culture of Open Source
        </a>
        .
      </p>
      <p>
        In my spare time I enjoy literature (particularly William Faulkner
        and Cormac McCarthy), wine, coffee, mixology, and running. And I've been
        known to periodically open Minecraft.
      </p>
      {close}
    </>
  )
}

export default About
