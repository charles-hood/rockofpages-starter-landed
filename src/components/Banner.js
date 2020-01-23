import React from 'react'
import pic01 from '../assets/images/rockofpages.jpg'
import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>Rock of Pages</h2>
        <P>We create Pages that Rock!</p>
	<p>
	  (For artists of every genre.)
        </p>
      </header>
    <span className="image">
       <img src={pic01} alt="intro" />
      </span>
    </div>
    <ScrollLink
      to="one"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Banner
