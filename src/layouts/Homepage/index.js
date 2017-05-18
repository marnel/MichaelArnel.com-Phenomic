import React from "react"

import LatestPosts from "../../components/LatestPosts"
import IndexPage from "../IndexPage"
import ContactSection from "../../components/ContactSection"

const Homepage = (props) => {
  return (
    <IndexPage { ...props }>
     <LatestPosts />
     <ContactSection />
    </IndexPage>
  )
}

export default Homepage
