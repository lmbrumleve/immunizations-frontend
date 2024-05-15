import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function NewRecord() {
    const[childID, setChildID]=useState([]);
    const [children, setChildren] = useState([]);
    const [immunization, setImmunization] = useState({
        kidId: childID,
        vaccineGroup: "",
        dose: "",
        status: 1,
        dateAdministered: "",
        vaccineBrand: "",
        doctorName: ""
    });

    const{kidId, vaccineGroup,dose,status,dateAdministered,vaccineBrand, doctorName}=immunization;

    const onInputChange=(e) => {

        setImmunization({...immunization, [e.target.vaccineGroup]:e.target.value})
    }


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
                    <option value={kidId}>{c.firstName + " " + c.lastName}</option>
                ))}
            </select><br />
               
                <label htmlFor='vaccineGroup' className='form-label'>
                    Vaccine Group
                </label>
                <input
                type={"text"}
                className='form-control'
                placeholder='Which vaccine was administered?'
                name="vaccineGroup"
                value={vaccineGroup}
                onChange= {(e)=>onInputChange(e)}
                />
                <br/>
                    {"Dose:  "} 
                    <br/>
                <input
                type={"radio"}
                name="dose"
                value="1"
                id="1"
                // checked={immunization.dose === 1}
                />
                <label htmlFor='dose' className='form-label'>1</label>
                <input
                type={"radio"}
                name="dose"
                value="2"
                id="2"
                // checked={immunization.dose === 2}
                />
                <label htmlFor='dose' className='form-label'>2</label>
                <input
                type={"radio"}
                name="dose"
                value="3"
                id="3"
                // checked={immunization.dose === 3}
                />
                <label htmlFor='dose' className='form-label'>3</label>
                <input
                type={"radio"}
                name="dose"
                value="4"
                id="4"
                // checked={immunization.dose === 4}
                />
                <label htmlFor='dose' className='form-label'>4</label>
                <br/>
                <label htmlFor='dateAdministered' className='form-label'>
                    Date Administered
                </label>
                <input
                type={"text"}
                className='form-control'
                placeholder='Enter the date administered'
                name="dateAdministered"
                value={dateAdministered}
                onChange= {(e)=>onInputChange(e)}
                />
                <label htmlFor='vaccineBrand' className='form-label'>
                    Vaccine Brand
                </label>
                <input
                type={"text"}
                className='form-control'
                placeholder='Enter the vaccine brand'
                name="vaccineBrand"
                value={vaccineBrand}
                onChange= {(e)=>onInputChange(e)}
                />
                <label htmlFor='doctorName' className='form-label'>
                    Doctor
                </label>
                <input
                type={"text"}
                className='form-control'
                placeholder='Which doctor administered the vaccine?'
                name="doctorName"
                value={doctorName}
                onChange= {(e)=>onInputChange(e)}
                />
                <br/>
                <button type="submit" className='btn btn-primary'>Submit</button>
                <Link className="btn btn-light" to="/">Cancel</Link>
            </div>

        </div>

    </div>
  )
}
