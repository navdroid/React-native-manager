import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
}
from '../actions/types';

const INITIAL_STATE={
  name:'',
  phone:'',
  shift:''
};

export default (state =INITIAL_STATE, action) =>{
  switch(action.type){

    case EMPLOYEE_UPDATE:
      //action.payload==={prop:'name',value :'jane'}
      //Key interplotation- the following lines could be simplified as line under that
      //const newstate={};
      // newstate[action.payload.prop]= action.payload.value;
      return {...state,[action.payload.prop]: action.payload.value};
    case EMPLOYEE_CREATE:

      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
}
