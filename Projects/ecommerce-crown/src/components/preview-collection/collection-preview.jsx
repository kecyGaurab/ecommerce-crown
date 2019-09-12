import React from 'react'
import './collection.preview.styles.scss'
import CollectionItem from'../collection-items/collection-item.component'

//component that renders 4 items  from a category
 const CollectionPreview = ({ title, items})=> {
    
        return (
            <div className="collection-preview">
                <h1 className="title">{title.toUpperCase()}</h1> 
                <div className='preview'>
                {items.filter((item,i)=>i<4).map(({id,...otherItemProps}) =>(
                    <CollectionItem key={id}{...otherItemProps}/>
                ))}
                </div>
                
            </div>
        )
    
}

export default CollectionPreview
