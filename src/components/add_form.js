import React, {Component} from 'react';

class AddForm extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            details:''
        }
    }

    handleAddItem(event){
        event.preventDefault();
        console.log('handlingggggggggggg', this.state)

        const {newItem, newDetails} = this.state;

        this.props.add({title: newItem, details: newDetails})

        this.setState({
            title:'',
            details:''
        })
    }

    render(){
        const {newItem, newDetails} = this.state;

        return(
            <form className="row" onSubmit={this.handleAddItem.bind(this)} >
                <div className="col s6" >
                    <label>Title</label>
                    <input type="text" value={newItem} onChange={ (event) => this.setState({newItem: event.target.value}) } />
                </div>
                <div className="col s6" >
                    <label>Details</label>
                    <input type="text" value={newDetails} onChange={ (event) => this.setState({newDetails: event.target.value})} />
                </div>
                <div className="center">
                    <button className="btn blue darken-3 ">Add Items</button>
                </div>
            </form>
        )
    }
}

export default AddForm;