import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import SongTable from './SongTable/SongTable';
import NavBar from './NavBar/NavBar';
import TitleBar from './TitleBar/TitleBar';
import SearchBar from './SearchBar/SearchBar';
import CreateSong from './CreateSong/CreateSong';



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

    createSong = (newSong) => {
        console.log('From createSong on App component', newSong);
        this.songs.push(newSong);
        this.setState({
            music: this.music.lenth -1 
        });
    }




    render() {

        return(
            <div className="container-fluid">
               <TitleBar/>
               <SearchBar userInput= {this.state.userInput} changeHandler={this.changeHandler}/>
               <CreateSong createSong={this.createSong}/>
               <SongTable songs={this.state.songs} userInput= {this.state.userInput}/>
               <NavBar/>

               
               
           </div>
        );      
    } 
}


export default App;