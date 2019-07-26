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

    async updateData(val){
        await this.fetchCityData(val);
        await this.setState({
            CityName : val
        })

    }

    async fetchCityData(val){
        let result;
        let sx = val.toUpperCase();
        let s = "http://ctp-zip-api.herokuapp.com/city/"+sx;
        axios.get(s)
        .then(response =>{
            result = response.data;
            this.setState({
                data : result
            })
            this.getCityStates(result);
        })
        .catch(err => console.log(err));
    }

    async getCityStates(results)
    {
        let result = [];
        for(let i = 0; i < results.length; i++)
        {
            let sx= "http://ctp-zip-api.herokuapp.com/zip/"+results[i];

            let response = await axios.get(sx);
            let loc = response.data[0].State;
            console.log("loc", loc)
            if (!result.includes(loc)) result.push(loc);

            // axios.get(sx)
            // .then(response =>{
                // let loc = response.data[0].State;
            //     if(! result.includes(loc))
            //     {
            //         result.push(loc);
            //     }
            // })
        }
        console.log("result", result)
        await this.setState({
            CityStates : result
        })
    }

    render(){
        console.log("city states from local state", this.state.CityStates);
        return <div>
            <CityHeader></CityHeader>
            <CityInput val = {this.updateData}></CityInput>
            <CityBlocks val = {this.state.data}></CityBlocks>
            <StateBlocks val = {this.state.CityStates}></StateBlocks>
        </div>
    }
}



export default CitySearch;