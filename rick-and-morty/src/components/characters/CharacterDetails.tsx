import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../../assets/api';


export const CharacterDetails: React.FC = ({}) => {
    const [character, setCharacter] = useState<any | undefined>();
    const {charID} = useParams();
    const navigate = useNavigate();

    const fetchData =  (sufix: string) =>{
        return API.get(`/${sufix}`);
    }

    const handleBack = () =>{
        navigate("/Characters");
    }

    const {data} = useQuery('charDetails',()=>fetchData(`character/${charID}`));

    // useEffect(()=>{
    //     if(data){
    //         setCharacter(data?.data)
    //     }
    // },[data])
    
console.log(data?.data);

    return (
        <>
            <div>
                <img src={data?.data.image}/>
                <h4>{data?.data.name}</h4>
                <p>{data?.data.species}</p>

            </div>

            <button onClick={()=>handleBack()}>Back</button>
        </>
    );
}