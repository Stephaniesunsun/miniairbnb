import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {configColor} from '../../../utils/color';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export const AddguestsModal = ({adultNumber, setAdultNumber, childrenNumber, setChildrenNumber }) => {
    return (
        <Container>
            <Wrapper>
                <Type>Adults</Type>
                <Description>Ages 13 or above</Description>
                <SelectWrapper>
                    <Button disabled={adultNumber===0} onClick={()=>setAdultNumber(adultNumber-1)}><AiOutlineMinus /></Button>
                    <Number>{adultNumber}</Number>
                    <Button disabled={adultNumber>20} onClick={()=>setAdultNumber(adultNumber+1)}><AiOutlinePlus /></Button>
                </SelectWrapper>
            </Wrapper>
            <Wrapper>
                <Type>Children</Type>
                <Description>Ages 2-12</Description>
                <SelectWrapper>
                    <Button disabled={childrenNumber===0} onClick={()=>childrenNumber>-1 && setChildrenNumber(childrenNumber-1)}><AiOutlineMinus /></Button>
                    <Number>{childrenNumber}</Number>
                    <Button disabled={childrenNumber>20} onClick={()=>childrenNumber>-1 && setChildrenNumber(childrenNumber+1)}><AiOutlinePlus /></Button>
                </SelectWrapper>
            </Wrapper>
        </Container>
    );
};

const Container = styled('div')`
    margin-left: 35vw;
    display: flex;
    flex-direction: column;
`
const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap:10px;
    margin-bottom:52px;
`
const Type = styled('p')`
    margin:0;
    font-size: 14px;
    font-weight: 400;
    color:${configColor.dark};
`
const Description = styled('p')`
    margin:0;   
    font-size: 14px;
    color:${configColor.lightGray};
`
const SelectWrapper = styled('div')`
    margin:0;  
    display: flex;
    align-items: center;
    gap:15px;
`
const Number = styled('p')`
    font-size:14px;
    font-weight:700;
    color:${configColor.dark};
`
const Button = styled('button')`
    width: 23px;
    height: 23px;
    display: flex;
    justify-content: center;
    align-items:center;
    border: 1px solid ${configColor.gray};
    border-radius: 4px;
    cursor: pointer;
    background-color: white;
`
