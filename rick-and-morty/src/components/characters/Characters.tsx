import React, { useEffect, useState } from 'react';
import API from '../../assets/api';
import {useQuery} from 'react-query';
import { Link } from 'react-router-dom';

type CharactersProps = {

}

export const Characters: React.FC<CharactersProps> = ({}) => {
    const [characters, setCharacters] = useState<any | undefined>();
    const {data: char} = useQuery('characters',()=>fetchData('character'));

       // functions
       const fetchData =  (sufix: string) =>{
        return API.get(`/${sufix}`);
     }

    useEffect(()=>{
        if(char){
            setCharacters(char.data.results)
        }
    },[char])

    return (
        <>
            <h3>Characters:</h3>
            {characters?.map((el:any) =>{
                return <Link to={`/CharacterDetails/${el.id}`} key={el.id}>{el.name}</Link> 
            })}
        </>
    );
}