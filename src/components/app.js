import React from 'react';
import List from './list';
import AddForm from './add_form'
import 'materialize-css/dist/css/materialize.min.css'

const App = () => (
    <div className="container" >
        <h1 className="center">To Do List</h1>
        <AddForm/>
        <List/>
    </div>
);

export default App;
