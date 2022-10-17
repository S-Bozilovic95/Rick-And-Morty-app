import React, { useEffect, useState } from 'react';
import API from '../assets/api';
import {useQuery} from 'react-query';
import { Link } from 'react-router-dom';


export const Locations: React.FC = ({}) => {
    const [locations, setLocations] = useState<any | undefined>();
    const [characters, setCharacters] = useState<any | undefined>();

    // functions
    const fetchData =  (sufix: string) =>{
       return API.get(`/${sufix}`);
    }



    // react query
    const {isLoading, data: local, isError, isFetching, refetch} = useQuery('locations', ()=>fetchData('location'),{enabled:false});

   const {data: char} = useQuery('characters',()=>fetchData('character'));
        
    useEffect(()=>{
        if(local){
            setLocations(local?.data.results);
        }

        if(char){
            setCharacters(char.data.results)
        }
    },[local, char]);


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

            <h3>Characters:</h3>
            {characters?.map((el:any) =>{
                return <Link to={`/CharacterDetails/${el.id}`} key={el.id}>{el.name}</Link> 
            })}
        </>
    );
}