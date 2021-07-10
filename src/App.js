import axios from 'axios';
import './App.css';
import React from 'react';


export const getUserDetail = (id) =>{
  return axios.get(`/user/${id}/`)
  .then(response =>{
      return response.data;
  })
  .catch(err=>console.log(err))
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      error:false,
    }
  }

  componentDidMount(){
    this.loadAllUser();
  }

  loadAllUser(){
    getUserDetail(1)
    .then(data =>{
        if(data.error){
          this.setState({error:data.error})
        }else{
          this.setState({data:data})
          console.log(this.state.data);
        }
    }).catch(err =>console.log(err))
  };

  render(){
    return (
      <div>
        <p>{this.state.data.name}</p>
        <p>{this.state.data.username}</p>
        <p>{this.state.data.email}</p>
      </div>
    );
  }
}

export default App;
