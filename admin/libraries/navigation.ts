import BookClockOutline from "../components/icon/BookClockOutline"
import BookShelf from "../components/icon/BookShelf"
import HomeOutline from "../components/icon/HomeOutline"
import ShieldAccountOutline from "../components/icon/ShieldAccountOutline"

// navigation list
const navigation  = [
    {
        id: 'dashboard',
        name: 'Dashboard',
        url: '/',
        icon: () => HomeOutline,
    },
    {
        id: 'book-borrowed',
        name: 'Borrowed',
        url: '/book-borrowed',
        icon: () => BookClockOutline,
    },
    {
        id: 'book-record',
        name: 'Books',
        url: '/book-record',
        icon: () => BookShelf,
    },
    {
        id: 'user-account',
        name: 'Users',
        url: '/user-account',
        icon: () => ShieldAccountOutline,
    }
]
export default navigation