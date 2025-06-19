import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ContactForm } from '../components'

describe('ContactForm component', () => {
  it('renders the form title and description', () => {
    render(<ContactForm />)
    expect(screen.getByText(/how to reach/i)).toBeInTheDocument()
    expect(screen.getByText(/please fill out the form and we will contact you/i)).toBeInTheDocument()
  })

  it('renders all contact method buttons', () => {
    render(<ContactForm />)
    expect(screen.getByText(/telegram/i)).toBeInTheDocument()
    expect(screen.getByText(/viber/i)).toBeInTheDocument()
    expect(screen.getByText(/whatsapp/i)).toBeInTheDocument()
    expect(screen.getByText(/e-mail/i)).toBeInTheDocument()
  })

  it('sets active method on button click', () => {
    render(<ContactForm />)

    const telegramButton = screen.getByText(/telegram/i).closest('button')
    expect(telegramButton).toHaveClass('bg-[#7C3AED]')

    const whatsappButton = screen.getByText(/whatsapp/i).closest('button')
    fireEvent.click(whatsappButton!)

    expect(whatsappButton).toHaveClass('bg-[#7C3AED]')
    expect(telegramButton).toHaveClass('bg-[#F3F3F3]')
  })

  it('renders the name and contact input fields with correct placeholders', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText(/what is your name\?/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/your contact info/i)).toBeInTheDocument()
  })
})

describe('ContactForm submission', () => {
  it('submits the form with filled values', () => {
    const handleSubmit = vi.fn((e) => e.preventDefault())
  
    render(<ContactForm onSubmit={handleSubmit} />)
  
    fireEvent.change(screen.getByPlaceholderText(/what is your name\?/i), {
      target: { value: 'Prince' },
    })
  
    fireEvent.change(screen.getByPlaceholderText(/your contact info/i), {
      target: { value: '@prince_dev' },
    })

    const form = screen.getByTestId('contact-form')
    fireEvent.submit(form)
  
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})