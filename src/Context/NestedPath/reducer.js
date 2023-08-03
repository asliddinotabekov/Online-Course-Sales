export const reducer =(state,{type,payload})=>{
    switch(type){
        case 'step_first' : return payload;
        default: return state
    }
}