import { Box, Button, ButtonGroup, FormHelperText, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import axios from 'axios'
import {isInteger, useFormik} from 'formik'
import { Link, useNavigate} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

const SearchBar = () => {

  const [searchResult, setSearchResult] = useState([])
  const [searchError, setSearchError] = useState('')
  const [type, setType] = useState('') 
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const [error, setError] = useState({
    cityError: '',
    max_priceError: '',
    min_priceError: '',
    improper: ''
  })

  const [query, setQuery] = useState({type: 'Buy'})

  const [indexe, setIndex] = useState(0);
  const [sale_type , setSale_Type] = useState('')


  const [values, setValues] = useState({
    'city': '',
    'min_price': '',
    'max_price': ''
  })

  const {cityError, max_priceError, min_priceError, improper} = error
  const {city, min_price, max_price} = values
  const handleChange = (e) => {
  setValues({...values, [e.target.name]: e.target.value})
  }


  const switchType = (value, index) => {
    setSale_Type(value.type)
    setQuery({...query, type: value})
    setIndex(index)
  }


const handleSubmit = async () => {

          const validationError = {}
    
            if(city === '' ){
              validationError.cityError = 'City is required'
            }

            else if(max_price === ''){
              validationError.max_priceError = 'Max price required'
            }

            else if(min_price === ''){
              validationError.min_priceError = 'Min price required'
            }
            
           else if(min_price  && max_price == isInteger() && min_price < max_price && min_price < max_price){
              validationError.improper = 'Improper search filter input'
            }

            if(Object.keys(validationError).length > 0){
             setError({...error, cityError: validationError.cityError, max_priceError: validationError.max_priceError, min_priceError:validationError.max_priceError, improper: validationError.improper})
          }
           
          else{
            setError({...error, cityError: '', max_priceError: '', min_priceError: '' , improper: ''})
            setLoading(true)
          try{
              const config = {
                headers:{
                    'Content-Type': 'application/json'
                }
            }

              const body = JSON.stringify({sale_type, city, max_price, min_price}).toLowerCase()

              const res = await axios.post(`${process.env.REACT_APP_ENDPOINT_URL}/re_app/`, body, config)
              setLoading(false)
              if(res.data.results){
                navigate(`/listing/${sale_type}/${city}/${max_price}/${min_price}`)

              }else if(res.data.error){
                setSearchError(res.data.error)
                navigate(``)
              }else{
                navigate('')
              }
            }

        catch(errr){
          setLoading(false)
            console.log("there is and eror")
          }

        }
    }
  
  const types = [
    {
      type : 'Buy'
    },

    {
      type : 'Rent'
    }
  ]

console.log(min_price == isInteger())
  return (
    <Stack direction='column'>
        <ButtonGroup size='large'>
            {
                types.map((type, index) => {
                    return(
                        <Button style={{transition: 'all 0.5s ease', borderRadius:'5px 5px 0 0'}} key={index} variant={indexe === index ? 'contained': 'outlined'} 
                            type='button' color={indexe !== index ? 'warning' : 'secondary' } onClick={() => switchType(type, index)}>{type.type}
                        </Button>
                    )
                })
            }
            
        </ButtonGroup>
        <Stack spacing={2} direction='row'>

            <TextField label='City' name='city' value={city} onChange={handleChange} color='secondary' variant='standard' type='text' size='small' 
            error={cityError}
            helperText={cityError && cityError}
            />

            <TextField label='Min price' name='min_price' value={min_price} onChange={handleChange} color='secondary' variant='standard' type='text' size='small' 
             error={min_priceError}
             helperText={min_priceError && min_priceError}
            />

            <TextField label='Max price' name='max_price' value={max_price} onChange={handleChange}  color='secondary'  variant='standard' type='text' size='small' 
              error={max_priceError}
              helperText={max_priceError && max_priceError}
            />

            { 
            loading ? 
            <ColorRing
            visible={true}
            height="50"
            width="50"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#f75200', '#da04ff', '#ffdd00', '#9c27b0', '#9c27b0']}
            /> : 
            <IconButton onClick={handleSubmit} size='large' color='warning'><SearchIcon /></IconButton> 
            }
            
            

        </Stack>
        {
          improper ?
          <span style={{color: 'red'}}>
            <FormHelperText error>{improper}</FormHelperText>
          </span>

          :

          ''
        }


        {
          searchError ?
          <span style={{color: 'red'}}>
            <FormHelperText error> Search filter not found</FormHelperText>
          </span>

          :

          ''
        }
          
        
    </Stack>
  )
}

export default SearchBar