import {
  EMPLOYEE_UPDATE
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


    default:
      return state;
  }
}
