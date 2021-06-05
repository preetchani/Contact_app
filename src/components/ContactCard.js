import React from'react';
import {Link} from 'react-router-dom';

const ContactCard=(props)=>{

    const {id,name,email}=props.contact;

    return(
        <div className="ui items">
             <div className="item">
                <i className="user circle icon"></i>
                <div className="content">
                    <Link 
                    to={{ pathname:`/contact/${id}`, state: {contact:props.contact}}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                    </Link>
                </div>
                <i className="trash alternate outline icon" style={{color:'red',marginTop:'7px'}}
                onClick={()=>props.clickHandler(id)}></i>   
            </div>
        </div>
       
    );

}
export default ContactCard;