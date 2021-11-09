import React, { Component } from 'react';

function SongTable(props) {

    
            return(
                <div>
                    <ul>
                        {props.music.map((song, index)=>
                            <li className= 'Font' key= {index}>{song.title} by {song.artist}</li>
                        )}
                    </ul>
                </div>
           );      
     

}

export default SongTable;