import React,{Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import { employeeUpdate,employeeCreate } from '../actions'
import {Card,CardSection,Button} from './common';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component{


  onEmployeeCreate()
  {
      const {name,phone,shift} = this.props;
      this.props.employeeCreate({name,phone,shift});
  }

  render(){
    //forward all props to EmployeeForm
      // <EmployeeForm  {...this.props}/>
    return (
      <Card>
        <EmployeeForm  {...this.props}/>
        <CardSection>
          <Button onPress={this.onEmployeeCreate.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}



const mapStateToProps=(state) =>{
  const{name,phone,shift} = state.employeeForm;

  return {name,phone,shift};

};

export default connect(mapStateToProps,{employeeUpdate,employeeCreate})(EmployeeCreate);
