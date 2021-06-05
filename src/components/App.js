import React,{useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './Header';
import {v4 as uuid} from 'uuid';
import ContactList from './ContactList';
import AddContact from './AddContact';
import ContactDetails from './ContactDetails';

function App() {
  const STORAGE_KEY="contacts";
  // create contact list and pass it as prop to contactlist.js file
  const [contacts,setContacts]=useState([]);

  const addContactHandler=(contact)=>{
    setContacts([...contacts,{id:uuid(),...contact}]);
  }

  const removeContactHandler=(id)=>{
    //create copy of contact list and pass filtered array to setContacts function
    const newContactList=contacts.filter((contact)=>{
      return contact.id !== id
    });
    setContacts(newContactList);
  };

  //render saved details from local  storage
  useEffect(()=>{
    const retriveData= JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(retriveData) setContacts(retriveData);
  },[])
  //store form data in local storage 
  useEffect(()=>{
    localStorage.setItem(STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);

  
  return (
    <div className="container">
      <Router>
      <Header/>
      <Switch>
      <Route path="/" exact render={(props)=>(<ContactList {...props} contacts={contacts} getContactId={removeContactHandler}/>) } />
      <Route path="/add" render={(props)=>(<AddContact {...props} addContactHandler={addContactHandler}/> ) }/>
      <Route path="/contact/:id" component={ContactDetails}/>
      </Switch>
      
      </Router>
    
    </div>
    
  );
}

export default App;
