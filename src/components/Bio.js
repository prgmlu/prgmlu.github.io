import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "gmelkabany@gmail.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        Useful Tutorials in Useful topics.{' '}
        <br />
        Hire me!{' '}
        <a href="https://twitter.com/mostafakab">Moustafa Elkabany</a>.
        <br />
        Follow me on <a href="https://www.upwork.com/freelancers/~013c25dd09c0c6d200">twitter.</a>.
        {/* <a href="https://overreacted.io/">overreacted.io</a>.<br /> */}
        {/* Based on{' '} */}
        {/* <a href="https://facebook.github.io/create-react-app/"> */}
          {/* create-react-app */}
        {/* </a> */}
        {/* , <a href="https://mdxjs.com/">MDX</a>, and{' '} */}
        {/* <a href="https://frontarm.com/navi/">Navi</a>. */}
      </p>
    </div>
  )
}

export default Bio
