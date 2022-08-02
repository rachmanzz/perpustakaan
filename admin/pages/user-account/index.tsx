import AccountClockOutline from '../../components/icon/AccountClockOutline'
import AccountSearchOutline from '../../components/icon/AccountSearchOutline'
import MainLayout from '../../components/layout/MainLayout'
import { LangType } from '../../i18n'
import { NextPageWithLayout } from '../_app'

// username may came from generate id or name input
/**
 * 
 * @returns { name: string, photo: string, username: string, email: string, role, createdAt: string, updatedAt: string, verified: boolean, emailVerified: boolean }
 * @profile { idcard, address, phone, idexpired, domicile, sex, birthdate, birthplace }
 */

const UserAccount: NextPageWithLayout = () => {
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
    }
  ]
  return (
    <div className="p-2 sm:px-10">
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row sm:gap-2">
            <div className="sm:w-2/3 w-full overflow-auto shadow bg-white  rounded">
              <table className='table-auto w-full'>
                <thead className='bg-orange-200'>
                  <tr>
                    <th className="text-left border border-orange-50 px-2 py-2 text-gray-500 font-roboto-opensans">name</th>
                    <th className="text-left border border-orange-50 px-2 py-2 text-gray-500 font-roboto-opensans">email</th>
                    <th className="text-left border border-orange-50 px-2 py-2 text-gray-500 font-roboto-opensans">status</th>
                    <th className="text-left border border-orange-50 px-2 py-2 text-gray-500 font-roboto-opensans">created at</th>
                    <th className="text-center border border-orange-50 px-2 py-2 text-gray-500 font-roboto-opensans">action</th>
                  </tr>
                  
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td className="border border-orange-50 px-2 py-2 text-gray-500 font-roboto-opensans">{user.name}</td>
                      <td className="border border-orange-50 px-2 py-2 text-gray-500 font-roboto-opensans">{user.email}</td>
                      <td className="border border-orange-50 px-2 py-2 text-gray-500 font-roboto-opensans">{user.verified ? "verified" : "unverified"}</td>
                      <td className="border border-orange-50 px-2 py-2 text-gray-500 font-roboto-opensans">{user.created_at}</td>
                      <td className="border border-orange-50 px-2 py-2 text-gray-500 font-roboto-opensans">#</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="hidden sm:flex sm:flex-col shadow rounded sm:basis-1/3 bg-white">
              <div className="p-2 flex flex-row justify-between bg-orange-200">
                <h1 className='text-gray-500 font-bold'>Create User</h1>
                <div className="flex gap-1 text-sm items-center justify-center flex-row">
                {
                  [1,2,3].map(i => (
                    <div key={i} className={`items-center flex justify-center border-white  text-center border rounded-full h-7 w-7 ${i === 1 && 'bg-white text-orange-500'}`}>
                      <span>{i}</span>
                    </div>
                  ))  
                }
                </div>
              </div>
              <div className="p-3">
                <form className="flex flex-col">
                  <div className="flex flex-col">
                    <label className="text-orange-500 font-roboto-opensans">Name</label>
                    <input className="w-full p-2 border border-orange-200 focus:border-orange-400 outline-none focus:border-2 rounded" type="text" />
                  </div>
                  <div className="flex mt-2 flex-col">
                    <label className="text-orange-500 font-roboto-opensans">Username</label>
                    <input className="w-full p-2 border border-orange-200 focus:border-orange-400 outline-none focus:border-2 rounded" type="text" />
                  </div>
                  <div className="flex mt-2 flex-col">
                    <label className="text-orange-500 font-roboto-opensans">Email</label>
                    <input className="w-full p-2 border border-orange-200 focus:border-orange-400 outline-none focus:border-2 rounded" type="text" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

UserAccount.getLayout = function (page) {
  type componentProp = {lang: LangType}
  const MobileInput = ({lang}: componentProp) => {
    return (
      <div className="relative">
          <span className="absolute inset-y-0 left-0 z-10 flex items-center">
              <span className="py-2 pl-1">
                  <AccountSearchOutline size={24} />
              </span>
          </span>
          <input id="search-book" name="search" type="text" autoComplete="off" placeholder={lang('find_book_borrower')} required className="appearance-none rounded pl-8 pr-2 placeholder:text-[#F39508]/[50%] font-roboto-opensans placeholder:font-roboto-opensans relative w-full  py-2 bg-[#FFE6C0] placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm" />
      </div>
    )
  }
  const DesktopInput = ({lang}: componentProp) => {
    return (
      <div className="relative">
          <span className="absolute inset-y-0 left-0 z-10 flex items-center">
              <span className="py-2 pl-1">
                  <AccountSearchOutline size={24} />
              </span>
          </span>
          <input id="search-book" name="search" type="text" autoComplete="off" placeholder={lang('find_book_borrower')} required className="appearance-none rounded pl-8 pr-2 w-full lg:w-1/2 placeholder:text-[#F39508]/[50%] font-roboto-opensans placeholder:font-roboto-opensans relative  py-2 bg-[#FFE6C0] rounded-t-md focus:outline-none sm:text-sm" />
      </div>
    )
  } 
  return (<MainLayout specific={(_, lang) => ({
    mobileOnly: <MobileInput lang={lang}/>,
    desktopOnly: <DesktopInput lang={lang}/>
  } )}>{page}</MainLayout>)
}

export default UserAccount