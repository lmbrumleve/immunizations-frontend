import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { TextField } from '@mui/material';
import { format } from 'date-fns';

export default function ProfileCard() {

  const [children, setChildren] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(()=>{
    loadChildren();
  }, [])

  const loadChildren= async ()=>{
    const result= await axios.get("http://localhost:8080/children")
    console.log(result.data)
    setChildren(result.data)
  }

  return (
    <>
    {/* <TextField
    id="childName"
    label="Child Name"
    value={searchTerm}
    onChange={console.log(searchTerm)}
    variant="standard"
    margin="normal"
    sx={{ width: "100%" }}
    /> */}
{children.map((child) =>(
    <Card style={{ width: '18rem' }} className='shadow'>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{child.firstName + " " + child.lastName}</Card.Title>
      <Card.Text>
        {format(child.dateOfBirth, "MMMM dd, yyyy")}
      </Card.Text>
      <Button variant="primary">View Profile</Button>
    </Card.Body>
  </Card>
))}


    </>
  )
}
