
import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/layout/MainLayout'
import styles from '../styles/Home.module.css'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <div>
          under construction
        </div>
      </main>
    </div>
  )
}

Home.getLayout = function (page) {

  const leftComponent = {
    component: <h1 className=''>{ process.env.NEXT_PUBLIC_APP_NAME || "PERPUSTAKAAN" }</h1>,
    mobileClassName: 'text-lg text-[#F39508]  font-bold font-jakarta-sans',
    desktopClassName: 'text-[#F39508] text-2xl font-bold font-jakarta-sans'
  }
  return (<MainLayout both={leftComponent}>{page}</MainLayout>)
}

export default Home
