import React from 'react'
import { FiSettings, FiHome, FiBookOpen, FiPieChart, FiUsers, FiHelpCircle, FiList, FiFolder } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import NavBarSerction from './NavBarSection'
import { BiBookAdd, BiBuilding, BiCar, BiWallet } from 'react-icons/bi'
import { BsTruck } from 'react-icons/bs'
import { AiOutlineContacts } from 'react-icons/ai'
import { GoOrganization } from 'react-icons/go'

const Navbar = () => {
    return (
        <nav className="min-vh-100 m-0 p-0 d-flex overflow-x-hidden border-end-1 navbar">
            <div className="m-0 p-0 h-screen d-flex flex-column flex-nowrap sticky " id="navBarWrapper">
                <header className="w-full border-bottom sticky bg-primary shadow">
                    <a className="m-0 p-0 w-full h-full d-flex align-items-center justif-content-center" href="/">
                        <div className="m-0 p-0 d-flex w-full h-full align-items-center justify-content-center">
                            <div className="card bg-white p-1 rounded shadow-sm my-2">
                                <img src="https://pbs.twimg.com/profile_images/1151905246073053189/cZLu6vip_400x400.jpg" width="30" alt="logo" />
                            </div>
                        </div>
                    </a>
                </header>
                <div className="flex-fill d-flex flex-column overflow-y-auto overflow-x-hidden">
                    <NavBarSerction listItems={[
                        { name: "Home", route: "/dashboard", icon: <FiHome className="app__sidebar-icon" /> },
                        { name: "Jobs", route: "/dashboard/findwork", icon: <FiList className="app__sidebar-icon" /> },
                        { name: "Job Management", route: "/dashboard/job/123", icon: <FiFolder className="app__sidebar-icon" /> },
                        { name: "Courses", route: "/dashboard/courses", icon: <BiBookAdd className="app__sidebar-icon" /> }
                    ]}
                        id={"sideBarNav"} />
                    <NavBarSerction listItems={[
                        { name: "My Catalog", route: "/dashboard/catalog", icon: <FiHome className="app__sidebar-icon" /> },
                        { name: "Suppliers", route: "/dashboard/catalog", icon: <FiHome className="app__sidebar-icon" /> },
                        { name: "Retailers", route: "/dashboard/catalog", icon: <FiHome className="app__sidebar-icon" /> },
                        { name: "Manufacturers", route: "/dashboard/catalog", icon: <FiHome className="app__sidebar-icon" /> },
                    ]}
                        sectionTitle="Marketplace"
                        showMore={false}
                    />
                    <NavBarSerction listItems={[
                        { name: "Transport", route: "/dashboard/transport", icon: <BsTruck className="app__sidebar-icon" /> },
                        { name: "Drivers", route: "/dashboard/drivers", icon: <BiCar className="app__sidebar-icon" /> },
                        { name: "Storage", route: "/dashboard/storage", icon: <BiBuilding className="app__sidebar-icon" /> }
                    ]}
                        sectionTitle="Cargo Handling"
                        showMore={false}
                    />
                    <NavBarSerction listItems={[
                        { name: "Teams", route: "/dashboard/teams", icon: <FiUsers className="app__sidebar-icon" /> },
                        { name: "Contacts", route: "/dashboard/contacts", icon: <AiOutlineContacts className="app__sidebar-icon" /> },
                        { name: "Businesses", route: "/dashboard/businesses", icon: <GoOrganization className="app__sidebar-icon" /> }
                    ]}
                        sectionTitle="Team"
                        showMore={false}
                    />
                    <NavBarSerction listItems={[
                        { name: "Forums", route: "/networking/forum", icon: <FiHome className="app__sidebar-icon" /> },
                        { name: "Meetups", route: "/networking/meetups", icon: <FiPieChart className="app__sidebar-icon" /> },
                        { name: "Mentoring", route: "/networking/mentoring", icon: <FiHelpCircle className="app__sidebar-icon" /> },
                        { name: "Gatherings", route: "/networking/gatherings", icon: <FiUsers className="app__sidebar-icon" /> },
                    ]}
                        sectionTitle="Networking"
                    />
                    <NavBarSerction listItems={[
                        { name: "Wallet", route: "/dashboard/wallet", icon: <BiWallet className="app__sidebar-icon" /> },
                        { name: "Invoicing", route: "/tools/invoicing", icon: <FiHome className="app__sidebar-icon" /> },
                        { name: "Widgets", route: "/tools/widgets", icon: <FiPieChart className="app__sidebar-icon" /> },
                        { name: "Community Rates", route: "/tools/community-rates", icon: <FiBookOpen className="app__sidebar-icon" /> },
                    ]}
                        sectionTitle="Tools"
                        showMore={true}
                    />
                </div>
                <div>
                    <ul className="navbar-nav d-flex flex-column w-full p-2 align-items-start justify-content-start border-top-1">
                        <li className="nav-item w-full text-center">
                            <Link to="/dashboard/settings" className="nav-link w-full d-flex align-items-center justify-content-start overflow-hidden">
                                <FiSettings className="app__sidebar-icon me-2" />
                                <p>Settings</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
