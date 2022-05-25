import styled from '@emotion/styled';
import {configColor} from '../../utils/color';

export const Container =styled('div')`
    width: 395px;
    height: 340px;
    margin-bottom: 49px;
`
export const Thumbnail = styled('img')`
    display:inline-block;
    width: 395px;
    height: 269px;
    border-radius: 24px;
`

export const Description = styled('div')`
    display: flex;
    jsutify-content: center;
    align-items: center;
    margin-top: 15px;
`

export const SuperContainer = styled('div')`
    border-radius: 12px;
    padding: 6px;
    border-style: solid;
    border: 1px solid ${configColor.dark};
`

export const Super = styled('p')`
    margin:0;
    padding: 0;
    font-size: 12px;
    color: ${configColor.dark};
`

export const Type = styled('p')`
    font-size:14px;
    color: ${configColor.gray};
    margin-left: 11px;
`
export const Star = styled('div')`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    gap: 7px;
`
export const Rating = styled('p')`
    font-size: 14px;
    color: ${configColor.dark};
`
export const Title = styled('p')`
    font-size: 16px;
    font-weight: 600;
    color: ${configColor.dark};
    margin-top:12px;
`

