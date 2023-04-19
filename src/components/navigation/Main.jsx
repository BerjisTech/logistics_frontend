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
  , Hire
  , Jobs
  , FreelancerProfile
  , Events
  , JobManagement
  , Job,
  NotFound,
  Drivers
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
      <Route path="/b/:business_id" element={<Business />} />
      <Route path="/hire/:translator_type" element={<Hire />} />
      <Route path="/u/:profile_id" element={<FreelancerProfile />} />
      <Route path="/jobs/*" element={<Jobs />} />
      <Route path="/courses/*" element={<Courses />} />
      {/* Dashboard links */}
      <Route path="/dashboard/*" element={<NotFound />} />
      <Route path="/dashboard/courses/*" element={<Courses />} />
      <Route path="/dashboard/jobs/*" element={<JobManagement />} />
      <Route path="/dashboard/job/:job_id" element={<Job />} />
      <Route path="/dashboard/messages/*" element={<Messages />} />
      <Route path="/dashboard/search/*" element={<Search />} />
      <Route path="/dashboard/settings/*" element={<Settings />} />
      <Route path="/dashboard/businesses/*" element={<Businesses />} />
      <Route path="/dashboard/business/:business_id" element={<Business />} />
      <Route path="/dashboard/find-work/*" element={<FindWork />} />
      <Route path="/dashboard/find_work/*" element={<FindWork />} />
      <Route path="/dashboard/findwork/*" element={<FindWork />} />

      <Route path='/' element={<Landing />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/catalog' element={<Catalog />} />
      <Route path='/dashboard/contacts' element={<Contacts />} />
      <Route path='/dashboard/storage' element={<Storage />} />
      <Route path='/dashboard/transport' element={<Transport />} />
      <Route path='/dashboard/wallet' element={<Wallet />} />
      <Route path='/dashboard/teams' element={<Teams />} />
      <Route path='/dashboard/team/:team_id' element={<Team />} />
      <Route path='/dashboard/drivers' element={<Drivers />} />

      <Route path='*' element={<NotFound />} />

    </Routes>
  )
}

export default Main