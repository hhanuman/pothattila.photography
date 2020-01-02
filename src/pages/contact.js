import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Póth Attila Portrait Photography" />
    <div className='contact'>
      <h1>Hi, i'm Attila!</h1>
      <p>Do you want to work with me?
          <br/>
          pothattila [at] gmail [dot] com</p>
      <img src='profile.jpg' alt='Póth Attila' />
    </div>
  </Layout>
)

export default SecondPage
