import React from "react";
import '../../Assets/CSS/Pagination.scss';
import { Button, ButtonGroup, Stack } from "@mui/material";


const Pagination = ({active, visitPage, count, previous, next, itemsPerPage}) => {
    const getNumbers = () => {
        let numbers = [];
        let itemPerPage = itemsPerPage;
        let pageNumber = 1;

        for (let i=0; i < count; i += itemPerPage){
            const page = pageNumber;
            let style = 'pagination_number';
            let content = null

            if(active === page){
                style = 'pagination_number pagination_number--active';
                content = (
                    <div key={i} className={style}>
                        {pageNumber}
                    </div>
                )
            }
            else{
                content = (
                    <div key={i} onClick={() => visitPage(page) } className={style}>
                        {pageNumber }
                    </div>
                )
            }

            numbers.push(
                content
            );
            pageNumber++

        }

        return numbers;
    }

    return(
        <div className="paginaton">
            <div className="wrap">
                <Stack direction='row'>
                    <ButtonGroup>
                    <Button onClick={() => previous()} color='warning'>Previous</Button> 
                    <Button>{getNumbers()}</Button> 
                    <Button  onClick={() => next()}>Next</Button>
                    </ButtonGroup>
                </Stack> 
            </div>
        </div>
    )
}

export default Pagination;