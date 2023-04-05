import React from 'react'
import { Routes, Route } from "react-router";
import {
  Landing
  , Dashboard
  , Catalog
  , Contacts
  , Storage
  , Transport
  , Wallet
  , Teams
  , Team
} from '../../pages';
// Import pages here
// Import { Page1, Page2, Page3, Page4 } from './pages';

const Main = () => {
  return (
    <Routes>
      {/* Add pages here */}
      {/* <Route path='/dashboard/...' element={<ComponentHere />} /> */}
      <Route path='/' element={<Landing />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/storage' element={<Storage />} />
      <Route path='/transport' element={<Transport />} />
      <Route path='/wallet' element={<Wallet />} />
      <Route path='/teams' element={<Teams />} />
      <Route path='/team/:team_id' element={<Team />} />

    </Routes>
  )
}

export default Main