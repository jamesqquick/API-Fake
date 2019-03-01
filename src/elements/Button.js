
import styled from "styled-components";
import { primary, secondary } from "../utilities";

export const Button = styled.button`

    height: 40px;
    border: none;
    background-color: ${primary};
    color: white;
    padding: 10px 20px;
    border-radius: 3px;
    font-size: 16px;

    &:hover {
        cursor: pointer;
        transform: scale(1.02);
        background-color: ${secondary}
    }
`

export const LinkButton = styled.a`

    height: 40px;
    border: none;
    background-color: ${primary};
    color: white;
    padding: 10px 20px;
    border-radius: 3px;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        transform: scale(1.02);
        background-color: ${secondary};
    }
  `