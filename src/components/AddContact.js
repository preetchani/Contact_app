import React from 'react';
import { Link } from 'react-router-dom';

class AddContact extends React.Component{

    state={
        name:"",
        email:"",
    }
    add=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("Please add Something");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
        this.props.history.push("/");

    }
    render(){

        return(
            <div>
                    <h2>Add Contact</h2>
            <form onSubmit={this.add}>
            <div className="form-group">
                <label>Name</label>
                <input type="name" className="form-control" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control"  placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
            </div>
            <button type="submit" className="btn" style={{backgroundColor:'#337ab7',color:'white'}}>Add</button>
            <Link to="/">
                <button type="cancel" className="btn btn-danger">cancel</button>
            </Link>
            
            </form>
            </div>
        );

    }

};
export default AddContact;