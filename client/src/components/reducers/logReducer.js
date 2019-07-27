import { SET_LOADING, LOGS_ERROR, GET_LOGS, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS } from "../../actions/types";


const initialState = {

  logs: null,
  current: null,
  search: null,
  loading: false,
  error: null

}

export default (state = initialState, action) => {
  switch(action.type) {

    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      }

    case GET_LOGS:
        return {
          ...state,
          logs: action.payload,
          loading: false
        }

    case SEARCH_LOGS:
      return {
        ...state,
        search: state.logs.filter(log => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return log.tech.match(regex) || log._id.match(regex) || log.message.match(regex) ;
        })
      }
  


    case UPDATE_LOG:
        return {
          ...state,
          logs: state.logs.map(log => log._id === action.payload._id ? action.payload : log),
          loading: false
        }

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }

    case CLEAR_CURRENT:
        return {
          ...state,
          current: null
        }

    case DELETE_LOG:
        return {
          ...state,
          logs: state.logs.filter(log => log._id !== action.payload),
          loading: false
        }

    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      }
      
    default:
      return state;
  }

}