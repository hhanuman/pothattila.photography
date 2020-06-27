import React from 'react'

import Layout from '../components/layout';
import SEO from '../components/seo';

const Blog = (props) => {

    const storyName = props['*'];
    console.log('[STORY] ', props, storyName);

    return (
        <Layout>
          <SEO title='Póth Attila Photographer' />
          <div className='story'>
              Lista
          </div>
        </Layout>
    );
}

export default Blog
