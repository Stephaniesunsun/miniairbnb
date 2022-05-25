import styled from '@emotion/styled';
import {configColor} from '../../utils/color';
import { mediaQuery } from '../../utils/mediaQuery';

export const Container = styled('div')`
    margin: 85px auto auto 91px;
`
export const HeaderContainer = styled('div')`
    display:flex;
    align-items: center;
    margin-bottom: 32px;
`
export const Number = styled('p')`
    font-size: 14px;
    font-weight: 500;
    margin: 0 99px 0 auto;
`
export const Title = styled('p')`
    color: ${configColor.dark};
    font-size: 24px;
    font-weight: 700;
`
export const StayContainer = styled('div')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    @media ${mediaQuery.tablet}{
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${mediaQuery.mobile}{
        grid-template-columns: repeat(1, 1fr);
    }
`