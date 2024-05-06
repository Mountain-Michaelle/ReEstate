import React from 'react'
import { ColorRing } from 'react-loader-spinner'
import Card from './Card';

function Listings({searchResults, loading}) {

    const getListings = () => {
        let listingsOnPage = [];
        let result = [];
        
            loading ? (
               <div className='laoding'>
                 <ColorRing
                visible={true}
                height="250"
                width="250"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#fddfa9', '#da04ff', '#ffeac4', '#ffa400', '#ffeac4']}
                /> 
            </div>  
            )
            :
            (
                searchResults.map((data, index) => {
                return listingsOnPage.push(
                    <Card key={data.id} item={data} />
                )
            
            })
            )

        for (let i = 0; i < searchResults.length; i += 3) {
            result.push(
                <>
                    <div className='wrapper'>
                    {listingsOnPage[i]}
                    </div>

                    <div className='wrapper'>
                    {listingsOnPage[i + 1] ? listingsOnPage[i+1] : null}
                    </div>

                    <div className='wrapper'>
                    {listingsOnPage[i+2] ? listingsOnPage[i+2] : null}
                    </div>
                </>
            )
        }

        return result
    }

  return (
    <>
        {getListings()}  
    </>
  )
}

export default Listings