import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ContactModal } from '../components'

describe('ContactModal component', () => {
  it('does not render when isOpen is false', () => {
    const { container } = render(
      <ContactModal isOpen={false} onClose={() => { }}>
        <div>Modal Content</div>
      </ContactModal>
    )
    expect(container.firstChild).toBeNull()
  })

  it('renders modal content when isOpen is true', () => {
    render(
      <ContactModal isOpen={true} onClose={() => { }}>
        <div>Modal Content</div>
      </ContactModal>
    )
    expect(screen.getByText(/modal content/i)).toBeInTheDocument()
  })

  it('calls onClose when clicking on the close button', () => {
    const handleClose = vi.fn()

    render(
      <ContactModal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </ContactModal>
    )

    const closeButton = screen.getByRole('button')
    fireEvent.click(closeButton)

    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose when clicking inside the modal content', () => {
    const handleClose = vi.fn()

    render(
      <ContactModal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </ContactModal>
    )

    const content = screen.getByText(/modal content/i).parentElement
    fireEvent.click(content!)

    expect(handleClose).not.toHaveBeenCalled()
  })

  it('renders the close button', () => {
    render(
      <ContactModal isOpen={true} onClose={() => { }}>
        <div>Modal Content</div>
      </ContactModal>
    )
    const closeButton = screen.getByRole('button')
    expect(closeButton).toBeInTheDocument()
  })
})
