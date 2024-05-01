import { screen, render } from '@testing-library/react'
import TExtDisplay from './TExtDisplay'

describe('TExtDisplay component', () => {

    test('renders Hello h2 tag', () => {
        // Arrange
        render(<TExtDisplay />)
        const linkElement = screen.getByText(/Hello/i)
        expect(linkElement).toBeInTheDocument();
        // Act
        //Assert
    })
})
