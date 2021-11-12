import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import SongTable from './SongTable/SongTable';
import NavBar from './NavBar/NavBar';
import TitleBar from './TitleBar/Titlebar';



class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            songs: [],
        }
    }

    
    async componentDidMount() {
        let response = await axios.get('http://localhost:8000/api/songs')
        this.setState ({
            songs: response.data
        })
    }



    render() {

        return(
            <div className="container-fluid">
               <SongTable songs={this.state.songs}/>
               <NavBar/>
               
           </div>
        );      
    } 
}


export default App;