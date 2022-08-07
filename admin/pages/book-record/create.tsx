import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import BookSearch from '../../components/icon/BookSearch'
import BookShelf from '../../components/icon/BookShelf'
import StarIcon from '../../components/icon/StarIcon'
import BreadCrumb from '../../components/items/BreadCrumb'
import MainLayout from '../../components/layout/MainLayout'
import useLanguage, { LangType } from '../../i18n'
import { NextPageWithLayout } from '../_app'

const RecordNewBook: NextPageWithLayout = () => {
  const route = useRouter()
  const BookProfile = () => (
    <React.Fragment>
      <h2 className="font-bold mb-2 uppercase">BOOK DATA</h2>
      <div className="flex flex-col xl:grid xl:grid-cols-2 xl:gap-5">
        <div className="flex mt-2 flex-col">
            <label className="text-orange-500 font-roboto-opensans">Book Name</label>
            <input className="w-full p-2 border border-orange-200 focus:border-orange-400 outline-none focus:border-2 rounded" type="text" />
        </div>
        <div className="flex mt-2 flex-col">
            <label className="text-orange-500 font-roboto-opensans">ISBN</label>
            <input className="w-full p-2 border border-orange-200 focus:border-orange-400 outline-none focus:border-2 rounded" type="text" />
        </div>
        <div className="flex mt-2 flex-col">
            <label className="text-orange-500 font-roboto-opensans">Edition</label>
            <input className="w-full p-2 border border-orange-200 focus:border-orange-400 outline-none focus:border-2 rounded" type="text" />
        </div>
        <div className="flex mt-2 flex-col">
            <label className="text-orange-500 font-roboto-opensans">Publisher</label>
            <input className="w-full p-2 border border-orange-200 focus:border-orange-400 outline-none focus:border-2 rounded" type="text" />
        </div>
        <div className="flex mt-2 flex-col">
            <label className="text-orange-500 font-roboto-opensans">Published in</label>
            <input className="w-full p-2 border border-orange-200 focus:border-orange-400 outline-none focus:border-2 rounded" type="date" />
        </div>
        <div className="flex mt-2 flex-col">
            <label className="text-orange-500 font-roboto-opensans">Book languange</label>
            <input className="w-full p-2 border border-orange-200 focus:border-orange-400 outline-none focus:border-2 rounded" type="text" />
        </div>
      </div>
    </React.Fragment>
  )

  const MultipleLanguage = () => (
    <React.Fragment><p>kami menemukan lebih dari satu bahasa pada sistem, apakah kamu ingin membuat deskripsi dalam beberapa bahasa ?</p></React.Fragment>
  )

  const BookDetail = () => (
    <React.Fragment>
      <h2 className="font-bold mb-2 uppercase">Detail Buku</h2>
      <div>
        {route?.locales  && route.locales.length > 1 ? <MultipleLanguage /> : <BookProfile />}
      </div>
      <div className="flex flex-col xl:grid xl:grid-cols-2 xl:gap-5"></div>
    </React.Fragment>
  )
  return (
    <div className="px-2 pt-2 pb-8 sm:pb-4 sm:px-10">
        <div className="flex flex-col mt-2">
          <BreadCrumb className="font-roboto-opensans font-normal text-sm text-gray-500" activeClass="font-roboto-opensans font-normal text-sm text-gray-400" items={[
              { item: "book record", href: "/book-record", icon: () => <BookShelf size={18} color="rgb(107 114 128)"/> },
              { item: "create", href: "/book-record/create" }
            ]} />
          <div className="mt-3 mb-5 flex flex-row justify-between">
            <div className="flex pt-2 justify-center items-center">
              <h1 className=" uppercase text-xl font-bold text-gray-500">ADD NEW BOOK</h1>
            </div>
            <div className="flex flex-row">
               
            </div>
          </div>
          <div className="flex flex-col overflow-auto rounded px-1 py-2 md:px-10 md:py-4 md:border-t-2 md:border-orange-500 md:bg-white">
            {/* item */}
            <div className="flex flex-col gap-3 md:gap-10  md:flex-row">
                <div className="bg-white border-t-2 md:bg-inherit md:border-none flex items-center p-2 rounded overflow-hidden flex-col justify-center md:justify-start border-orange-500">
                    <div className="h-[400px] w-[300px] md:h-[300px] md:w-[270px] bg-gray-300"></div>
                </div>

                <div className="bg-white border-t-2 w-full md:pl-5  p-2 rounded overflow-hidden  md:border-t-0 md:border-l md:rounded-none md:border-orange-200 border-orange-500">
                    
                    <BookProfile />

                    <div className="flex flex-row mt-10 justify-end">
                      <button className="bg-orange-500 hover:bg-orange-400 text-white font-roboto-opensans font-normal text-sm md:text-lg px-4 py-2 rounded focus:outline-none focus:shadow-outline">
                        Next 
                      </button>
                    </div>
                    
                </div>

            </div>

            
          </div>
        </div>
    </div>
  )
}

RecordNewBook.getLayout = function (page) {
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

export default RecordNewBook