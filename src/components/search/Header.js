import React, { useState, useEffect } from 'react';
import { SearchModal } from './SearchModal';
import logo from '../../statics/logo.png';
import { Container, SearchBar, Location, Guest, Button, Setting, PlaceHolder} from './HeaderStyle';
import { BsSearch } from 'react-icons/bs'

export const Header = ({ close, setClose, location, setLocation, adult, setAdult, children, setChildren }) => {
    
    return (
        <Container>
            <img src={logo} />
            <SearchBar onClick={()=>setClose(false)}>
                <Location>
                    {
                        location?
                        <Setting>{location}</Setting>:
                        <PlaceHolder> Finland </PlaceHolder>
                    }
                </Location>
                <Guest >
                    {
                        adult||children?
                        <Setting>{`${adult+children} guests`}</Setting>:
                        <PlaceHolder> Add guests </PlaceHolder>
                    }
                </Guest>
                <Button>
                    <BsSearch />
                </Button>
            </SearchBar>
            {
                !close?<SearchModal close={close} setClose={setClose} location={location} setLocation={setLocation} adult={adult} setAdult={setAdult} children={children} setChildren={setChildren}/>:<></>
            }
        </Container>
    );
};
