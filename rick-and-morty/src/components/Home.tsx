import React, { useEffect, useState } from 'react';
import API from '../assets/api';
import {useQuery} from 'react-query';

type HomeProps = {

}

export const Home: React.FC<HomeProps> = ({}) => {
    const [locations, setLocations] = useState<any>();
    
    const getLocation =  () =>{
       return API.get('/location');
    }

    const {isLoading, data, isError} = useQuery('locations', getLocation);


    if(isLoading){
        return <h2>Loading...</h2>
    }

   if(isError){
        return <h2>failed</h2>
   }
    

    return (
        <>
              {data?.data.results.map((loc:any) =>{
            return <h2 key={loc.id}>{loc.name}</h2> 
        })}
        </>
    );
}