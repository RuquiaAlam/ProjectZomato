import React, { Component } from 'react';
import "./QuickSearch.css";
import QuickDisplay from "./QuickDisplay";
const qurl = "https://zomato-appnew.onrender.com/mealType";


class QuickSearch extends Component {
  constructor(){
    super();
    this.state={
      mealType:""

    }
  }
    render() {
        return (
           <>
           <div id="quicksearch">
    <span id="quickHeading">Quick Search</span>
    <span id="quickSubheading">Discover restaurants by type of meal</span>
  < QuickDisplay mealData = {this.state.mealType}/>
</div>
           </>
        );
    
    }
    componentDidMount()
{
    fetch(qurl,{method:"GET"})
    .then((res) => res.json()
    .then((data) => {this.setState({mealType:data})})
    )
   
}


}
    

export default QuickSearch;