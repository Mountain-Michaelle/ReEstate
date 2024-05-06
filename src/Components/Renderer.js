import React from 'react';
import { useParams} from 'react-router-dom';
import NotFound from './RouteComp/NotFound';


const generatePage = page => {
    const component = () => require(`./Body/${page}`).default;
    try{
      return React.createElement(component())  
    }
    catch(error){
        console.warn(error)
        return React.createElement(() => <NotFound />)
    }
}
export default function Renderer() {
    const {page} = useParams();
    return generatePage(page)
}