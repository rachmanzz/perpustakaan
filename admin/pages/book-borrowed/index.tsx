import { useRouter } from 'next/router'
import BookSearch from '../../components/icon/BookSearch'
import MainLayout from '../../components/layout/MainLayout'
import useLanguage from '../../i18n'
import { NextPageWithLayout } from '../_app'

const BorrowedBook: NextPageWithLayout = () => {
  return (
    <div className="container">
        helo borrowed
    </div>
  )
}

BorrowedBook.getLayout = function (page) {
  const {locale} = useRouter()
  const lang = useLanguage(locale!!)
  const MobileInput = () => (
    <div className="relative">
        <label htmlFor="email-address" className="sr-only">{lang('search_book')}</label>
        <span className="absolute inset-y-0 left-0 z-10 flex items-center">
            <span className="py-2 pl-1">
                <BookSearch size={24} />
            </span>
        </span>
        <input id="email-address" name="search" type="text" autoComplete="off" placeholder='' required className="appearance-none rounded pl-8 pr-2 placeholder:text-[#F39508]/[50%] font-sans relative w-full  py-2 bg-[#FFE6C0] placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm" />
    </div>
  ) 
  return (<MainLayout specific={ {
    mobileOnly: <MobileInput />
  } }>{page}</MainLayout>)
}

export default BorrowedBook