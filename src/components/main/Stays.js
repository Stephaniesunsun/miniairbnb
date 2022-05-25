import React, { useState, useEffect } from 'react';
import { Stay } from './Stay';
import data from '../../data/stays.json';
import { Title, Container, StayContainer, Number, HeaderContainer } from './StaysStyle';
import { NotFound } from './NotFound';


export const Stays = ({ close, setClose, location, adult, children }) => {
    const [stays, setStays] = useState(data);

    let number = adult+ children;
    let city = location.split(', ')[0];
    let country = location.split(', ')[1];

    const filterStays = ()=>{ 
        let temp = [...data];
        temp = temp.filter(item=>{
            if(number && city && country){
                return (number<item.maxGuests || number === item.maxGuests) && item.city===city && item.country===country;
            }else if (!number && city && country){
                return item.city===city && item.country===country;
            }else if (number && !city && !country){
                return number<item.maxGuests || number === item.maxGuests;
            }else if(!number && !city && !country){
                return true;
            }
        })
        setStays(temp);
    }

    useEffect(()=>{
        filterStays();
    },[number,city,country]);

    return (
        <Container onClick={()=>setClose(true)}>
            <HeaderContainer>
                <Title>Stays in Finland</Title>
                <Number>{stays.length} stays</Number>
            </HeaderContainer>
            <StayContainer>
                {stays.length? stays.map(item=><Stay item={item} />)
                :
                <NotFound />
                }
            </StayContainer>
        </Container>
    );
};