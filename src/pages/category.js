import React from "react"
import { Link } from "gatsby"
//import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import chaptersJSON from "../data/chapters.json";

const normalize = (collection, idKey) =>
    collection.reduce((dictionary, item) => ({
        ...dictionary,
        [item[idKey]]: item
    }), {});


const Category = (props) => {
    const category = props['*'];
    //const files = props.data.files.nodes;
    const layout = normalize(chaptersJSON, 'slug');
    const inCategory = chaptersJSON.filter(
      chapter => chapter.categories.includes(category)
    );
    console.log('[CATEGORY] ', props, inCategory, layout)
    return (
        <Layout>
          <SEO title="Póth Attila - category page" />
          <div className='masonry'>
          {
              inCategory.map(
                  (item, i) => (
                    <div className='masonry-item cover' key={i}>
                        <Link to={'/gallery/' + item.slug}>
                        <h3>{item.name}</h3>
                        {
                            layout[item.slug] &&
                            layout[item.slug].cover && 
                            <img 
                              src={`/${layout[item.slug].cover}`} 
                              alt={`/${layout[item.slug].cover}`} />
                        }
                        </Link>
                    </div>
                  )
              )
          }
          </div>
        </Layout>
      )
}

/*
export const query = graphql`
    query {
        files: allFile(filter: { sourceInstanceName: { eq: "staticResources" } }) {
            nodes {
            relativePath
            base
            relativeDirectory
            }
        }
        layout: allLayoutJson {
            edges {
              node {
                slug
                title
                src
              }
            }
        }
        meta: allChaptersJson {
            edges {
              node {
                name
                categories
                slug
              }
            }
          }
    }
`;
*/

export default Category;
