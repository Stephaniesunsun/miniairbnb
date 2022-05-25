import React, {useState, useEffect } from 'react';
import { GrLocation } from 'react-icons/gr';
import { LocaWrapper, LocaName } from '../SearchModalStyle'; 

export const LocationRow = ({item, setInput}) => {
    const handleSelect = (e)=>{
        if(e.target.innerText){
            setInput(e.target.innerText);
        }
    }
    return( 
        <LocaWrapper onClick={(e)=>handleSelect(e)}>
            <GrLocation />
            <LocaName>{item}</LocaName>
        </LocaWrapper>
    );
};

