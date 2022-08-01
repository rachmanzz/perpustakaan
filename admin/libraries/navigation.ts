import BookClockOutline from "../components/icon/BookClockOutline"
import BookShelf from "../components/icon/BookShelf"
import HomeOutline from "../components/icon/HomeOutline"
import ShieldAccountOutline from "../components/icon/ShieldAccountOutline"

// navigation list
const navigation  = [
    {
        name: 'Dashboard',
        url: '/',
        icon: () => HomeOutline,
    },
    {
        name: 'Borrowed',
        url: '/book-borrowed',
        icon: () => BookClockOutline,
    },
    {
        name: 'Books',
        url: '/book-record',
        icon: () => BookShelf,
    },
    {
        name: 'Users',
        url: '/user-account',
        icon: () => ShieldAccountOutline,
    }
]
export default navigation