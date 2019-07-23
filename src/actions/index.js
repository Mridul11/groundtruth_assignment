import axios from 'axios';

const Types = {
    CALLING_API : "CALLING_API" 
}

function makeApiCall(val){
    return {
            type : "CALLING_API",
            payload : val
    }
}

function makingAsyncCall(){
    return function(dispatch){
           return axios.get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
            .then( res => dispatch( makeApiCall(res) ))
            .catch(err => console.log(err))
    }
}

export {
    makingAsyncCall,
    Types
}