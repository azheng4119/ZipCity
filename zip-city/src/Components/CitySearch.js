import React from 'react'
import './CitySearch.css'
import CityBlocks from './CityBlocks'
import axios from 'axios'
import StateBlocks from './StateBlocks';

class CityHeader extends React.Component{
    render(){
        return(
            <h1>City Search</h1>
        )
    }
}

class CityInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            CityName : ''
        }
        this.updateName = this.updateName.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    updateName(event){
        this.setState({
            CityName : event.target.value
        })
    }
    fetchData(){
        this.props.val(this.state.CityName);
    }
    render(){
        return <div id = 'cityInput'><span>City Name:</span>
            <input onChange = {this.updateName}></input>
            <button onClick = {this.fetchData}>Enter</button>
        </div>
    }
}


class CitySearch extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            CityName : '',
            data : [],
            CityStates : []
        }
        this.updateData = this.updateData.bind(this);
        this.fetchCityData = this.fetchCityData.bind(this);
        this.getCityStates = this.getCityStates.bind(this);
    }

    updateData(val){
        this.fetchCityData(val);
        this.setState({
            CityName : val
        })

    }

    async fetchCityData(val){
        let sx = val.toUpperCase();
        let s = "http://ctp-zip-api.herokuapp.com/city/"+sx;
        axios.get(s)
        .then(response =>{
            let result = response.data;
            this.setState({
                data : result
            })
            this.getCityStates();
        })
        .catch(err => console.log(err));
    }

    async getCityStates()
    {
        let result = [];
        for(let i = 0; i < this.state.data.length; i++)
        {
            let sx= "http://ctp-zip-api.herokuapp.com/zip/"+this.state.data[i];
            axios.get(sx)
            .then(response =>{
                let loc = response.data[0].State;
                if(! result.includes(loc))
                {
                    result.push(loc);
                }
            })
        }
        this.setState({
            CityStates : result
        })
    }

    render(){
        console.log(this.state.CityStates);
        return <div>
            <CityHeader></CityHeader>
            <CityInput val = {this.updateData}></CityInput>
            <CityBlocks val = {this.state.data}></CityBlocks>
            <CityBlocks val = {this.state.CityStates}></CityBlocks>
        </div>
    }
}



export default CitySearch;