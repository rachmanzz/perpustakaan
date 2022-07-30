import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages'

describe('Home', () => {
    it('should render correctly', () => {
        render(<Home />)
        expect(screen.getByText('Next.js!')).toBeInTheDocument()
    })
})