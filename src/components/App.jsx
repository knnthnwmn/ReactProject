import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import SongTable from './SongTable/SongTable';
import NavBar from './NavBar/NavBar';
import TitleBar from './TitleBar/TitleBar';
import SearchBar from './SearchBar/SearchBar';



class App extends Component {

    constructor(props) {
        super(props)
        this.changeHandler= this.changeHandler.bind(this)
        this.state = {
        userInput: "",
            songs: [],
        }
    }

    
    async componentDidMount() {
        let response = await axios.get('http://localhost:8000/api/songs')
        this.setState({
            songs: response.data
        })
    }

    changeHandler(event) {
        console.log(event)
        this.setState(
            {userInput: event.target.value}
        )
    }

  




    render() {

        return(
            <div className="container-fluid">
               <TitleBar/>
               <SearchBar userInput= {this.state.userInput} changeHandler={this.changeHandler}/> 
               <SongTable songs={this.state.songs} userInput= {this.state.userInput}/>
               <NavBar/>
               
               
           </div>
        );      
    } 
}


export default App;