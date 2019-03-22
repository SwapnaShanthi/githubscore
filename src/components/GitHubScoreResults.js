import React, { Component } from 'react';

import '../styles/githubscore.css'


class GitHubScoreResults extends Component {
  constructor(props){
      super(props);

  }
  displayScrore =()=>{
    console.log(this.props.resultdata.public_repos);
    let score=this.props.resultdata.public_repos+this.props.resultdata.followers;
    return score;
  } 
  render() {
    const getMessage =()=>{
           let score=this.displayScrore();
           if(score<20){
             return "Needs Work!";
           }else if(score<50){
             return "A decent Start!"
           }else if(score<100){
            return "Doing Good!"
           }else if(score <200){
            return "Great Job!"
           }else if (score>=200){
            return "GitHub Elite!"
           }
    } 

    return (
        <div className="resultouterdiv" >
            <span className="resultdata">Your Score :{this.displayScrore()}</span>
            <span className="messagespan">{getMessage()}</span>
        </div>
    );
  }
}

export default GitHubScoreResults;