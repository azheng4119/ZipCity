import React from 'react'
import './CitySearch.css'
import CityBlocks from './CityBlocks'
import axios from 'axios'

class CityHeader extends React.Component{
    render(){
        return(
            <h1>Text</h1>
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
        return <div id = 'cityInput'><span>City Name: </span>
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
            data : []
        }
        this.updateData = this.updateData.bind(this);
        this.fetchCityData = this.fetchCityData.bind(this);
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
        })
        .catch(err => console.log(err));
    }

    render(){
        return <div>
            <CityHeader></CityHeader>
            <CityInput val = {this.updateData}></CityInput>
            <CityBlocks val = {this.state.data}></CityBlocks>
        </div>
    }
}



export default CitySearch;