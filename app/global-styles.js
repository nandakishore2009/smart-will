import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: "Roboto", sans-serif;
  }

.buttonGlobal {
    font-size: 20px;
    border-radius: 25px;
    opacity: .9;
}

.centerAling{
  text-align: left;
  left: 50%; 
  transform: translateX(-50%);
  opacity: .95;
}


 p {
  line-height: 2rem;
}
 .icon-block {
  padding: 0 15px;
 }
 .icon-block .material-icons {
  font-size: inherit;
}

 footer.page-footer {
  margin: 0;
}



`;
