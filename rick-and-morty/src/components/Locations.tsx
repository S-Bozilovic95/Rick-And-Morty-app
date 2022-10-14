import React, { useEffect, useState } from 'react';
import API from '../assets/api';
import {useQuery} from 'react-query';

type LocationsProps = {

}

export const Locations: React.FC<LocationsProps> = ({}) => {
    const [locations, setLocations] = useState<any>();
    
    const getLocation =  () =>{
       return API.get('/location');
    }

    const {isLoading, data, isError, isFetching, refetch} = useQuery(
        ['locations'], 
        getLocation, 
        {
            // cacheTime:5000, default je 5 min posle ga brise is cache

            // staleTime: 30000, ne salje nove zahteve npr 30sec, ako smo sigurni da se podaci nece menjati neko vreme
            // da ne bismo slali zahteve stalno, izbegavamo refetch

            // refetchOnMount: false, prima boolean ili 'always' odradi refetch svaki put kad komp. mountuje
            
            // refetchOnWindowFocus:'always', updatuje podatke ako dodje do promene bez obzira sto tab nije otvoren
    
            // refetchInterval: 3000, odradi refetch na svakih 3sec dok je tab u fokusu, ako zelimo da sync podatke sa bazom nezavisno od interakcije usera

            // refetchIntervalInBackground: 3000, radi isto sto i refetchInterval samo nije potrebno da tab bude otvoren 

            // enabled sprecava da se upucuju pozivi ka bazi, po defaultu je true, 
            // ako zelimo da na neki specifican event trigerujemo fetch onda prvo moramo da postavimo enalbed na false
            enabled: false,
        }
    );
        

    if(isLoading || isFetching){
        return <h2>Loading...</h2>
    }

   if(isError){
        return <h2>failed</h2>
    }

    return (
        <>
            <button onClick={()=> refetch()} >Fetch Locations</button>
            {data?.data.results.map((loc:any) =>{
                return <h2 key={loc.id}>{loc.name}</h2> 
            })}
        </>
    );
}