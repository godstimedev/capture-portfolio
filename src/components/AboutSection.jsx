import React from 'react'
import styled from 'styled-components'
import {Layout, Description, Image, Hide} from '../styles.jsx'
import home1 from "../img/home1.png"

const AboutSection = () => {
  return (
   <Layout>
        <Description>
            <div className="title">
                <Hide>
                    <h2>We work to make</h2>
                </Hide>
                <Hide>
                    <h2>your <span>dreams</span> come
                </h2>
                </Hide>
                <Hide>
                    <h2>true.</h2>
                </Hide>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills</p>
                <button>Contact Us</button>
            </div> 
        </Description>
        <Image>
            <img src={home1} alt="hero-image" />
        </Image>
   </Layout>
  )
};



export default AboutSection