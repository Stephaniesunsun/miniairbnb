import React from 'react';
import { Container, Thumbnail, Description, SuperContainer, Super, Type, Rating, Star, Title } from './StayStyle';
import { BsFillStarFill } from 'react-icons/bs';

export const Stay = ({item}) => {
    return (
        <Container>
            <Thumbnail src={item.photo}/>
            <Description>
                {
                    item.superHost?<SuperContainer>
                        <Super>SUPER HOST</Super>
                    </SuperContainer>:
                    <></>
                }
                {item.type?<Type>{item.type}</Type>:<></>}
                {item.beds?<Type>. {item.beds} beds</Type>:<></>}
                <Star>
                    <BsFillStarFill/>
                    <Rating>{item.rating}</Rating>
                </Star>
            </Description>
            <Title>{item.title}</Title>
        </Container>
    );
};