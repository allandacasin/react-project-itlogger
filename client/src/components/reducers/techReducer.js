import { ADD_TECH, GET_TECHS, DELETE_TECH, TECHS_ERROR } from "../../actions/types";


const initialState = {
  techs: null,
  loading: false,
  error: null

}

export default (state = initialState, action) => {
  switch(action.type) {

    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
      }

    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
      }


    case DELETE_TECH:
        return {
          ...state,
          techs: state.techs.filter(tech => tech._id !== action.payload),

        }

    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }

}