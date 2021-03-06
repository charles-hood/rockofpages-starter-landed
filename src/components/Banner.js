import React from 'react'
import pic01 from '../assets/images/rockofpages.jpg'
import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>Rock of Pages</h2>
        <h3>We create Pages that Rock!
	<br />
 	(For artists of every genre.)</h3>
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
