import React from 'react'
import Feed from '../../components/Feed'
import 'react-icons/gi'
import { GiBookPile, GiBriefcase, GiHelp, GiNotebook, GiPostOffice, GiTruck, GiWallet } from 'react-icons/gi'
import { AiOutlineEllipsis } from 'react-icons/ai'
import { BsGrid1X2Fill } from 'react-icons/bs'

const Dashboard = () => {
  return (
    <div className='m-5'>
      <div className='row'>
        <div className='col-sm-8'>
          {/* Prycely */}
          <div className='rounded-3 shadow bg-[#DFEDEB] border-1 border-[#2E6969] p-2 mt-3'>
            <div className='d-flex align-items-center justify-content-center'>
              <img src='/images/money-bag.jpg' alt='open-book' className='border-1 w-[50px] h-[50px] rounded-full img-fluid' />
              <span className='flex-fill fw-bold ps-3 text-[#186362]'>Manage your invoices and payments with ease</span>
              <a href='/dashboard/prycely' className='bg-[#186362] py-2 px-3 rounded-3 text-white hover:bg-[#2E6969]'>Visit Prycely&trade;</a>
            </div>
          </div>
          {/* Extra cards */}
          <div className='mt-4'>
            <div className='d-flex align-items-center justify-content-between'>
              <span className='fs-3'>Usefull tools</span>
              <AiOutlineEllipsis className='fs-1' />
            </div>
            <div className='bg-white rounded-3 border-1 row m-0 p-0'>
              <div className='col-sm-6 m-0 border-1 p-3'>
                <div className='d-flex align-items-start justify-content-start flex-col gap-3'>
                  <span className='p-3 bg-red-200 rounded-full'><GiWallet size={50} className="text-red-800 d-flex align-items-center justify-content-center" /></span>
                  <span className='fw-bold'>Prycely&trade;</span>
                  <span className='text-gray-500'>Manage all your funds in one place. Organize your invoices, handle disputes and send notiofications to your clients</span>
                  <span className='d-flex align-items-center justify-content-center gap-2'>
                    <a href="/dashboard/prycely" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3'>Visit Prycely</a>
                    <a href="/dashboard/help/prycely" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-1'>Help <GiHelp /></a>
                    <AiOutlineEllipsis className='fs-3 text-blue-800' />
                  </span>
                </div>
              </div>
              <div className='col-sm-6 m-0 border-1 p-3'>
                <div className='d-flex align-items-start justify-content-start flex-col gap-3'>
                  <span className='p-3 bg-red-200 rounded-full'><GiNotebook size={50} className="text-red-800 d-flex align-items-center justify-content-center" /></span>
                  <span className='fw-bold'>Inventory</span>
                  <span className='text-gray-500'>Manage your inventory here and personel from internal staff to suppliaers and producers here.</span>
                  <span className='d-flex align-items-center justify-content-center gap-2'>
                    <a href="/dashboard/catalog" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3'>Check Catalog</a>
                    <a href="/dashboard/help/catalog" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-1'>Help <GiHelp /></a>
                    <AiOutlineEllipsis className='fs-3 text-blue-800' />
                  </span>
                </div>
              </div>
              <div className='col-sm-6 m-0 border-1 p-3'>
                <div className='d-flex align-items-start justify-content-start flex-col gap-3'>
                  <span className='p-3 bg-red-200 rounded-full'><GiTruck size={50} className="text-red-800 d-flex align-items-center justify-content-center" /></span>
                  <span className='fw-bold'>Transport</span>
                  <span className='text-gray-500'>Whether you need transportation or have your own vehicles and can offer transport, you'll find very useful tools in this area.</span>
                  <span className='d-flex align-items-center justify-content-center gap-2'>
                    <a href="/dashboard/transport" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3'>Transportation Management</a>
                    <a href="/dashboard/help/transport" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-1'>Help <GiHelp /></a>
                    <AiOutlineEllipsis className='fs-3 text-blue-800' />
                  </span>
                </div>
              </div>
              <div className='col-sm-6 m-0 border-1 p-3'>
                <div className='d-flex align-items-start justify-content-start flex-col gap-3'>
                  <span className='p-3 bg-red-200 rounded-full'><GiPostOffice size={50} className="text-red-800 d-flex align-items-center justify-content-center" /></span>
                  <span className='fw-bold'>Storage</span>
                  <span className='text-gray-500'>Need a storage space or have some you want to monetize? Here's a list of tools you can use to get started.</span>
                  <span className='d-flex align-items-center justify-content-center gap-2'>
                    <a href="/dashboard/storage" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3'>Storage Management</a>
                    <a href="/dashboard/help/storage" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-1'>Help <GiHelp /></a>
                    <AiOutlineEllipsis className='fs-3 text-blue-800' />
                  </span>
                </div>
              </div>
              <div className='col-sm-6 m-0 border-1 p-3'>
                <div className='d-flex align-items-start justify-content-start flex-col gap-3'>
                  <span className='p-3 bg-purple-200 rounded-full'><GiBriefcase size={50} className="text-purple-800 d-flex align-items-center justify-content-center" /></span>
                  <span className='fw-bold'>Job Management</span>
                  <span className='text-gray-500'>Manage your jobs. Keep all files in one place and streamline your communication with clients. You can also collaborate...</span>
                  <span className='d-flex align-items-center justify-content-center gap-2'>
                    <a href="/dashboard/transport" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3'>Go To Transportation</a>
                    <a href="/dashboard/help/transport" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-1'>Help <GiHelp /></a>
                    <AiOutlineEllipsis className='fs-3 text-blue-800' />
                  </span>
                </div>
              </div>
              <div className='col-sm-6 m-0 border-1 p-3'>
                <div className='d-flex align-items-start justify-content-start flex-col gap-3'>
                  <span className='p-3 bg-orange-200 rounded-full'><BsGrid1X2Fill size={50} className="p-1 text-orange-800 d-flex align-items-center justify-content-center" /></span>
                  <span className='fw-bold'>Apps & Integration</span>
                  <span className='text-gray-500'>No need to go to third party sites when you can bring them to you. Browse the app store for useful integrations from your best service providers</span>
                  <span className='d-flex align-items-center justify-content-center gap-2'>
                    <a href="/dashboard/apps" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3'>Visit AppStore</a>
                    <a href="/dashboard/help/apps" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-1'>Help <GiHelp /></a>
                    <AiOutlineEllipsis className='fs-3 text-blue-800' />
                  </span>
                </div>
              </div>
              <div className='col-sm-6 m-0 border-1 p-3'>
                <div className='d-flex align-items-start justify-content-start flex-col gap-3'>
                  <span className='p-3 bg-pink-200 rounded-full'><GiWallet size={50} className="text-pink-800 d-flex align-items-center justify-content-center" /></span>
                  <span className='fw-bold'>Community</span>
                  <span className='text-gray-500'>Interact with the community to get the latest trends and news from other translators and intepreters.</span>
                  <span className='d-flex align-items-center justify-content-center gap-2'>
                    <a href="/dashboard/prycely" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3'>Visit Community</a>
                    <a href="/dashboard/prycely/help" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-1'>Help <GiHelp /></a>
                    <AiOutlineEllipsis className='fs-3 text-blue-800' />
                  </span>
                </div>
              </div>
              <div className='col-sm-6 m-0 border-1 p-3'>
                <div className='d-flex align-items-start justify-content-start flex-col gap-3'>
                  <span className='p-3 bg-pink-200 rounded-full'><GiBookPile size={50} className="text-pink-800 d-flex align-items-center justify-content-center" /></span>
                  <span className='fw-bold'>Courses</span>
                  <span className='text-gray-500'>Interact with the community to get the latest trends and news from other translators and intepreters.</span>
                  <span className='d-flex align-items-center justify-content-center gap-2'>
                    <a href="/dashboard/courses" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3'>Visit Courses</a>
                    <a href="/dashboard/help/courses" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-1'>Help <GiHelp /></a>
                    <AiOutlineEllipsis className='fs-3 text-blue-800' />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          {/* Recent Activity */}
          <div className='rounded-3 shadow bg-white border-1 sticky top-5'>
            <div className='d-flex align-items-center justify-content-between p-2 border-bottom-1'>
              <span className='fw-bold'>Recent Activity</span>
              <a href='/dashboard/activity' className='text-decoration-none text-[#186362]'>View All</a>
            </div>
            <div className='p-2'>
              <Feed feed_icon='/images/money-bag.jpg' feed_title='Cargo delivery in Mlolongo warehouse' feed_description='Clearamce required' feed_extra_text='1 day ago' feed_link="/dashboard/transport/1" />
              <Feed feed_icon='/images/translate.png' feed_title='3 tonnes of Maize flour in Zambia just left Maputo' feed_description='Clearance required' feed_extra_text='2 days ago' feed_link="/dashboard/transport/1" />
              <Feed feed_icon='/images/translate.png' feed_title='14 tonnes rice cleared for transport in Ahero' feed_description='Cargo in transit' feed_extra_text='2 days ago' feed_link="/dashboard/transport/1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
