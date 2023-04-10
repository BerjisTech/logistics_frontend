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
  , Signup
  , Applications
  , Courses
  , FindWork
  , Kudoz
  , Messages
  , Search
  , Settings
  , Billing
  , Businesses
  , Business
  , BlueboardList
  , UserProfile
  , Hire
  , Jobs
  , FreelancerProfile
  , BusinessProfile
  , Events
  , JobManagement
  , Job
} from '../../pages';
// Import pages here
// Import { Page1, Page2, Page3, Page4 } from './pages';

const Main = () => {
  return (
    <Routes>
      {/* Add pages here */}
      {/* <Route path='/dashboard/...' element={<ComponentHere />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/applications/*" element={<Applications />} />
      <Route path="/courses/*" element={<Courses />} />
      <Route path="/events" element={<Events />} />
      <Route path="/find-work/*" element={<FindWork />} />
      <Route path="/find_work/*" element={<FindWork />} />
      <Route path="/findwork/*" element={<FindWork />} />
      <Route path="/kudoz/*" element={<Kudoz />} />
      <Route path="/messages/*" element={<Messages />} />
      <Route path="/search/*" element={<Search />} />
      <Route path="/settings/*" element={<Settings />} />
      <Route path="/billing/*" element={<Billing />} />
      <Route path="/businesses/*" element={<Businesses />} />
      <Route path="/business/:business_id" element={<Business />} />
      <Route path="/blueboards" element={<BlueboardList />} />
      <Route path="/profile/:profile_id" element={<UserProfile />} />
      <Route path="/hire/:translator_type" element={<Hire />} />
      <Route path="/freelancer/:freelancer_id" element={<FreelancerProfile />} />
      <Route path="/business/:business_id" element={<BusinessProfile />} />
      <Route path="/jobs/*" element={<Jobs />} />
      <Route path="/courses/*" element={<Courses />} />
      {/* Dashboard links */}
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/dashboard/courses/*" element={<Courses />} />
      <Route path="/dashboard/jobs/*" element={<JobManagement />} />
      <Route path="/dashboard/job/:job_id" element={<Job />} />
      <Route path="/dashboard/messages/*" element={<Messages />} />
      <Route path="/dashboard/search/*" element={<Search />} />
      <Route path="/dashboard/settings/*" element={<Settings />} />
      <Route path="/dashboard/businesses/*" element={<Businesses />} />
      <Route path="/dashboard/business/:business_id" element={<Business />} />

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