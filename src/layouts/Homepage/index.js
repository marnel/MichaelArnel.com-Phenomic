import React from "react"

import LatestPosts from "../../components/LatestPosts"
import IndexPage from "../IndexPage"
import ContactSection from "../../components/ContactSection"
import WelcomeHero from "../../components/HomePageSections/Welcome-Hero"

const Homepage = (props) => {
  return (
    <IndexPage { ...props }>
     <WelcomeHero />
     <LatestPosts />
     <ContactSection />
    </IndexPage>
  )
}

export default Homepage
