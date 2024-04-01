import React from 'react';
import '../../Assets/CSS/ListPage.scss';
import datas from '../Data/dummyData.js';
import Filter from './Filter';
import Card from './Card';
import Map from './Map';
import Typography from '@mui/material/Typography'

const ListPage = () => {
    return(
        <div className='contents'>
            <span className='description_text'>
              <Typography variant="h6" component='h2' color="initial">Filter Results</Typography>  
            </span>
            
            <div className='list_left_container'>
                <Filter />
            <div className='wrapper'>
                {
                    datas.map((data, index) => {
                        return(
                            <Card key={data.id} item={data} />
                        )
                    })
                } 
            </div>
            </div>

            <div className='list_right_container'>
                {
                   datas.map((item, index) => {
                    return(
                        <Map items={item} key={index} />
                    )
                   }) 
                }
                
            </div>
        </div>
    )
}

export default ListPage;