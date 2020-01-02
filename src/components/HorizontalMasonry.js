import React, { useEffect } from "react";
import useKeyPress from '../hooks/useKeyPress';
import isMobileDevice from "../hooks/ismobile";

const LightboxGallery = ({ items, activeIdx, onClick, onThumbnailClick }) => {
    return items[activeIdx] ? (
        <div className='lightbox-gallery'
            onClick={onClick}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                textAlign: 'center',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                display: 'flex!important',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,.9)',
                zIndex: 10
            }}>
            <img 
                style={{
                    maxHeight: '95vh',
                    padding: '10px 0 5px 0',
                    animation: 'fadeIn 0.5s'
                }}
                onClick={(e) => e.stopPropagation()}
                src={items[activeIdx].src} />
            <div className='thumbnails'>
                {
                    items.map((item, i) => (
                        <img 
                            style={{
                                height: '50px',
                                margin: '0 10px 0 0',
                                border: activeIdx === i ? '2px solid rgba(255,255,255,.5)' : '2px solid rgba(0,0,0,0)',
                                filter: activeIdx === i ? 'grayscale(0)' : 'grayscale(1)'
                            }}
                            key={i}
                            src={item.src} 
                            onClick={(e) => {
                                e.stopPropagation();
                                onThumbnailClick(i);
                            }} />
                    ))
                }
            </div>
        </div>
    ) : null;
};

const Masonry = ({
    items,
    renderer
}) => {
    const [active, setActive] = React.useState(undefined);
    
    const leftPress = useKeyPress('ArrowLeft');
    const rightPress = useKeyPress('ArrowRight');
    const escPress = useKeyPress('Escape');

    useEffect(() => {
        if(leftPress && active >= 1){
            setActive(active - 1);
        }
        if(rightPress && active < items.length - 1){
            setActive(active + 1);
        }
        if(escPress){
            setActive(undefined);
        }
    }, [leftPress, rightPress, escPress]);

    return (
        <div className='horizontal-masonry'>
            {
                items.map(
                    (item, i) => (
                        <div className={`horizontal-masonry-item`} 
                            key={i} 
                            onClick={() => {
                                if(!isMobileDevice()){ 
                                    setActive(i);
                                }
                            }}>
                                {renderer(item)}
                        </div>
                    )
                )
            }
            {
                active !== undefined && (
                    <LightboxGallery 
                        items={items}
                        activeIdx={active}
                        onClick={() => setActive(undefined)}
                        onThumbnailClick={(idx) => setActive(idx)}
                    />
                )
            }
        </div>
    );
};

export default Masonry;