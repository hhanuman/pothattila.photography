import React from "react"

const ScrollGallery = ({ items }) => {
    return (
      <div className='scroll-gallery'>
        {
          items.map(
            (item, i) => {
              return (
                <div className='scroll-gallery-item' key={i} style={{
                  background: `url(${item.background})`
                }}>
                    {
                        item.render && item.render()
                    }
                </div>     
              );
            }
          )
        }
      </div>
    );
  };

export default ScrollGallery;