import React, { useEffect, useState } from 'react';
import '../../Assets/CSS/ListPage.scss';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import datas from '../Data/dummyData.js';
import Filter from './Filter';
import Listings from './Listings';
import Map from './Map';
import Typography from '@mui/material/Typography'
import { Pagination } from '@mui/material';
// import Pagination from './Pagination';

const ListPage = () => {
    const {sale_type, city, max_price, min_price } = useParams()
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(false)

    //Paginations 
    const [currentPage, setCurrentPage] = useState(1)
    const [listingPerPage, setListingPerPage] = useState(3)
    const [active, setActive] = useState(1)

    const indexOfLastListing = currentPage * listingPerPage;
    const indexOfFirstListing = indexOfLastListing - listingPerPage;
    const currentListings = searchResults.slice(indexOfFirstListing, indexOfLastListing)


    // Material UI pagination
    const [currentPageMui, setCurrentpageMui] = useState([]);
    const [totalPages, setTotalPages] = useState(1)
    const pageSize = 2

    const visitPage = (page) => {
        setCurrentPage(page)
        setActive(page)
    }

    const previous_number = () => {
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1);
            setActive(currentPage - 1)
        }
    }

    const next_number = () => {
        if(currentPage !== Math.ceil(searchResults.length/3)){
            setCurrentPage(currentPage + 1)
            setActive(currentPage + 1)
        }
    }

    //


    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    useEffect(() => {

            const fetchData = async () => {

                try{
                    setLoading(true)
                    const body = JSON.stringify({sale_type, city, max_price, min_price }).toLowerCase()
                    const config = {
                        headers:{
                            'Content-Type': 'application/json'
                        }
                    }
                    const res = await axios.post(`${process.env.REACT_APP_ENDPOINT_URL}/re_app/?page=${currentPage}&page_size=${pageSize}/`, body, config)
                    if(res.data.results){
                        setSearchResults(res.data.results || res.data)
                        setTotalPages(Math.ceil(res.data.count / pageSize));
                        setLoading(false)
                        window.scrollTo(0, 0);
                    }
                    else if(res.data.error){
                        setLoading(false)
                    }     
                }
                catch(error){
                    console.log(error)
                }
                    
            }
        fetchData()
    },[sale_type, city, max_price, min_price, currentPage])

    //const {title, address, bathroom, main_image, price, slug, bathroom } = searchResults
    
    console.log(searchResults)

    
    const max_prize = numberWithCommas(max_price)
    const min_prize = numberWithCommas(min_price)

    return(
        <div className='contents'>
            
            <div className='list_left_container'>
                <div class='desc'>
                    <span>
                    <Typography variant="h6" component='h2' color="initial">Filter Listing results for House <strong>{sale_type}</strong> in <strong>{city}</strong></Typography>  
                    </span>
                    <span>

                    <Typography variant="body2" component='h5' color="initial">From <strong><small>$</small>{max_prize}</strong> to <strong><small>$</small>{max_prize}</strong></Typography>
                    </span> 
                </div>
            
                <Filter sale_type={sale_type} city={city} max_price={max_price} min_price={min_price} />

                <Listings 
                searchResults={searchResults}
                loading={loading}
                currentListings={currentListings}

                 />

                {
                searchResults.length !== 0 ? (
                // <Pagination 
                // itemsPerPage={listingPerPage}
                // count={searchResults.length}
                // visitPage={visitPage}
                // previous={previous_number}
                // next={next_number}
                // active={active}
                // setActive={setActive}
                // />
                <div className='pagination'>
                    <div className='wrap'>
                    <Pagination 
                    variant='outlined'
                    color='primary'
                    count={pageSize}
                    page = {currentPage}
                    onChange = {(e, value) => setCurrentPage(value)}
                /> 
                    </div>
                </div>
                    ) :
                    null
            }

            </div>

            <div className='list_right_container'>
                <Map items={searchResults} />
            </div>
        </div>
    )
}

export default ListPage;