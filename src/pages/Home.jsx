import React, { useEffect, useState } from 'react';
import ProfileCard from '../Child/ProfileCard';
import UserTable from '../users/UserTable';


export default function Home() {

  return (
    <div className='container'>
        <div className='py-4'>
        <UserTable/>
        <ProfileCard/>

        </div>
    </div>
  )
}
