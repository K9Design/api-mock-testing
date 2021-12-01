import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MovieDisplay from './MovieDisplay'

describe("An range of API tests", () => {
  const server = setupServer(
    rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
      return res(ctx.json([{ title: "Castle in the Sky" }]))
    }),
  )

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('loads and displays greeting', async () => {
    render(<MovieDisplay />)

    expect(await screen.findByText('Castle in the Sky')).toBeInTheDocument();
  })

})