import styled from '@emotion/styled';
import {configColor} from '../../utils/color';
import { mediaQuery } from '../../utils/mediaQuery';

export const Container = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    height: 460px;
    width: 100%;
    background-color: white;
    
    @media ${mediaQuery.mobile}{
        height: 500px;
    }
`
export const SubContainer = styled('div')`
    margin-top: 93px;

    @media ${mediaQuery.mobile}{
        margin-top: 49px;
    }
`

export const Fields = styled('div')`    
    height: 50px;
    width: 1248px;
    margin: 0 auto 41px auto;
    display: flex;
    align-items: center;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;

    @media ${mediaQuery.mobile}{
        flex-direction: column;
        width: 351px;
        height: 113px;
    }
`
export const Wrapper = styled('div')`
    display:flex;
    flex-direction: column;

`
export const Location = styled('div')`
    margin:0;
    height:100%;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    width: 420px;   
    display:flex;
    flex-direction: column;
    justify-content:flex-start;

    @media ${mediaQuery.mobile}{
        width: 351px;
    }
`
export const Guest = styled('div')`
    height:100%;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    width: 420px;
    display:flex;
    flex-direction: column;

    @media ${mediaQuery.mobile}{
        width: 351px;
    }
`

export const Search = styled('div')`
    width: 126px;
    height: 48px;
    border-radius: 16px;
    background-color: ${configColor.red};
    margin:0 auto;
    display: flex;
    justify-content:center;
    align-items:center;
    gap:11px;
    cursor: pointer;

    @media ${mediaQuery.mobile}{
       position:absolute;
       top:430px;
    }
`
export const SearchButton = styled('p')`
    font-family: 'Mulish', sans-serif;
    color: white;
    font-size: 14px;
    font-weight: 700;
`

export const SearchIcon = styled('div')`
    width: 17px;
    height: 17px;
    color: white;
`

export const Title = styled('p')`
    font-family: 'Mulish', sans-serif;
    display:inline-block;
    margin-top:10px;
    margin-left:26px;
    font-size: 9px;
    font-weight: 800;
    color: ${configColor.dark};
`

export const Selection = styled('input')`
    font-family: 'Mulish', sans-serif;
    border:none;
    width:40%;
    font-size: 14px;
    font-weight: 400;
    color: ${configColor.dark};
    margin: 0 0 10px 23px;
    outline: none;
`    
export const LocaWrapper = styled('div')`
    display: flex;
    align-items: center;
    gap:10px;
    margin:0 0 36px 123px;
`
export const LocaName = styled('p')`
    font-size: 14px;
    color: ${configColor.dark};
    cursor: pointer;
`

