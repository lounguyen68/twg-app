import React from 'react'
import Slogan from '../components/slogan/Slogan';
import AboutMe from '../components/about-me/AboutMe';
import UpcomingEvents from '../components/upcoming-events/UpcomingEvents';

const Home = () => {
  return (
    <div>
      <Slogan/>
      <AboutMe/>
      <UpcomingEvents/>
    </div>
  )
}

export default Home