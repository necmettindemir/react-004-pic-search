import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {

    //--- version 1 ---
    const images = props.images.map( (image)=> {
        return (            
                <img key={image.id} src={image.urls.regular} alt={image.description}/>            
        );
    });
    //--- /version 1 ---


    //--- version 2 ---
    const imagesV2 = props.images.map( ( {id, urls, description} )=> {
        return (            
                <img key={id} src={urls.regular} alt={description} />                                          
        );
    });
    //--- /version 2 ---

   //--- version 3 ---
   const imagesV3 = props.images.map( ( image )=> {
        return (            
            // <img key={id} src={urls.regular} alt={description} />                            
            <ImageCard key={image.id} image={image} />                            
        );
    });
//--- /version 3 ---

    //console.log(props.images);

    return <div className="image-list" >{imagesV3}</div>;
    
}

export default ImageList;