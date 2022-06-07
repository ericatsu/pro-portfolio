import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import './About.scss';

//Array for what will be on about page
const abouts = [
  { title: 'Mission & Vission', descripntion: 'The Company mission', imgUrl: images.about01},
  { title: 'Mission & Vission', descripntion: 'The Company mission', imgUrl: images.about02},
  { title: 'Mission & Vission', descripntion: 'The Company mission', imgUrl: images.about03},
  { title: 'Mission & Vission', descripntion: 'The Company mission', imgUrl: images.about04}
]

const About = () => {
  return (
    <>
    <h2 className="head-text">Services to maintain 
    <span>A Clean</span> <br />and  
    <span>Healthy Home Or Environment</span></h2>

    <div className="app__profiles">
      {
        abouts.map((about, index) => (
          <motion.div
          whileInView={{ opacity: 1}}
          whileHover={{ scale: 1.1 }}
          transition= {{ duration: 0.5, type: 'tween'}}
          className="app__profile-item"
          key={about.title + index}
          >
           <img src={about.imgUrl} alt={about.title} />
           <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
           <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))
      }
    </div>
    </>
  )
}

export default About