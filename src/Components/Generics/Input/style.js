import styled from 'styled-components';

const getStyle =({type})=>{
    switch(type){
        case 'dark':
            return{
    background:'transparent',
    border:"1px solid white",
    color:'white',
}
    case 'light' :
        return{
            background:'#fff',
            border:"1px solid #E6E9EC",
            color:'#0D263B',  
        } 
    case 'primary' :
    return{
        background:'#0061DF',
        border:"none",
        color:'white',  
    } 
    default :return{
        background:'#0061DF',
        border:"none",
        color:'white', 
    }
    }
}

export const Container = styled.input`
display: flex;
justify-content: center;
align-items: center;
min-width:120px;

font-size:${({font})=>font?`${font}px`:'14px'} ;
height: ${({h})=>h?`${h}px`:'44px'};
width: ${({w})=>w?`${w}px`:'100%'};
border:1px solid  #e6e9ec;
border-radius:2px;
outline:none;
padding-left:${({icon})=>icon?"40px":'20px'};
/* ${getStyle} */

`;

export const Wrapper = styled.div`
display: flex;
align-items: center;
position: relative;
width: ${({w})=>w?`${w}px`:'100%'}; 
position: relative;
`
export const Icon = styled.div`
  position: absolute;
  left: 10px;
`;