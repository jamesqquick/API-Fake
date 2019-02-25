
import styled from "styled-components";
import { primary, secondary, gray, darkGray } from "../utilities";

export const Form = styled.form`
    width:100%;

    label {
        display:block;
        color: ${darkGray};
        margin-bottom:5px;
    }
    input,textarea {
        width:100%;
        margin: 5px 0 20px 0;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid ${gray};
    }

    input {
        height: 40px;
    }
`