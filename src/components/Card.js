import styled from 'styled-components';

const Card = styled.div`
    background-color: ${(props) => props.bgColour ? props.bgColour : `#fff` /* specify an optional background colour */};
    padding: 20px;
    border-radius: 4px;
    min-height: 200px;
`;

export default Card;