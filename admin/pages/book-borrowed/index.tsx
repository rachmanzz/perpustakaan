import MainLayout from '../../components/layout/MainLayout'
import { NextPageWithLayout } from '../_app'

const BorrowedBook: NextPageWithLayout = () => {
  return (
    <div className="container">
        helo borrowed
    </div>
  )
}

BorrowedBook.getLayout = function (page) {
  return (<MainLayout>{page}</MainLayout>)
}

export default BorrowedBook