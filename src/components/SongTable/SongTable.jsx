import React from 'react';
import './SongTable.css'




function SongTable(props){
    
    
    
    
    return (
       
        <ul>
            {props.songs.map((song,index) =>
           props.userInput === song.artist||
           props.userInput === song.album||
           props.userInput === song.genre||
           props.userInput === song.releaseDate||
           props.userInput === song.title?<li className= "fontcolor"  key= {index}> {song.title} by {song.artist}</li>:null
            )}     
        
        </ul>   


    );

}

export default SongTable;