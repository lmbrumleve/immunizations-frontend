import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CalendarInput from '../layout/CalendarInput';

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
            <div className=' border rounded p-4 mt-2 shadow' >
                <h2 className='text-center m-4'>New Immunization Record</h2>
                <label htmlFor="child" className='m-2'>Applies to Child:</label>
            <select className="m-2" id="child" name="child" onChange = {(e)=>setChildID(e.target.value)}>
                <option value="">-</option>
                {children.map(c=>(
                    <option value={kidId}>{c.firstName + " " + c.lastName}</option>
                ))}
            </select>
            <br />
            <br/>
            <div style={{display:'flex', flexDirection:'row'}}>
                <label htmlFor='vaccineGroup' className='form-label m-2'>
                    Vaccine:
                </label>
                <input
                type={"text"}
                className='form-control'
                placeholder='Enter the vaccine that was administered'
                name="vaccineGroup"
                id="vaccineGroup"
                defaultValue={vaccineGroup}
                onChange= {(e)=>onInputChange(e)}
                />
                </div>
                <br/>
                <div style={{display:'flex', flexDirection:'row' }}>
                <p className='form-label m-1' >Dose: </p>
                <input
                type={"radio"}
                name="dose"
                value="1"
                id="1"
                defaultValue={dose}
                />
                <label htmlFor='dose' className='form-label m-1'>1st</label>
                <input
                type={"radio"}
                name="dose"
                id="2"
                defaultValue={dose}
                />
                <label htmlFor='dose' className='form-label m-1'>2nd</label>
                <input
                type={"radio"}
                name="dose"
                id="3"
                defaultValue={dose}
                />
                <label htmlFor='dose' className='form-label m-1'>3rd</label>
                <input
                type={"radio"}
                name="dose"
                value="4"
                id="4"
                defaultValue={dose}
                />
                <label htmlFor='dose' className='form-label m-1'>4th</label>
                </div>
                <br/>
                <label htmlFor='dateAdministered' className='form-label'>
                    Date Administered:
                </label>
                <CalendarInput                 
                className='form-control'
                placeholder='Enter the date administered'
                name="dateAdministered"
                id="dateAdministered"
                defaultValue={dateAdministered}
                onChange= {(e)=>onInputChange(e)}/>
                <br/>
                {/* <div style={{display:'flex', flexDirection:'row'}}>
                <label htmlFor='vaccineBrand' className='form-label m-2'>
                    Vaccine Brand:
                </label>
                <input
                type={"text"}
                className='form-control m-2'
                placeholder='Enter the vaccine brand'
                name="vaccineBrand"
                id="vaccineBrand"
                defaultValue={vaccineBrand}
                onChange= {(e)=>onInputChange(e)}
                />
                </div> */}
                <div style={{display:'flex', flexDirection:'row'}}>
                <label htmlFor='doctorName' className='form-label m-2'>
                    Doctor:
                </label>
                <input
                type={"text"}
                className='form-control m-2'
                placeholder="Enter the doctor's name"
                name="doctorName"
                id="doctorName"
                defaultValue={doctorName}
                onChange= {(e)=>onInputChange(e)}
                />
                </div>
                <br/>
                <button type="submit" className='btn btn-primary submit'>Submit</button>
                <Link className="btn btn-outline-primary cancel" to="/">Cancel</Link>
            </div>

        </div>

    </div>
  )
}
