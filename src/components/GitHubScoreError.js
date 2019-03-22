import React, { Component } from 'react';

import '../styles/githubscore.css'



class GitHubScoreError extends Component {

  constructor(props){
   super(props);
  }

  render() {
      
    
    return (
        <div className="errorouterdiv"> 

        <span className="errorspan">{this.props.error}</span>
        </div>
    );
  }
}

export default GitHubScoreError;