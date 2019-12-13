import React from "react"

const Masonry = ({
    items,
    itemWidth = 500,
    columnCount = 3,
    renderer
}) => (
    <div className='masonry'>
        {
            items.map(
                item => (
                    <div className='masonry-item cover' 
                        style={{ maxWidth: itemWidth, columnCount: columnCount}}>
                        {renderer(item)}
                    </div>
                )
            )
        }
    </div>
);

export default Masonry;