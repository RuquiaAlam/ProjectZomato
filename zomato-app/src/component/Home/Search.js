import React, { Component } from 'react';
import "./Search.css";
const lurl = "https://zomato-appnew.onrender.com/locations"
const rurl = "https://zomato-appnew.onrender.com/zomato"
class Search extends Component {
    constructor(){
        super();
        this.state={
            location:"",
            restaurants:""
        };
    }
    renderCity = (data) =>
    {
      
        
            if(data)
            {
                return data.map((item) =>
                {
            return(
                <option key ={item._id} value ={item.state_id}>{item.state} </option>

               
            )
        })
    }

    };
    renderRestaurant = (data) =>
    {
      
        
            if(data)
            {
                return data.map((item) =>
                {
            return(
                <option key ={item._id} value ={item.restaurant_id}>{item.restaurant_name} </option>

               
            )
        })
    }

    };
    
    render() {
        return (
        <>      <div id="search">
       
    
        <div id="logo">
           <span>e!</span>
        </div>
       <div id="text-style">
        <p>Find the best restaurants, cafés, and bars in India</p>
    </div>
    <div id="dropdown">
        <select>
           <option>----SELECT CITY---- </option>
       {this.renderCity(this.state.location)}
        </select>
    
        <select id="select-style">
         
            <option>----------SELECT RESTAURANTS----------</option>
        
            {this.renderRestaurant(this.state.restaurants)}
         </select>
       
        
    </div>
    </div></>
      


        );
    }
    //api calling on pageload
componentDidMount()
{
    fetch(lurl,{method:"GET"})
    .then((res) => res.json()
    .then((data) => {this.setState({location:data})})
    )
    fetch(rurl,{method:"GET"})
    .then((res) => res.json()
    .then((data) => {this.setState({restaurants:data})})
    )
}


}
export default Search;