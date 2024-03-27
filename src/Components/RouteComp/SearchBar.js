import { Box, Button, ButtonGroup, IconButton, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

function SearchBar() {

  const types = [
    {
      type : 'Buy'
    },
    {
      type : 'Rent'
    }
  ]

  const [query, setQuery] = useState({
    type: 'Buy',
    location: '',
    minPrice: 0,
    maxPrice: 0
  })

  const [indexe, setIndex] = useState(0);


  const switchType = (value, index) => {
    setQuery({...query, type: value})
    setIndex(index)
  }
   
  return (
    <Stack direction='column'>
        <ButtonGroup size='large'>
            {
                types.map((type, index) => {
                    return(
                        <Button style={{transition: 'all 0.5s ease', borderRadius:'5px 5px 0 0'}} key={index} variant={indexe === index ? 'contained': 'outlined'} 
                        type='button' color={indexe !== index ? 'warning' : 'secondary' } onClick={() => switchType(type, index)}>{type.type}</Button>
                    )
                })
            }
        </ButtonGroup>
        <Stack spacing={2} direction='row'>
            <TextField label='City' color='secondary' variant='standard' type='text' size='small' />
            <TextField label='Min price' color='secondary' variant='standard' type='number' size='small'/>
            <TextField label='Max price' color='secondary'  variant='standard' type='number' size='small' />
            <IconButton size='large' color='warning'><SearchIcon /></IconButton>
        </Stack>
    </Stack>

  )
}

export default SearchBar