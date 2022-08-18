import styled from 'styled-components';

const Button = styled.button`
    color: #fff;
    background-color: ${ (props) => props.colour ? props.colour : 'lightblue' /* specify a colour, otherwise use the default */};
    border: 0;
    border-radius: 4px;
`;

export default Button;