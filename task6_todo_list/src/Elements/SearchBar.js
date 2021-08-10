import React from "react";

import { useState } from "react";

const SearchBar = ({addTask}) =>
{
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handlePress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }


return (
    
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Write here your task" onChange={handleChange} onKeyDown={handlePress} value={userInput}/>
    <button>Add note</button>
    </form>
    
)
   

}

export default SearchBar;