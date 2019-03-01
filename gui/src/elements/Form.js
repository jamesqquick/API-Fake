
import styled from "styled-components";
import { primary, darkGray } from "../utilities";

export const Form = styled.form`
    width:100%;
    max-width:600px;
    margin: 0 auto;
    text-align:left;

    .title {
        color: ${primary};
        font-weight: 500;
    }

    .subtitle {
        margin-top: -20px;
        margin-bottom: 40px;
    }
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
        border: 1px solid #ccc;
    }

    input {
        height: 40px;
    }

    textarea {
        resize: vertical;
    }
    button[type="submit"]{
        width:100%;
    }
`