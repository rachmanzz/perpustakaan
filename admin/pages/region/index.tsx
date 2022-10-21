import Link from 'next/link'
import React from 'react'
import AccountClockOutline from '../../components/icon/AccountClockOutline'
import AccountSearchOutline from '../../components/icon/AccountSearchOutline'
import ArrowLeftThick from '../../components/icon/ArrowLeftThick'
import ArrowRightThick from '../../components/icon/ArrowRightThick'
import CheckIcon from '../../components/icon/CheckIcon'
import MarkerRadiusOutline from '../../components/icon/MarkerRadiusOutline'
import SaveCheckOutline from '../../components/icon/SaveCheckOutline'
import ShieldAccountOutline from '../../components/icon/ShieldAccountOutline'
import BreadCrumb from '../../components/items/BreadCrumb'
import MainLayout from '../../components/layout/MainLayout'
import { LangType } from '../../i18n'
import { NextPageWithLayout } from '../_app'

// username may came from generate id or name input
/**
 * 
 * @returns { name: string, photo: string, username: string, email: string, role, createdAt: string, updatedAt: string, verified: boolean, emailVerified: boolean }
 * @profile { idcard, address, phone, idexpired, domicile, sex, birthdate, birthplace }
 */

const Region: NextPageWithLayout = () => {
  const users = [
    {
      id: 1,
      name: "Barrett Mccall",
      username: "barret",
      email: "odio.a@aol.couk",
      profile_picture: "",
      verified: false,
      email_verified: false,
      role: "",
      created_at: "2020-01-01",
      updated_at: "2020-01-01",
      profile: {
        idcard: "",
        address: "",
        phone: "",
        idexpired: "",
        domicile: "",
        province: "",
        city: "",
        district: "",
        village: "",
      }
    },
    {
      id: 2,
      name: "Thomas Sykes",
      username: "thomas",
      email: "sed.leo@protonmail.net",
      profile_picture: "",
      verified: false,
      email_verified: false,
      role: "",
      created_at: "2020-01-01",
      updated_at: "2020-01-01",
      profile: {
        idcard: "",
        address: "",
        phone: "",
        idexpired: "",
        domicile: "",
        province: "",
        city: "",
        district: "",
        village: "",
      }
    },
    {
      id: 3,
      name: "Thaddeus Simmons",
      username: "thaddeus",
      email: "enim.non@protonmail.com",
      profile_picture: "",
      verified: false,
      email_verified: false,
      role: "",
      created_at: "2020-01-01",
      updated_at: "2020-01-01",
      profile: {
        idcard: "",
        address: "",
        phone: "",
        idexpired: "",
        domicile: "",
        province: "",
        city: "",
        district: "",
        village: "",
      }
    },
    {
      id: 1,
      name: "Barrett Mccall",
      username: "barret",
      email: "odio.a@aol.couk",
      profile_picture: "",
      verified: false,
      email_verified: false,
      role: "",
      created_at: "2020-01-01",
      updated_at: "2020-01-01",
      profile: {
        idcard: "",
        address: "",
        phone: "",
        idexpired: "",
        domicile: "",
        province: "",
        city: "",
        district: "",
        village: "",
      }
    },
    {
      id: 2,
      name: "Thomas Sykes",
      username: "thomas",
      email: "sed.leo@protonmail.net",
      profile_picture: "",
      verified: true,
      email_verified: false,
      role: "",
      created_at: "2020-01-01",
      updated_at: "2020-01-01",
      profile: {
        idcard: "",
        address: "",
        phone: "",
        idexpired: "",
        domicile: "",
        province: "",
        city: "",
        district: "",
        village: "",
      }
    },
    {
      id: 3,
      name: "Thaddeus Simmons",
      username: "thaddeus",
      email: "enim.non@protonmail.com",
      profile_picture: "",
      verified: false,
      email_verified: false,
      role: "",
      created_at: "2020-01-01",
      updated_at: "2020-01-01",
      profile: {
        idcard: "",
        address: "",
        phone: "",
        idexpired: "",
        domicile: "",
        province: "",
        city: "",
        district: "",
        village: "",
      }
    }
  ]
  const [btnHoverNext, setBtnHoverNext] = React.useState(false)
  const hoverNext = (status: boolean = false) => () => {setBtnHoverNext(status)}
  const [btnHoverBack, setBtnHoverBack] = React.useState(false)
  const hoverBack = (status: boolean = false) => () => {setBtnHoverBack(status)}
  type StepProps = 1 | 2 | 3
  const [createStep, setCreateStep] = React.useState<StepProps>(1)

  const nextStep = (step: StepProps) => {
    if(btnHoverBack) setBtnHoverBack(false)
    if (btnHoverNext) setBtnHoverNext(false)
    setCreateStep(step)
  }


  const [verified, setVerified] = React.useState(false)

  const onVerifyCheck = (isVerified: 'yes' | 'no' = 'no') => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (isVerified === 'yes') {
        setVerified(true)
      } else {
        setVerified(false)
      }
    }

  }


  const FormCountry = () => (
    <div className="flex flex-col">
      <div className="flex mt-2 flex-col">
        <label className="text-orange-500 font-roboto-opensans">Code</label>
        <input className="w-full p-2 border border-orange-200 focus:border-orange-400 outline-none focus:border-2 rounded" type="text" />
      </div>
      <div className="flex mt-2 flex-col">
        <label className="text-orange-500 font-roboto-opensans">Name</label>
        <input className="w-full p-2 border border-orange-200 focus:border-orange-400 outline-none focus:border-2 rounded" type="text" />
      </div>
      <div className="flex mt-2 flex-col">
        <label className="text-orange-500 font-roboto-opensans">District</label>
        <input className="w-full p-2 border border-orange-200 focus:border-orange-400 outline-none focus:border-2 rounded" type="text" />
      </div>
      <div className="flex mt-2 flex-col">
        <label className="text-orange-500 font-roboto-opensans">Village</label>
        <input className="w-full p-2 border border-orange-200 focus:border-orange-400 outline-none focus:border-2 rounded" type="text" />
      </div>
      <div className="flex mt-2 flex-col">
        <label className="text-orange-500 font-roboto-opensans">Domicile</label>
        <input className="w-full p-2 border border-orange-200 focus:border-orange-400 outline-none focus:border-2 rounded" type="text" />
      </div>
      <div className="flex flex-col mt-2 justify-center items-center">
        {/* {check is verified or not input type checkbox} */}
        <label className="text-orange-500 font-roboto-opensans">Is Verified User ?</label>
        <div className="flex flex-row">
          <input onChange={onVerifyCheck("no")} className="mr-2" type="radio" name="verified" value="no" checked={!verified} />
          <label className="text-orange-500 font-roboto-opensans">No</label>

          <input onChange={onVerifyCheck("yes")} className="mr-2 ml-3" type="radio" name="verified" value="yes" checked={verified} />
          <label className="text-orange-500 font-roboto-opensans">Yes</label>
        </div>
      </div>
      <div className="flex flex-row mt-10 justify-between">
        <button onClick={()=>nextStep(2)} onMouseLeave={hoverBack()} onMouseEnter={hoverBack(true)} type="button" className="inline-flex items-center py-2.5 text-sm font-medium text-center text-orange-300 rounded  focus:outline-none hover:text-orange-500 ">
            <ArrowLeftThick color={btnHoverBack ? 'rgb(249 115 22)' : 'rgb(253 186 116)'}  />
            Back
        </button>
        <button onMouseLeave={hoverNext()} onMouseEnter={hoverNext(true)} type="button" className="inline-flex hover:border hover:px-4 hover:py-1 hover:border-orange-500 hover:rounded-full items-center py-2.5 text-sm font-medium text-center text-orange-300 rounded  focus:outline-none hover:text-orange-500 ">
          Create
            <SaveCheckOutline size={30} color={btnHoverNext ? 'rgb(249 115 22)' : 'rgb(253 186 116)'} />
        </button>
      </div>
        
    </div>
  )
  return (
    <div className="px-2 pt-2 pb-8 sm:pb-4  sm:px-10">
        <div className="flex flex-col">
          <BreadCrumb className="font-roboto-opensans font-normal text-sm text-gray-500" activeClass="font-roboto-opensans font-normal text-sm text-gray-400" items={[
            { item: "region", href: "/region", icon: () => <MarkerRadiusOutline size={18} color="rgb(107 114 128)"/> }
          ]} />
          <div className="mt-3 mb-5 flex flex-row justify-between">
            <div className="flex pt-2 justify-center items-center">
              <h1 className=" uppercase text-xl font-bold text-gray-500">Region</h1>
            </div>
            <div className="flex flex-row sm:hidden">
                {/* button create */}
              <Link href="/user-account/create">
                <a className="inline-flex border border-orange-400 rounded py-1 px-3 text-orange-400 hover:border-orange-200 hover:text-orange-200 focus:text-orange-200 focus:border-orange-200">
                  create account 
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-2">
            <div className="sm:w-2/3">
              <div className='w-full overflow-auto shadow bg-white rounded'>
                <table className='table-auto w-full'>
                  <thead className='bg-orange-200'>
                    <tr>
                      <th className="text-left  px-2 py-2 text-gray-500 font-roboto-opensans">code</th>
                      <th className="text-left px-2 py-2 text-gray-500 font-roboto-opensans">name</th>
                      <th className="text-left  px-2 py-2 text-gray-500 font-roboto-opensans">type</th>
                      <th className="text-left  px-2 py-2 min-w-[100px] text-gray-500 font-roboto-opensans">created at</th>
                      <th className="text-center  px-2 py-2 text-gray-500 font-roboto-opensans">action</th>
                    </tr>
                    
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
              
            </div>
            <div className="hidden sm:basis-1/3 sm:flex sm:flex-col">
              <div className='shadow w-full rounded bg-white'>
                <div className="p-2 flex flex-row justify-between bg-orange-200">
                  <h3 className='text-gray-500 font-bold'>Add Country</h3>
                  <div className="flex gap-1 text-sm items-center justify-center flex-row">
                  
                  </div>
                </div>
                <div className="p-3">
                  <FormCountry />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

Region.getLayout = function (page) {
  type componentProp = {lang: LangType}
  const LeftComponent = ({lang}: componentProp) => {
    return (
      <div className="relative">
          <span className="absolute inset-y-0 left-0 z-10 flex items-center">
              <span className="py-2 pl-1">
                  <AccountSearchOutline size={24} />
              </span>
          </span>
          <input id="search-user" name="search" type="text" autoComplete="off" placeholder={lang('find_user_account')} required className="appearance-none rounded pl-8 pr-2 w-full lg:w-1/2 placeholder:text-[#F39508]/[50%] font-roboto-opensans placeholder:font-roboto-opensans relative  sm:text-lg py-2 bg-[#FFE6C0] rounded-t-md focus:outline-none" />
      </div>
    )
  } 
  return (<MainLayout leftComponent={(_, lang) => <LeftComponent lang={lang} />}>{page}</MainLayout>)
}

export default Region