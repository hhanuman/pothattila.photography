import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Category from "./category"
import Gallery from "./gallery"
import Contact from "./contact"
import Story from "./story"
import Blog from "./blog"

const App = () => {
    console.log('APP');
    return (
        <Layout>
          <Router>
            <Gallery path="/gallery/*" />
            <Category path="/category/*" />
            <Story path="/story/*" />
            <Contact path="/contact" />
            <Blog path="/blog" />
          </Router>
        </Layout>
      );
}

export default App