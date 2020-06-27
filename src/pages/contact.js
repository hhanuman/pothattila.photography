import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ScrollGallery from '../components/ScrollGallery'
import Auth from '../../../eta/presentation2/src/containers/Auth'

const SecondPage = () => (
  <Layout>
    <SEO title='Póth Attila Photographer' />
    <div className='contact'>
    <ScrollGallery 
        items={[
          {
            background: '../profile.jpg', 
            render: () => (
              <div className='editorial'>
                <h1>
                  Hi, my name is Attila! I'm a professional photographer
                </h1>
                <br/>
                <p>
                  Do you have a question? 
                  <br/>Would you like to work with me?
                  <br/>I'm available!
                </p>
                <form
                  action='https://formspree.io/mayqggae'
                  method='POST'>
                    <div className='form-field'>
                      <input 
                        required
                        type='text' 
                        name='_replyto'
                        placeholder='Your email'
                      />
                      <label for='_replyto'>
                        Your email:              
                      </label>
                    </div>
                    <div className='form-field'>
                      <textarea required name='message'></textarea>
                      <label for='message'>
                        Your message:
                      </label>  
                    </div>
                    <input type='text' name='_gotcha' style={{ display: 'none' }} />
                    <button type='submit'>Contact me!</button>
                </form>
                <h2>
                  ...or, let me show you my workflow, how we would work together:
                </h2>
              </div>
            )
          }
        ]}
      />
      <ScrollGallery 
        items={[
          {
            background: '../terem22-mimi/DSC05052.jpg', 
            render: () => (
              <div className='editorial'>
                <h2>
                  Fashion style portraits
                </h2>
              </div>
            )
          }
        ]}
      />
      <ScrollGallery 
        items={[
          {
            background: '../train-cemetery/DSC00151.jpg', 
            render: () => (
              <div className='editorial'>
                <h2>
                  Location scouting, outdoor photoshoots
                </h2>
              </div>
            )
          }
        ]}
      />
      <ScrollGallery 
        items={[
          {
            background: '../chinese-newyear/cv783hn1uk.jpg', 
            render: () => (
              <div className='editorial'>
                <h2>
                  Moodboards, planning, concept
                </h2>
              </div>
            )
          }
        ]}
      />
      <ScrollGallery 
        items={[
          {
            background: '../b72-zsu-prism/DSC00159.jpg', 
            render: () => (
              <div className='editorial'>
                <h2>
                  Working with brands, models, stylists, creatives
                </h2>
              </div>
            )
          }
        ]}
      />
      <ScrollGallery 
        items={[
          {
            background: '../studio-b72/DSC00894.jpg', 
            render: () => (
              <div className='editorial'>
                <h2>
                  Retouching, post-production, color grading
                </h2>
              </div>
            )
          }
        ]}
      />
      <ScrollGallery 
        items={[
          {
            background: '../rome-surreal/DSC09633.jpg', 
            render: () => (
              <div className='editorial'>
                <h2>
                  Photoshop composites & special effects
                </h2>
              </div>
            )
          }
        ]}
      />
      <ScrollGallery 
        items={[
          {
            background: '../brasilian-wedding/DSC05589.jpg', 
            render: () => (
              <div className='editorial'>
                <h2>
                  Event photography
                </h2>
              </div>
            )
          }
        ]}
      />
      <ScrollGallery 
        items={[
          {
            background: '../kisoroszi-prism/DSC08666.jpg', 
            render: () => (
              <div className='editorial'>
                <h2>Unique photoshoots with vintage lenses</h2>
              </div>
            )
          }
        ]}
      />
    </div>
  </Layout>
)

export default SecondPage
