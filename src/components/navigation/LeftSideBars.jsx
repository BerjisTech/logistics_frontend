import React from 'react'
import { useLocation } from 'react-router-dom'
import { FreelancerFilterForm } from '../hire/Freelancer'

export function BusinessFilterForm() {
    return (
        <div>
            <h1>BusinessFilterForm</h1>
        </div>
    )
}

export function EmptySideBar() {
    return (
        <div>
            EmptySideBar
        </div>
    )
}

const LeftSideBars = () => {
    const location = useLocation()
    let active_sidebar = location.pathname.split('/').reverse()[0]
    const left_sidebars = {
        'default': <EmptySideBar />,
        'business': <BusinessFilterForm />,
        'freelancers': <FreelancerFilterForm />
    }

    return (
        <div>
            {left_sidebars[active_sidebar]}
        </div>
    )
}

export default LeftSideBars
