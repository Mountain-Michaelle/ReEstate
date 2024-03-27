import React, {useState} from 'react'
import TextField from '@mui/material/TextField'
import {Stack, Box, FormControl, FormLabel, FormGroup, FormHelperText, IconButton, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../../Assets/CSS/Filter.scss';
function Filter() {
    const [data, setData] = useState({
        city: 'city',
        type: ['rent', 'buy'],
        property: '',
    })

    const handleChange = (e) => {
        setData(e.target.value)
    }

    const {city, type, property} = data;

  return (
    <div className='filter'>
        <Stack sx={{width:'95%'}} direction='column' size='small'>
            <TextField
              label="City"
              variant="outlined"
              value={city}
              onChange={handleChange}
              size='small'
              color='warning'
            />

            <Stack spacing={2}>
                <FormControl component="fieldset">
                  <FormGroup row width={1} >
                        <TextField
                        label="Type"
                        variant="outlined"
                        value={city}
                        onChange={handleChange}
                        size='small'
                        color='warning'
                        /> 
                            <TextField
                        label="Property"
                        variant="outlined"
                        value={city}
                        onChange={handleChange}
                        size='small'
                        color='warning'
                        /> 
                            <TextField
                        label="Min Price"
                        variant="outlined"
                        value={city}
                        onChange={handleChange}
                        size='small'
                        color='warning'
                        /> 

                        <TextField
                        label="Max Price"
                        variant="outlined"
                        value={city}
                        onChange={handleChange}
                        size='small'
                        color='warning'
                        /> 
                          <TextField
                        label="Bed Room"
                        variant="outlined"
                        value={city}
                        onChange={handleChange}
                        size='small'
                        color='warning'
                        />

                        <Button aria-label="submit" variant='contained' color='warning' size='medium' >
                            <SearchIcon size='small' />
                        </Button> 
                  </FormGroup>
                </FormControl>
            </Stack>
        </Stack>
    </div>
  )
}

export default Filter