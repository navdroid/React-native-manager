import React,{Component} from 'react';
import {ListView,View} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';
import _ from 'lodash';

class EmployeeList extends Component{
  componentWillMount(){
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps){
    //nextProps are new set of props
    //thi.props is still old props
    this.createDataSource(nextProps);

  }

  createDataSource({employees}){
    const ds =new ListView.DataSource({
      rowHasChanged :(r1,r2) => r1!==r2
    });

    this.dataSource=ds.cloneWithRows(employees);

  }

  renderRow(employee){
    return <ListItem employee={employee} />;
  }

  render(){

    return(
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {

  const employees = _.map( state.employees, (val, uid) => {
     return {...val,uid }; // {shift :'Monday', name:'S', id:'1231ad'};
  });

  return {employees};

};

export default connect(mapStateToProps,{employeesFetch})(EmployeeList);
