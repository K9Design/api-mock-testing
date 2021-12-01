import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MovieDisplay from './MovieDisplay'

const server = setupServer(
  rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
    return res(ctx.json([{ title: "Castle in the Sky" }]))
  }),
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe("Mocking API calls", () => {
  test('test data is correctly displayed', async () => {
    render(<MovieDisplay />)

    expect(await screen.findByText('Castle in the Sky')).toBeInTheDocument();
  })
})

describe("Mocking API 500 error response", () => {
  test('test bad server responding 500', async () => {
    server.use(
      rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
        return res.once(ctx.status(500))
      }),
    );
    render(<MovieDisplay />)

    expect(await screen.findByText(/code 500/i)).toBeInTheDocument();
  })
})

describe("Mocking API 418 error response", () => {
  test('test bad server responding teapot', async () => {
    server.use(
      rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
        return res.once(ctx.status(418))
      }),
    );

    render(<MovieDisplay />)

    expect(await screen.findByText(/418 I'm a tea pot 🫖, silly/i)).toBeInTheDocument();
  })
})