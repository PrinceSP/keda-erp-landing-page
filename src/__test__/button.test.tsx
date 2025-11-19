import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { FaTelegramPlane } from 'react-icons/fa'
import Button from '../components/button'

describe('Reusable Button', () => {
  it('renders the button with correct title', () => {
    render(<Button title="Test Button" />)
    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })

  it('renders left and right icons when provided', () => {
    render(
      <Button
        title="Icon Button"
        leftIcon={<FaTelegramPlane data-testid="left-icon" />}
        rightIcon={<FaTelegramPlane data-testid="right-icon" />}
      />
    )

    expect(screen.getByTestId('left-icon')).toBeInTheDocument()
    expect(screen.getByTestId('right-icon')).toBeInTheDocument()
  })

  it('applies custom containerClass and color', () => {
    const { container } = render(
      <Button
        title="Styled Button"
        containerClass="bg-red-500"
        color="text-green-500"
      />
    )
  
    const button = container.querySelector('button')
    expect(button).toHaveClass('bg-red-500')
  
    const textNode = screen.getByText('Styled Button')
    const span = textNode.closest('span')
    expect(span).toHaveClass('text-green-500')
  })

  it('triggers onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button title="Clickable" onClick={handleClick} />)
    fireEvent.click(screen.getByText('Clickable'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders with custom id', () => {
    render(<Button title="Button with ID" id="custom-id" />)
    expect(screen.getByRole('button')).toHaveAttribute('id', 'custom-id')
  })
})
