import React from "react"
//import { Link } from "gatsby"

import useWindowDimensions from "../hooks/useWindowDimensions"

import Layout from "../components/layout"
import HorizontalMasonry from "../components/HorizontalMasonry"
import SEO from "../components/seo"
import { Link } from "gatsby"
//import json from "../data/chapters.json";
import isMobileDevice from "../hooks/ismobile"
//import { graphql } from 'gatsby';
//import useScrollOffset from '../hooks/useScrollOffset';

/*
const getData = (data) => {
  try {
    const mapped = {
      meta: data.chapters.edges.map(
        chapter => ({
          name: chapter.node.name,
          slug: chapter.node.slug,
          categories: chapter.node.categories
        })
      ),
      files: data.files.nodes,
      layout: data.layout.edges.map(
        l => ({
          title: l.node.title,
          slug: l.node.slug,
          src: l.node.src
        })
      )
    };
    console.log('[QUERY]', data, mapped);
    return mapped;
  } catch(error) {
    console.log('[ERROR]', data, error);
    return ({
      meta: [],
      files: []
    });
  }
};
*/

const ImgWithTitle = ({height}) => (img) => (
  <TheImage img={img} height={height} />
);

const TheImage = ({ 
  img, 
  height
}) => {
  return (
    <>
     {img.title && <h3>{img.title}</h3>}
      <img src={img.src} alt={img.src} style={{
        maxHeight: isMobileDevice() ? 'none' : height
      }}/>
    </>
  )
};

const ParallaxImage = ({ src, height, offset, force }) => {
  return (
    <div style={{
      scrollBehavior: 'smooth',
      backgroundImage: `url(${src})`,
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: height,
      position: 'relative',
      backgroundPositionY: (-height / 2) + offset * force
    }}>
      <h2 style={{
        position: 'absolute',
        color: 'white',
        left: '25%',
        top: `${offset * force * 1.5}px`
      }}>Fashion Photography</h2>
    </div>
  );
};

const IndexPage = (props) => {
  const { height, width } = useWindowDimensions();
  //const scroll = useScrollOffset();
  console.log(`[WINDOW] width: ${width}px height: ${height}px ${isMobileDevice() ? 'mobile' : 'desktop'}`);
  //const { files, meta, layout } = getData(props.data);
  return (
    <Layout>
      <SEO title='Póth Attila Portrait Photography' />

      <h2><Link to='/gallery/b72-kaderin-gold'>B72 set I: KC</Link></h2>
      <HorizontalMasonry
        items={[
          {title:'', src: 'studio-b72/DSC00894.jpg'},
          {title:'', src: 'studio-b72/DSC00900.jpg'},
          {title:'', src: 'studio-b72/DSC00922.jpg'},
        ]}
        renderer={ImgWithTitle({ height: '300px' })}
      />

      <h2><Link to='/gallery/b72-zsu-prism'>B72 set II: Zsu</Link></h2>
      <HorizontalMasonry
        items={[
          {title:'', src: 'studio-b72/DSC00159.jpg'},
          {title:'', src: 'studio-b72/DSC00139.jpg'},
          {title:'', src: 'studio-b72/DSC00174.jpg'},
          {title:'', src: 'studio-b72/DSC00186.jpg'}
        ]}
        renderer={ImgWithTitle({ height: '260px' })}
      />

      <h2><Link to='/gallery/terem22-mimi'>Terem 22: Mimi</Link></h2>
      <HorizontalMasonry
        items={[
          {title:'', src: 'terem22-mimi/DSC05026.JPG'},
          {title:'', src: 'terem22-mimi/DSC05039.jpg'},
          {title:'', src: 'terem22-mimi/DSC05052.jpg'},
          {title:'', src: 'terem22-mimi/DSC05026-crop-4x5.jpg'}
        ]}
        renderer={ImgWithTitle({ height: '460px' })}
      />

      <h2><Link to='/category/marie-claire-fashion-days-2019'>Marie Claire Fashion Days 2019</Link></h2>
      <HorizontalMasonry
        items={[
          {title:'', src: 'mcfd2019-norasarman/DSC03564.jpg'},
          {title:'', src: 'mcfd2019-norasarman/DSC03546.JPG'},
          {title:'', src: 'mcfd2019-norasarman/DSC03550.jpg'},
          {title:'', src: 'mcfd2019-anitapasztor/DSC03759.jpg'},
          {title:'', src: 'mcfd2019-tomcsanyi/DSC03522.jpg'},
          {title:'', src: 'mcfd2019-viktoriavarga/DSC03645.jpg'}
        ]}
        renderer={ImgWithTitle({ height: '333px' })}
      />

    <h2><Link to='/gallery/train-cemetery'>Train: Agi</Link></h2>
      <HorizontalMasonry
        items={[
          {title:'', src: 'train-cemetery/0DSC00215.jpg'},
          {title:'', src: 'train-cemetery/DSC00206.jpg'},
          {title:'', src: 'train-cemetery/DSC00151.jpg'}
        ]}
        renderer={ImgWithTitle({ height: '355px' })}
      />

      <h2><Link to='/gallery/studio-sidelight-eniko'>Sidelight: Eniko</Link></h2>
      <HorizontalMasonry
        items={[
          {title:'', src: 'studio-sidelight-eniko/e1qst16n58.jpg'},
          {title:'', src: 'studio-sidelight-eniko/e5inmr9rs8.jpg'},
          {title:'', src: 'studio-sidelight-eniko/eoj9yr69f5.jpg'},
          {title:'', src: 'studio-sidelight-eniko/e9lzhrwmkk.jpg'},
          {title:'', src: 'studio-sidelight-eniko/eiyhp2tjp4.jpg'},
          {title:'', src: 'studio-sidelight-eniko/eo12xfufrs.jpg'}
        ]}
        renderer={ImgWithTitle({ height: '370px' })}
      />

      <h2><Link to='/gallery/samalie-botanical'>Botanical gardens: Samalie</Link></h2>
      <HorizontalMasonry
        items={[
          {title:'', src: 'samalie-botanical/DSC09950-emerald.jpg'},
          {title:'', src: 'samalie-botanical/DSC09878-emerald.jpg'},
          {title:'', src: 'samalie-botanical/DSC09759-emerald.jpg'}
        ]}
        renderer={ImgWithTitle({ height: '300px' })}
      />

      <h2><Link to='/gallery/terem22-mimi'>Terem 22 set II: Mimi</Link></h2>
      <HorizontalMasonry
        items={[
          {title:'', src: 'terem22-mimi/DSC05150.jpg'},
          {title:'', src: 'terem22-mimi/DSC05190.jpg'},
          {title:'', src: 'terem22-mimi/DSC05183.jpg'}
        ]}
        renderer={ImgWithTitle({ height: '475px' })}
      />

      <h2><Link to='/gallery/samalie-metro'>Metro: Samalie</Link></h2>
      <HorizontalMasonry
        items={[
          {title:'', src: 'samalie-metro/1296777164738884.jpg'},
          {title:'', src: 'samalie-metro/s1k570ibgl.jpg'},
          {title:'', src: 'samalie-metro/smxxj9x465.jpg'},
          {title:'', src: 'samalie-metro/s00y02gb8os.jpg'}
        ]}
        renderer={ImgWithTitle({ height: '225px' })}
      />

      <h2><Link to='/gallery/b72-kaderin-dummy'>B72 set III: KC</Link></h2>
      <HorizontalMasonry
        items={[
          {title:'', src: 'studio-b72/DSC00225.jpg'},
          {title:'', src: 'studio-b72/DSC00222.jpg'},
          {title:'', src: 'studio-b72/DSC00233.jpg'},
          {title:'', src: 'studio-b72/DSC00231.jpg'},
          {title:'', src: 'studio-b72/DSC00242.jpg'},
          {title:'', src: 'studio-b72/DSC00246.jpg'}
        ]}
        renderer={ImgWithTitle({ height: '277px' })}
      />

      <h2><Link to='/gallery/astoria-passage'>Passage: Agi</Link></h2>
      <HorizontalMasonry
        items={[
          {title:'', src: 'astoria-passage/DSC08978.jpg'},
          {title:'', src: 'astoria-passage/DSC08937.jpg'},
          {title:'', src: 'astoria-passage/DSC09069.jpg'},
          {title:'', src: 'astoria-passage/DSC09096.jpg'}
        ]}
        renderer={ImgWithTitle({ height: '260px' })}
      />

      <h2><Link to='/gallery/gul-baba-morning'>Sunrise: Regina</Link></h2>
      <HorizontalMasonry
        items={[
          {title:'', src: 'gul-baba-morning/DSC00963.jpg'},
          {title:'', src: 'gul-baba-morning/DSC00848.jpg'},
          {title:'', src: 'gul-baba-morning/DSC00956.jpg'},
        ]}
        renderer={ImgWithTitle({ height: '450px' })}
      />
      <HorizontalMasonry
        items={[
          {title:'', src: 'gul-baba-morning/DSC00680.jpg'},
          {title:'', src: 'gul-baba-morning/DSC00789.jpg'},
          {title:'', src: 'gul-baba-morning/DSC00872.jpg'},
        ]}
        renderer={ImgWithTitle({ height: '300px' })}
      />

      <h2><Link to='/gallery/gozsdu-viki'>Neon nights I: Viki</Link></h2>
      <HorizontalMasonry
        items={[
          {title:'', src: 'gozsdu-viki/DSC02366.jpg'},
          {title:'', src: 'gozsdu-viki/DSC02387.jpg'},
          {title:'', src: 'gozsdu-viki/DSC02337.jpg'},
        ]}
        renderer={ImgWithTitle({ height: '370px' })}
      />

      <h2><Link to='/gallery/gozsdu-cinti'>Neon nights II: Cinti</Link></h2>
      <HorizontalMasonry
        items={[
          {title:'', src: 'gozsdu-cinti/D0SC05895.jpg'},
          {title:'', src: 'gozsdu-cinti/DSC05884.jpg'},
          {title:'', src: 'gozsdu-cinti/DSC05950.jpg'},
        ]}
        renderer={ImgWithTitle({ height: '370px' })}
      />

      <h2><Link to='/gallery/b72-zsu-tinsel-curtain'>B72 set IV: Zsu</Link></h2>
      <HorizontalMasonry
        items={[
          {title:'', src: 'studio-b72/DSC00733.jpg'},
          {title:'', src: 'studio-b72/DSC00741.jpg'},
          {title:'', src: 'studio-b72/DSC00738.jpg'},
          {title:'', src: 'studio-b72/DSC00753.jpg'}
        ]}
        renderer={ImgWithTitle({ height: '330px' })}
      />
      
      <h2><Link to='/gallery/studio-feszek-fashion'>Fészek set I: Sara</Link></h2>
      <HorizontalMasonry
        items={[
          {title:'', src: 'studio-feszek-fashion/DSC09621.jpg'},
          {title:'', src: 'studio-feszek-fashion/DSC09619.jpg'},
          {title:'', src: 'studio-feszek-fashion/DSC09603.jpg'}
        ]}
        renderer={ImgWithTitle({ height: '395px' })}
      />

    </Layout>
  )
}

/*
export const query = graphql`
  query {
    chapters: allChaptersJson {
      edges {
        node {
          name
          categories
          slug
        }
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
    files: allFile(filter: { sourceInstanceName: { eq: "staticResources" } }) {
      nodes {
        relativePath
        base
        relativeDirectory
      }
    }
  }`
*/

export default IndexPage
