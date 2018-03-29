import React from 'react';


export default (props)=>{

    const listElements = props.list.map( (item, index) =>{
        return (
            <li key={index} className="collection-item" >{item.title}: {item.details}</li>
        )
    })

    return(
        <ul className="collection" >
            {listElements}
        </ul>   
    )
}