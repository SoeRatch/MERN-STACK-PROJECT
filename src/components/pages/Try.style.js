import styled from 'styled-components';

 export const FormContainer = styled.div`
   font-family: 'Open Sans Condensed', sans-serif;
  color:#464646;
  transition: all 1.0s linear;
  overflow:hidden !important; box-sizing:border-box; 
 bottom:90%;

 `;

 export const FormMain = styled.div`

  .login {
    background:#fff;
    box-shadow: 0 0 20px 2px #464646;
    z-index:2;
    height:260px; 
    width:300px;
    padding:20px;

  }
  .register {

    background:#fff;
    height:440px; 
    width:300px;
    padding:20px;
    box-shadow: 0 0 20px 2px #464646;
    z-index:2;
  }
.form-toggle {
  float:right;
  color:#00B3A0;
  font-size:14px;
  line-height:24px;
}
.form-toggle:hover {
  cursor:pointer;
}
`;

 