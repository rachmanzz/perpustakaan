import { useRouter } from 'next/router'
import AccountClockOutline from '../../components/icon/AccountClockOutline'
import BookClockOutline from '../../components/icon/BookClockOutline'
import BookOpenVariant from '../../components/icon/BookOpenVariant'
import BookSearch from '../../components/icon/BookSearch'
import BreadCrumb from '../../components/items/BreadCrumb'
import MainLayout from '../../components/layout/MainLayout'
import useLanguage, { LangType } from '../../i18n'
import { NextPageWithLayout } from '../_app'

const BorrowedBook: NextPageWithLayout = () => {
  return (
    <div className="px-2 pt-2 pb-8 sm:pb-4 sm:px-10">
        <div className="flex flex-col mt-2">
          <BreadCrumb className="font-roboto-opensans font-normal text-sm text-gray-500" activeClass="font-roboto-opensans font-normal text-sm text-gray-400" items={[
                { item: "book borrowed", href: "/", icon: () => <BookClockOutline size={18} color="rgb(107 114 128)"/> }
              ]} />
          <div className="mt-3 mb-5 flex flex-row justify-between">
            <div className="flex pt-2 justify-center items-center">
              <h1 className=" uppercase text-xl font-bold text-gray-500">DAFTAR PEMINJAM BUKU</h1>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
              <div className=" min-h-[240px] md:min-h-[260px] bg-[#FFE6C0]">
                <div className="flex flex-col my-4 mx-2 justify-center items-center">
                  <div className=" h-28 w-28 rounded-full border-2 border-white"></div>
                  <div className="text-center mt-3 text-gray-500 text-xs font-bold">
                    Muhammad Abdurrahman
                  </div>
                  <div className="text-center text-gray-500 text-sm">
                    @rahman
                  </div>
                  <div className="w-full mt-10 bg-white grid grid-cols-2 gap-2 rounded mx-3 p-2">
                    <div className="flex items-center flex-row">
                      <BookClockOutline size={18}/>
                      <div className="pl-2">3</div>
                    </div>
                    <div className="flex items-center flex-row">
                      <BookOpenVariant size={18}/>
                      <div className="pl-2">3</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

BorrowedBook.getLayout = function (page) {
  type componentProp = {lang: LangType}
  const MobileInput = ({lang}: componentProp) => {
    return (
      <div className="relative">
          <span className="absolute inset-y-0 left-0 z-10 flex items-center">
              <span className="py-2 pl-1">
                  <AccountClockOutline size={24} />
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
                  <AccountClockOutline size={24} />
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

export default BorrowedBook