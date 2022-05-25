import React, { useState, useEffect } from 'react';
import { Container, SubContainer, Fields, Location, Guest, Search, Title, Selection, Wrapper, SearchButton, SearchIcon } from './SearchModalStyle';
import { LOCATIONS } from '../../utils/constants';
import { LocationRow } from './modal/LocationRow';
import { AddguestsModal } from './modal/AddguestsModal';
import { BiSearch } from 'react-icons/bi';

export const SearchModal = ({ close, setClose, location, setLocation, adult, setAdult, children, setChildren } ) => {
    const [result, setResult] = useState(LOCATIONS);
    const [input, setInput] = useState(location); 
    const [adultNumber, setAdultNumber] = useState(adult); 
    const [childrenNumber, setChildrenNumber] = useState(children); 
    const [current, setCurrent] = useState('');

    const handleChange=(e)=>{
        setInput(e.target.value);
    }

    const handleSubmit=()=>{
        setLocation(input);
        setAdult(adultNumber);
        setChildren(childrenNumber);
        setClose(true);
    }

    useEffect(()=>{
        let filtered = [...LOCATIONS];
        filtered = filtered.filter(item=>{
            if(item.toLowerCase().includes(input.toLowerCase())) return true;
        })
        setResult(filtered);
    },[input]);

    return (
        <Container>
            <SubContainer>
                <Fields>
                    <Location onClick={()=>setCurrent('location')}>
                        <Title>LOCATION</Title>
                        <Selection value={input} placeholder='Select location' onChange={(e)=>handleChange(e)}/>
                    </Location>
                    <Guest onClick={()=>setCurrent('guest')}>
                        <Title>GUESTS</Title>
                        <Selection value={adultNumber+childrenNumber?`${adultNumber+childrenNumber} guests`:null} placeholder='Add guests'/>
                    </Guest>
                    <Search onClick={()=>handleSubmit()}>
                        <SearchButton><BiSearch /></SearchButton>
                        <SearchButton>Search</SearchButton>
                    </Search>
                </Fields>
                {current==='location' && result.map(item=><LocationRow item={item} setInput={setInput}/>)}
                {current==='guest' && <AddguestsModal adultNumber={adultNumber} setAdultNumber={setAdultNumber} childrenNumber={childrenNumber} setChildrenNumber={setChildrenNumber}/>}
            </SubContainer>
        </Container>
    );
};
