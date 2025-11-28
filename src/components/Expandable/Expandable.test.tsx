import { render } from '@testing-library/react'
import { expect, it } from 'vitest'
import Expandable from './Expandable'

// Check if we're in CI mode (jsdom environment) vs browser mode
// In browser mode, we want to run all tests; in CI (jsdom), skip snapshot tests
const isCI = typeof process !== 'undefined' && process.env.CI === 'true'

it('renders Expandable unchanged', () => {
  const { container } = render(<Expandable rows={1}>Test</Expandable>)
  expect(container).toMatchSnapshot()
})

it.skipIf(isCI)('renders Expandable with long text unchanged', () => {
  const { container } = render(
    <Expandable rows={1}>
      Suspendisse a sodales nulla, sed semper nisi. Suspendisse a sodales nulla,
      sed semper nisi. Suspendisse a sodales nulla, sed semper nisi. Suspendisse
      a sodales nulla, sed semper nisi. Suspendisse a sodales nulla, sed semper
      nisi.
    </Expandable>,
  )
  expect(container).toMatchSnapshot()
})

it.skipIf(isCI)('renders Expandable with multiple rows unchanged', () => {
  const { container } = render(
    <Expandable rows={3}>
      Suspendisse a sodales nulla, sed semper nisi. Suspendisse a sodales nulla,
      sed semper nisi. Suspendisse a sodales nulla, sed semper nisi. Suspendisse
      a sodales nulla, sed semper nisi. Suspendisse a sodales nulla, sed semper
      nisi.
    </Expandable>,
  )
  expect(container).toMatchSnapshot()
})

it.skipIf(isCI)(
  'renders Expandable with custom wrapper CSS class unchanged',
  () => {
    const { container } = render(
      <Expandable
        rows={1}
        className="test"
      >
        Suspendisse a sodales nulla, sed semper nisi. Suspendisse a sodales
        nulla, sed semper nisi. Suspendisse a sodales nulla, sed semper nisi.
        Suspendisse a sodales nulla, sed semper nisi. Suspendisse a sodales
        nulla, sed semper nisi.
      </Expandable>,
    )
    expect(container).toMatchSnapshot()
  },
)

it.skipIf(isCI)(
  'renders Expandable with custom inner CSS class unchanged',
  () => {
    const { container } = render(
      <Expandable
        rows={1}
        innerClassName="test"
      >
        Suspendisse a sodales nulla, sed semper nisi. Suspendisse a sodales
        nulla, sed semper nisi. Suspendisse a sodales nulla, sed semper nisi.
        Suspendisse a sodales nulla, sed semper nisi. Suspendisse a sodales
        nulla, sed semper nisi.
      </Expandable>,
    )
    expect(container).toMatchSnapshot()
  },
)

it.skipIf(isCI)(
  'renders Expandable with custom button CSS class unchanged',
  () => {
    const { container } = render(
      <Expandable
        rows={1}
        btnClassName="test"
      >
        Suspendisse a sodales nulla, sed semper nisi. Suspendisse a sodales
        nulla, sed semper nisi. Suspendisse a sodales nulla, sed semper nisi.
        Suspendisse a sodales nulla, sed semper nisi. Suspendisse a sodales
        nulla, sed semper nisi.
      </Expandable>,
    )
    expect(container).toMatchSnapshot()
  },
)

it.skipIf(isCI)(
  'renders Expandable with custom expand symbol unchanged',
  () => {
    const { container } = render(
      <Expandable
        rows={1}
        expandSymbol={() => 'test'}
      >
        Suspendisse a sodales nulla, sed semper nisi. Suspendisse a sodales
        nulla, sed semper nisi. Suspendisse a sodales nulla, sed semper nisi.
        Suspendisse a sodales nulla, sed semper nisi. Suspendisse a sodales
        nulla, sed semper nisi.
      </Expandable>,
    )
    expect(container).toMatchSnapshot()
  },
)

it.skipIf(isCI)(
  'renders Expandable with custom collapse symbol unchanged',
  () => {
    const { container } = render(
      <Expandable
        rows={1}
        collapseSymbol={() => 'test collapse'}
        defaultExpanded
      >
        Suspendisse a sodales nulla, sed semper nisi. Suspendisse a sodales
        nulla, sed semper nisi. Suspendisse a sodales nulla, sed semper nisi.
        Suspendisse a sodales nulla, sed semper nisi. Suspendisse a sodales
        nulla, sed semper nisi.
      </Expandable>,
    )
    expect(container).toMatchSnapshot()
  },
)

it.skipIf(isCI)('renders Expandable with JSX markup unchanged', () => {
  const { container } = render(
    <Expandable rows={1}>
      <h1>Lorem ipsum</h1>
      <p>Suspendisse a sodales nulla, sed semper nisi.</p>
      <h2>Suspendisse a sodales nulla, sed semper nisi.</h2>
      <p>Suspendisse a sodales nulla, sed semper nisi.</p>
      <p>Suspendisse a sodales nulla, sed semper nisi.</p>
      <button>Dolor sit amet</button>
      <p>Suspendisse a sodales nulla, sed semper nisi.</p>
      <p>Suspendisse a sodales nulla, sed semper nisi.</p>
    </Expandable>,
  )
  expect(container).toMatchSnapshot()
})
