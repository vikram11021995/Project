import React  from 'react';
import Info from './info';

import {useParams} from 'react-router-dom';

const Billing =() =>{
const{userid} = useParams();

return(
    <Info
        userid={userid}
    />
)
           
}
export default Billing;