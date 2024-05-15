import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NewRecord(props) {
    const[childID, setChildID]=useState([]);
    const [children, setChildren] = useState([]);
  
    useEffect(()=>{
      loadChildren();
    }, [])
  
    const loadChildren= async ()=>{
      const result= await axios.get("http://localhost:8080/children")
      console.log(result.data)
      setChildren(result.data)
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Create New Record</h2>
                <label htmlFor="child">Applies to Child</label><br />
            <select id="child" name="child" onChange = {(e)=>setChildID(e.target.value)}>
                <option value="">-</option>
                {children.map(c=>(
                    <option value={c.id}>{c.firstName + " " + c.lastName}</option>
                ))}
            </select><br /> <br/>
               
                <label htmlFor='vaccineGroup' className='form-label'>
                    Vaccine Group
                </label>
                <input
                type={"text"}
                className='form-control'
                placeholder='Which vaccine was administered?'
                name="vaccineGroup"
                />
                <label htmlFor='dose' className='form-label'>
                    Dose
                </label>
                <input
                type={"text"}
                className='form-control'
                placeholder='Which dose is this for the patient?'
                name="dose"
                />
                <label htmlFor='dateAdministered' className='form-label'>
                    Date Administered
                </label>
                <input
                type={"text"}
                className='form-control'
                placeholder='Enter the date administered'
                name="dateAdministered"
                />
                <label htmlFor='vaccineBrand' className='form-label'>
                    Vaccine Brand
                </label>
                <input
                type={"text"}
                className='form-control'
                placeholder='Enter the vaccine brand'
                name="vaccineBrand"
                />
                <label htmlFor='doctorName' className='form-label'>
                    Doctor
                </label>
                <input
                type={"text"}
                className='form-control'
                placeholder='Which doctor administered the vaccine?'
                name="doctorName"
                />

            </div>

        </div>

    </div>
  )
}
