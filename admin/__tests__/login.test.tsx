import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from '../pages/auth/login'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe("check switch language", () => {
    it('language should be english', () => {
        useRouter.mockImplementationOnce(() => ({
            locale: 'en',
            locales: ['en', 'id'],
        }))
        render(<Login />)
        expect(screen.getByText('Enter your account')).toBeInTheDocument()

    })

    it('language should be indonesian', () => {
        useRouter.mockImplementationOnce(() => ({
            locale: 'id',
            locales: ['en', 'id'],
        }))
        render(<Login />)
        expect(screen.getByText('Masuk ke akun Anda')).toBeInTheDocument()

    })
})