import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

export default function UserTable() {
  
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    loadUsers();
  }, [])

  const loadUsers= async ()=>{
    const result= await axios.get("http://localhost:8080/users")
    console.log(result.data)
    setUsers(result.data)
  }

  
  return (
    <div>
            <Table striped bordered hover className='table border shadow'>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>

      {
        users.map((ans)=>(
          <tr>
          <th key={ans.id}>{ans.id}</th>
          <td>{ans.name}</td>
          <td>{ans.username}</td>
          <td>{ans.email}</td>
        </tr>
        
        ))
      }

      </tbody>
    </Table>
    </div>
  )
}
