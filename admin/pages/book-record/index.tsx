import { useRouter } from 'next/router'
import BookSearch from '../../components/icon/BookSearch'
import MainLayout from '../../components/layout/MainLayout'
import useLanguage from '../../i18n'
import { NextPageWithLayout } from '../_app'

const BookRecord: NextPageWithLayout = () => {
  return (
    <div className="container">
        helo record
    </div>
  )
}

BookRecord.getLayout = function (page) {
  const lang = useLanguage('en')
  const MobileInput = () => (
    <div className="relative">
        <label htmlFor="search-book" className="sr-only">find book</label>
        <span className="absolute inset-y-0 left-0 z-10 flex items-center">
            <span className="py-2 pl-1">
                <BookSearch size={24} />
            </span>
        </span>
        <input id="search-book" name="search" type="text" autoComplete="off" placeholder={"find book"} required className="appearance-none rounded pl-8 pr-2 placeholder:text-[#F39508]/[50%] font-roboto-opensans placeholder:font-roboto-opensans relative w-full  py-2 bg-[#FFE6C0] placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm" />
    </div>
  )
  const DesktopInput = () => (
    <div className="relative">
        <label htmlFor="search-book" className="sr-only">{lang('search_book')}</label>
        <span className="absolute inset-y-0 left-0 z-10 flex items-center">
            <span className="py-2 pl-1">
                <BookSearch size={24} />
            </span>
        </span>
        <input id="search-book" name="search" type="text" autoComplete="off" placeholder={"find book"} required className="appearance-none rounded pl-8 pr-2 w-full lg:w-1/2 placeholder:text-[#F39508]/[50%] font-roboto-opensans placeholder:font-roboto-opensans relative  py-2 bg-[#FFE6C0] rounded-t-md focus:outline-none sm:text-sm" />
    </div>
  ) 
  return (<MainLayout specific={ {
    mobileOnly: <MobileInput />,
    desktopOnly: <DesktopInput />
  } }>{page}</MainLayout>)
}

export default BookRecord