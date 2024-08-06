import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 font-family: "Roboto", sans-serif;
}

::-webkit-scrollbar {
  width: .5rem; 
}

::-webkit-scrollbar-track {
  background: #000000;
}

::-webkit-scrollbar-thumb {
  background: #FFFFFF; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

:root{
 font-size: 62.5%;
}

a {
 text-decoration: none;
}
`