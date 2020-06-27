import React from "react"
import { useState, useEffect } from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

const pixelToMeter = 50;

const hyperfocal = (focalLength, fStop, CoC) => (focalLength * focalLength) / (fStop * CoC);

const distanceOf = ({ focusDistance, focalLength, fStop, CoC }) => {
	const H = hyperfocal(focalLength, fStop, CoC);
    const near = focusDistance * H / (H + (focusDistance - focalLength));
    const far = focusDistance * H / (H - (focusDistance - focalLength));
	return {
        hyperfocal: H / 1000,
        near: near / 1000, 
        far: far / 1000,
        dof: (far - near) / 1000
  };
};

const NotFoundPage = () => {
    const [focus, setFocus] = useState(0);
    const [distance, setDistance] = useState({
        hyperfocal: 0,
        near: 0,
        far: 0,
        dof: 0
    });
    useEffect(() => {
        setDistance(distanceOf({
            focusDistance: focus * 1000, 
            focalLength: 58 * 1.6, 
            fStop: 8, 
            CoC: 0.048
        }))
    }, [focus]); 
    return (
        <Layout>
          <SEO title='Póth Attila Photographer' />
          <h1>Depth of Field calculator</h1>
          <br/>Focus at: {focus}m
          <br/>Near focus: {distance.near.toFixed(2)}m
          <br/>Far focus: {distance.far.toFixed(2)}m
          <br/>Depth of Field: {distance.dof}
          <br/>Hyperfocal: {distance.hyperfocal}
          <div onMouseMove={(e) => setFocus(e.nativeEvent.offsetX / pixelToMeter)}
              style={{
                  width: '100%',
                  height: '100vh',
                  position: 'relative',
                  backgroundColor: 'lightgray'
              }}
            >
              <div 
                style={{
                    width: distance.near * pixelToMeter,
                    height: 50,
                    color: 'black',
                    overflow: 'hidden',
                    margin: '0 auto',
                    position: 'absolute',
                    backgroundColor: 'white',
                    left: focus * pixelToMeter - distance.near  * pixelToMeter,
                    top: 0
                }}
              >Near {distance.near.toFixed(2)}m</div>
              <div 
                style={{
                    width: distance.far * pixelToMeter,
                    height: 50,
                    color: 'white',
                    overflow: 'hidden',
                    margin: '0 auto',
                    position: 'absolute',
                    backgroundColor: 'black',
                    left: focus * pixelToMeter,
                    top: 0
                }}
              >Far {distance.far.toFixed(2)}m</div>
              <div 
                style={{
                    width: (distance.near + distance.far) * pixelToMeter,
                    height: 50,
                    color: 'white',
                    overflow: 'hidden',
                    paddingRight: distance.far * pixelToMeter,
                    textAlign: 'right',
                    margin: '0 auto',
                    position: 'absolute',
                    backgroundColor: 'darkgrey',
                    left: focus * pixelToMeter - distance.near  * pixelToMeter,
                    top: 50
                }}
              >Focus at: {focus}m</div>
          </div>
        </Layout>
    );
}

export default NotFoundPage
