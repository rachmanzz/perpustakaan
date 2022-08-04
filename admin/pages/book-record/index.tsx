import { useRouter } from 'next/router'
import BookSearch from '../../components/icon/BookSearch'
import MainLayout from '../../components/layout/MainLayout'
import useLanguage, { LangType } from '../../i18n'
import { NextPageWithLayout } from '../_app'

const BookRecord: NextPageWithLayout = () => {
  return (
    <div className="px-2 pt-2 pb-8 sm:pb-4 sm:px-10">
        <div className="flex flex-col mt-2">
          <div className="flex flex-col overflow-auto rounded border-t-2 bg-white px-10 py-4 border-orange-500">
            {/* item */}
            

            <div className="flex flex-row w-full gap-6 border-b border-orange-300 py-5">
              <div className=" w-28 md:w-32">
                <div className="bg-gray-100 w-28 h-36 md:w-32 md:h-40 rounded-sm"></div>
                <h1 className="mt-5">kategori</h1>
                <div className="flex-wrap flex md:hidden">
                  <span className="text-orange-400 m-1  text-xs font-bold underline font-roboto-opensans">sains</span>
                  <span className="text-orange-400 m-1  text-xs font-bold underline font-roboto-opensans">komedi</span>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <h1 className="font-jakarta-sans uppercase">BUKU LAYANGAN</h1>
                <div>*****</div>

                <div className="flex gap-5 flex-row">
                  <div className="mt-3 w-full relative">
                    <span className="bg-orange-400 shadow py-1 px-2 absolute text-sm font-roboto-opensans text-white right-4 top-0 rounded">edition 1</span>
                    <div className="pt-4">
                      <div className="bg-[#FFE6C0] rounded">
                        <p className="pt-6 pb-3 px-3 ">a web application concept. Bibliophile or not, this is the place to read books of your choice and share it with your friends</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-8/12 lg:w-2/5 flex-col hidden md:flex">
                    <h1 className="font-jakarta-sans font-bold">KATEGORI</h1>
                    <div className="p-2 flex-wrap flex">
                      <span className="bg-[#FFE6C0] m-1 rounded px-2 py-1 text-xs font-bold font-roboto-opensans">sains</span>
                      <span className="bg-[#FFE6C0] m-1 rounded px-2 py-1 text-xs font-bold font-roboto-opensans">komedi</span>
                      <span className="bg-[#FFE6C0] m-1 rounded px-2 py-1 text-xs font-bold font-roboto-opensans">sains</span>
                      <span className="bg-[#FFE6C0] m-1 rounded px-2 py-1 text-xs font-bold font-roboto-opensans">komedi</span>
                      <span className="bg-[#FFE6C0] m-1 rounded px-2 py-1 text-xs font-bold font-roboto-opensans">sains</span>
                      <span className="bg-[#FFE6C0] m-1 rounded px-2 py-1 text-xs font-bold font-roboto-opensans">komedi</span>
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

BookRecord.getLayout = function (page) {
  type componentProp = {lang: LangType}
  const LeftComponent = ({lang}: componentProp) => (
    <div className="relative">
        <span className="absolute inset-y-0 left-0 z-10 flex items-center">
            <span className="py-2 pl-1">
                <BookSearch size={24} />
            </span>
        </span>
        <input id="search-book" name="search" type="text" autoComplete="off" placeholder={lang('search_book_by_book_identifier')} required className="appearance-none rounded pl-8 pr-2 w-full lg:w-1/2 placeholder:text-[#F39508]/[50%] font-roboto-opensans placeholder:font-roboto-opensans relative  py-2 bg-[#FFE6C0] rounded-t-md focus:outline-none sm:text-sm" />
    </div>
  ) 
  return (<MainLayout leftComponent={(_, lang) => <LeftComponent lang={lang} /> }>{page}</MainLayout>)
}

export default BookRecord