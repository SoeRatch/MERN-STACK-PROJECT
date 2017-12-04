import styled from 'styled-components';

const width= 170; // Change Me
const lead ='8E8E8E';


export const Form = styled.form`
display: flex;
  flex-wrap:wrap;
  justify-content:flex-end;
  padding:5px;
  margin-top:10px;
`;

export const Group = styled.div`

	box-sizing:'border-box';
	width: ${width}px;
  height: ${width/5}px;
  overflow: hidden;
  position: relative;
`;


export const Bar = styled.div`
  flex-grow:1;
  flex-basis:200px;
	
  background: #${lead};
  content: '';
  width: ${width*2.5}px;
  height: ${width/100}px;
  transition: .3s ease;
  position: relative;
  color: rgba(white, .5);

   box-shadow: 0 14px 10px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

	`;

export const Input = styled.input`
  
  width: 100%;
  padding-top: ${width/25}px;
  border: none;
  color:#${lead};

  background: #EFEFBB;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #D4D3DD, #EFEFBB);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #D4D3DD, #EFEFBB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
  font-size: ${width/12}px;
  transition: .3s ease;

  &:focus {
    outline: none;
   
}
     
   
`;


