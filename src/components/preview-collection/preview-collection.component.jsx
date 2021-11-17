import React from 'react';

import './preview-collection.styles.scss';

import PreviewItem from '../preview-item/preview-item.component';

const PreviewCollection = ({title, items}) => {
    return (
        <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, index) => index < 4).map(({id, ...otherItemProps}) => (
                    <PreviewItem key={id} {...otherItemProps}/>
                ))
            }
        </div>
      </div>
    )
}
    
export default PreviewCollection;