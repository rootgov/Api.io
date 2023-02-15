import { render, waitFor } from '@testing-library/react'

import Layout from 'components/Layout'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    // eslint-disable-next-line react/display-name
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    }
  }
})

describe('Layout Component', () => {
  it('matches the snapshot', async () => {
    render(
      <Layout>
        <div>production</div>
      </Layout>
    )
    await waitFor(() => {
      expect(screen).toMatchSnapshot()
    })
  })
  it('renders the page layout with the correct document title', async () => {
    render(
      <Layout title="ATLANTIS.AI">
        <div>App</div>
      </Layout>
    )
    await waitFor(() => {
      expect(document.title).toEqual('Test document title')
    })
  })
})
