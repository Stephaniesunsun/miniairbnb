import styled from '@emotion/styled';
import {configColor} from '../../utils/color';
import { mediaQuery } from '../../utils/mediaQuery';

export const Container = styled('div')`
    width:100vw;
    margin: 0 auto auto 94px;
    display:flex;
    align-items: center;

    @media ${mediaQuery.mobile}{
        flex-direction: column;
        align-items: flex-start;
    }

`
export const Logo = styled('img')`
    margin-top:49px;
`

export const SearchBar = styled('div')`
    cursor:pointer; 
    height: 55px;
    width: 320px;
    margin: 32px 136px auto auto;
    display:flex;
    margin-right:136px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
`

export const Location = styled('div')`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:100%;
    box-shadow:0px 0px 6px rgba(0, 0, 0, 0.1);
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
`

export const Guest = styled('div')`
    display:flex;
    height:100%;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);
`

export const Button = styled('div')`
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;
    box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);
    border-left: none;
    border-top-right-radius:16px;
    border-bottom-right-radius:16px;
    display:flex;
    justify-content:center;
    align-items:center;
`  

export const Setting = styled('p')`
    text-align:center;
    font-size: 14px;
    line-height: 17.57px;
    color: ${configColor.dark};
`

export const PlaceHolder = styled('p')`
    text-align:center;
    font-size: 14px;
    line-height: 17.57px;
    color: ${configColor.lightGray};
`


