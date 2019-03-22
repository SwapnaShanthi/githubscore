import React, { Component } from 'react';
import GitHubScoreResults from './GitHubScoreResults';
import GitHubScoreForm from './GitHubScoreForm';
import axios from 'axios';
import '../styles/githubscore.css'
import GitHubScoreError from './GitHubScoreError';


class GitHubScoreApp extends Component {
    constructor(props){
      super(props);
      this.state={resultdata:"",
                  error:""}
    }
    emptyResultData=()=>{
        let resultdata="";
        this.setState({ resultdata:resultdata});
        this.setState({error:""})
    }
    
    apiCall=(searchdata) =>{
         axios.get(`https://api.github.com/users/${searchdata}`)
              .then(res => {
                    const resultdata = res.data;
                    if(resultdata.Response !== "False"){
                        this.setState({ resultdata:resultdata});
                        this.setState({error:""})
                    }else{
                        this.setState({error:"User does not exist, pick a different GitHub username"});
                        this.setState({ resultdata:""});
                    }
                })
                .catch(error => {
                    this.setState({error:"User does not exist, pick a different GitHub username"});
                });
      }
     render() {

            const display=()=>{
                if(this.state.resultdata ===""){
                    return <GitHubScoreError error={this.state.error}/>
                }else{
                    return <GitHubScoreResults resultdata={this.state.resultdata} error={this.state.error} emptyResultData={this.emptyResultData}/>
                }

            }
            return (
                <div className="outerdiv">
        
                    <GitHubScoreForm apiCall={this.apiCall} emptyResultData={this.emptyResultData}/>
                    {display()}
                  </div>
            );
     }
}

export default GitHubScoreApp;
