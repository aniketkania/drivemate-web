import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const loginReducer=(state=initialState, action)=>{
    const { type,data,error } = action;

    switch(type)
    {
        case LOGIN_REQUEST:
          //console.warn("Sign up request");
          return {
            ...state,
            loading:true,
            error:null
          }

        case LOGIN_SUCCESS:
          //console.warn("Reducers signup");
          return {
            ...state,
            loading:false,
            data,
            error:null
          }

          case LOGIN_FAILURE:
            //console.warn("Reducers signup fail");
            return {
              ...state,
              loading:false,
              data:null,
              error
            }
            
        default:
          return state;
    }
}

export default loginReducer;
