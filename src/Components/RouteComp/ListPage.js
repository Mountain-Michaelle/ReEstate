import React from 'react';
import '../../Assets/CSS/ListPage.scss';
import datas from '../Data/dummyData.js';
import Filter from './Filter';
import Card from './Card';
import Map from './Map';

const ListPage = () => {
    return(
        <div className='contents'>
            <div className='list_left_container'>
                <h2>For posts</h2>
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
                <Map />
            </div>
        </div>
    )
}

export default ListPage;