import React, {useState} from 'react';
import plantArray from '../components/plants.js'

export default function DataBaseApp() {

    const[chosenFilters, setChosenFilters] = useState([]);

    
    console.log(chosenFilters)


    return(

    <div>


    <div> 
        
        {chosenFilters.includes('red') ? (
                
                <button onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'red'))}>red</button>
                            ) : (<button onClick={() =>
                                setChosenFilters([...chosenFilters, 'red'])
                            }>red</button>
                        )}
        {chosenFilters.includes('orange') ? (
                
                <button onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'orange'))}>orange</button>
                            ) : (<button onClick={() =>
                                setChosenFilters([...chosenFilters, 'orange'])
                            }>orange</button>
                        )}
        {chosenFilters.includes('yellow') ? (
                
                <button onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'yellow'))}>yellow</button>
                            ) : (<button onClick={() =>
                                setChosenFilters([...chosenFilters, 'yellow'])
                            }>yellow</button>
                        )}

        {chosenFilters.includes('stem') ? (
                
                <button onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'stem'))}>stem</button>
                            ) : (<button onClick={() =>
                                setChosenFilters([...chosenFilters, 'stem'])
                            }>stem</button>
                        )}

        {chosenFilters.includes('branchy') ? (
                
                <button onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'branchy'))}>branchy</button>
                            ) : (<button onClick={() =>
                                setChosenFilters([...chosenFilters, 'branchy'])
                            }>branchy</button>
                        )}
                        
    </div>
    
    this is the filtered list. Click the buttons!

       
    {plantArray.filter(plant => {
      return plant.color.includes(chosenFilters) && plant.growth.includes(chosenFilters)})
      .map((d, i) => {
                  
        return <button key={i}>
           
             {d.genus + "  " + d.species + "  " + d.subspeciest  + "  " + d.subspecies }
                         
                </button>
           
        })}
        
    


        </div>)
}