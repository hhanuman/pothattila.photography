import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ScrollGallery from '../components/ScrollGallery'

const Blog = () => (
  <Layout>
    <SEO title='Póth Attila Photographer' />
    
    <div className='contact'>
        <div className='full-width' style={{
            backgroundImage: 'url("../street/DSC01455.jpg")',
            paddingTop: '33.333%',
            margin: '0 0 15px 0'
        }}/>
        <ScrollGallery 
            items={[
                {
                    background: '../street/DSC09568.jpg', 
                    render: () => (
                    <div className='editorial'>
                        <h1>All the exciting stories about my photos</h1>
                        <br/>
                        <p>
                            COMING SOON!
                        </p>
                    </div>
                    )
                }
            ]}
        />
        <div className='full-width' style={{
            backgroundImage: 'url("../street/DSC09217.jpg")',
            borderTop: '15px solid white',
            paddingTop: '79.95%',
            margin: '0 0 -160px 0'
        }}/>
        <ScrollGallery 
            items={[
                {
                    background: '../street/DSC01592.jpg', 
                    render: () => (
                    <div className='editorial'>
                        
                    </div>
                    )
                }
            ]}
        />
        <div className='full-width' style={{
            backgroundImage: 'url("../street/DSC01590.jpg")',
            borderTop: '15px solid white',
            paddingTop: '79.95%'
        }}/>
    </div>
  </Layout>
)

export default Blog
