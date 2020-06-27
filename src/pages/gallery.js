import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import texts from "../data/texts-hu.json";

const Gallery = (props) => {
    const slug = props['*'];
    const files = props.data.files.nodes.filter(file => file.relativeDirectory === slug);
    console.log('[GALLERY] ', props, files)
    return (
        <Layout>
          <SEO title="Póth Attila Photographer" />
          {
            texts[slug] && 
            texts[slug].description && 
            texts[slug].description.split('\n').map(
              line => (
                <p className='description'>
                  {line}
                </p>
              )
            )
          }
          <div className='gallery-stories'>
            {files.map((file, i) => (
                <div className='story' key={i}>
                  <img src={`/${file.relativePath}`} alt={`${file.relativePath}`}/>
                </div>
            ))}
          </div>
        </Layout>
      )
}

export const query = graphql`
    query {
        files: allFile(filter: { sourceInstanceName: { eq: "staticResources" } }) {
            nodes {
            relativePath
            base
            relativeDirectory
            }
        }
    }
`;

export default Gallery;
