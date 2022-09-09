import React from "react"
import BookClockOutline from "../components/icon/BookClockOutline"
import BookShelf from "../components/icon/BookShelf"
import CardAccountOutline from "../components/icon/CardAccountOutline"
import HomeOutline from "../components/icon/HomeOutline"
import MarkerRadiusOutline from "../components/icon/MarkerRadiusOutline"
import ShieldAccountOutline from "../components/icon/ShieldAccountOutline"

// navigation list
const navigation: {id: string, name: string, url: string, icon: () => any, hidden?: 'mobile'|'desktop'}[]  = [
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
    },
    {
        id: 'region',
        name: 'Region',
        url: '/region',
        icon: () => MarkerRadiusOutline,
        hidden: 'mobile',
    },
    {
        id: 'card',
        name: 'Card',
        url: '/card',
        icon: () => CardAccountOutline,
        hidden: 'mobile',
    }
]
export default navigation