import React from 'react';
import listData from '../data/todo_items'


export default ()=>{

    const listElements = listData.map( (item, index) =>{
        return (
            <li key="index" className="collection-item" >{item.title}</li>
        )
    })

    return(
        <ul className="collection" >
            {listElements}
        </ul>   
    )
}