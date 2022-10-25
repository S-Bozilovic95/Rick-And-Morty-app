import React, { useEffect, useState } from 'react';
import API from '../../assets/api';
import {useQuery} from 'react-query';


export const Locations: React.FC = () => {
    const [locations, setLocations] = useState<any | undefined>();

    // functions
    const fetchData =  (sufix: string) =>{
       return API.get(`/${sufix}`);
    }

    // react query
    const {isLoading, data: local, isError, isFetching, refetch} = useQuery('locations', ()=>fetchData('location'),{enabled:false});
        
    useEffect(()=>{
        if(local){
            setLocations(local?.data.results);
        }
    },[local]);

    if(isLoading || isFetching){
        return <h2>Loading...</h2>
    }

   if(isError){
        return <h2>failed</h2>
    }

    return (
        <>
            <button onClick={()=> refetch()} >Fetch Locations</button>
            <h3>Locations:</h3>
            {locations?.map((el:any) =>{
                return <p key={el.id}>{el.name}</p> 
            })}
        </>
    );
}