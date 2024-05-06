import React, {useState} from 'react'
import '../../Assets/CSS/Slider.scss';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {IconButton} from '@mui/material';
import { Icon } from 'leaflet';

function Slider({slideImages, images, main_image}) {

    const [imgIndex, setImgIndex] = useState(null);
    const [indexe, setIndexe] = useState(0);

    const handleIndexClick = (index) => {
        setImgIndex(index)
    }

    const handleSlideNext = (direction) => {
        
    }

    console.log({'direction': imgIndex})
  return (
    <div className='slider'>
        {
            imgIndex !== null && (
            <div className='open'>
                <span>
                     <IconButton color='warning' onClick={() => handleIndexClick(null)}><CloseOutlinedIcon /></IconButton>
                </span>
               
                <div className='wrapper1'>
                    <img src={slideImages[imgIndex]} alt='' />
                </div> 
            </div>
            )
        }
    
       <div className='larger_img'>
          <img src={main_image} onClick={() => handleIndexClick(0)} alt='' />

            <div className='arrows'>
                <IconButton onClick={handleSlideNext()} color='warning' size='large'><ArrowBackIosNewOutlinedIcon /></IconButton>
                <IconButton onClick={handleSlideNext('right')} color='warning' size='large'><ArrowForwardIosOutlinedIcon /></IconButton> 
            </div>
       </div>

       <div className='smaller_imgs'>
        {
            images.map((item, index) => {
                return(
                    <img key={index} src={item.image}  alt='' onClick={() => handleIndexClick(index)} />
                )
            })
        }
       </div>
    </div>
  )
}

export default Slider