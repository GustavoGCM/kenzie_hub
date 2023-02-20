import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;

        --succes: #3FE864;
        --negative: #E83F5B;

        --title-1: 1.125rem;
        --title-2: 1rem;
        --title-3: .875rem;
        --headline: .75rem;
        
        --bold: 600;

        --radius-default: 4px;
    }

    @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
    body{
        font-family: 'Inter', sans-serif;
    }
`;
