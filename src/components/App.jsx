import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import NavBar from './NavBar/NavBar';
import SongTable from './SongTable/SongTable';
import SearchBar from './SearchBar/SearchBar';


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            songs: [],
        }
    }

    
    async componentDidMount() {
        let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music')
        this.setState ({
            songs: response.data
        })
    }



    render() {

        return(
            <div>
               
            </div>
        );      
    } 
}


export default App;