import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('increments count by 5 when clicking the counter button', async () => {
    render(<App />)

    const button = screen.getByRole('button', { name: /count is/i })
    expect(button).toHaveTextContent('count is 0')

    await userEvent.click(button)
    expect(button).toHaveTextContent('count is 5')

    await userEvent.click(button)
    expect(button).toHaveTextContent('count is 10')
  })

  it('opens and closes the fun modal', async () => {
    render(<App />)

    const funButton = screen.getByRole('button', { name: /click me for more fun/i })
    await userEvent.click(funButton)

    const modalText = screen.getByText(/why did the developer go broke/i)
    expect(modalText).toBeInTheDocument()

    const closeButton = screen.getByRole('button', { name: /close/i })
    await userEvent.click(closeButton)

    expect(modalText).not.toBeInTheDocument()
  })
})
