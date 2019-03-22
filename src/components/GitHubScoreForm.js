import React, { Component } from 'react';

import '../styles/githubscore.css'



class GitHubScoreForm extends Component {

  constructor(props){
   super(props);
   this.state={search:""}
  }

  handleChange=(e)=>{
      this.setState({[e.target.name]:e.target.value});
      if(e.target.name==="search" && e.target.value===""){
        this.props.emptyResultData();
       }
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    if(this.state.search!== ""){
        this.props.emptyResultData();
        this.props.apiCall(this.state.search);
    }

  }
  render() {
     const displaybutton=()=>{

        if(this.state.search===""){
            return <input className="disable" type="submit" value="Calculate my Github Score" disabled/>
        }else{
            return <input className="buttonstyle" type="submit" value="Calculate my Github Score"/>
        }
     } 
    return (
        <div className="outerformdiv" > 
        <h1>GitHub Score</h1>
        <form  onSubmit={this.handleSubmit}>
           <div>
               <div>
                    <label className="textstyle">GitHub Username:</label>
                    <input className="textstyle" type="text" name="search" onChange={this.handleChange} value={this.state.search} />
                </div>

                <div>{displaybutton()}</div>
            </div>    
        </form>
        </div>
    );
  }
}

export default GitHubScoreForm;