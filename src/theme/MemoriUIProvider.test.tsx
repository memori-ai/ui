import React, { useState } from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import {
  MemoriUIProvider,
  usePortalContainer,
} from './MemoriUIProvider'
import Modal from '../components/Modal/Modal'
import Tooltip from '../components/Tooltip/Tooltip'
import Button from '../components/Button'

function PortalProbe({
  kind,
  label,
}: {
  kind: 'escape' | 'clip'
  label: string
}) {
  const container = usePortalContainer(undefined, kind)
  return (
    <span data-testid={label}>
      {container?.id ?? 'none'}
    </span>
  )
}

describe('MemoriUIProvider portal targets', () => {
  it('routes clip overlays to clipContainer and escape overlays to container', () => {
    function Harness() {
      const [root, setRoot] = useState<HTMLDivElement | null>(null)
      const [surface, setSurface] = useState<HTMLDivElement | null>(null)
      return (
        <div>
          <div
            id="widget-root"
            ref={setRoot}
          />
          <div
            id="widget-surface"
            ref={setSurface}
          />
          <MemoriUIProvider
            container={root}
            clipContainer={surface}
          >
            <PortalProbe
              kind="escape"
              label="escape-target"
            />
            <PortalProbe
              kind="clip"
              label="clip-target"
            />
          </MemoriUIProvider>
        </div>
      )
    }

    render(<Harness />)
    expect(screen.getByTestId('escape-target').textContent).toBe('widget-root')
    expect(screen.getByTestId('clip-target').textContent).toBe(
      'widget-surface',
    )
  })

  it('falls back clip to container when clipContainer is null', () => {
    function Harness() {
      const [root, setRoot] = useState<HTMLDivElement | null>(null)
      return (
        <div>
          <div
            id="widget-root"
            ref={setRoot}
          />
          <MemoriUIProvider
            container={root}
            clipContainer={null}
          >
            <PortalProbe
              kind="clip"
              label="clip-fallback"
            />
          </MemoriUIProvider>
        </div>
      )
    }

    render(<Harness />)
    expect(screen.getByTestId('clip-fallback').textContent).toBe('widget-root')
  })

  it('applies --memori-z-index-base on portal target elements', async () => {
    function Harness() {
      const [root, setRoot] = useState<HTMLDivElement | null>(null)
      return (
        <div>
          <div
            id="widget-root"
            ref={setRoot}
          />
          <MemoriUIProvider
            container={root}
            zIndexBase={10000}
          >
            <span>child</span>
          </MemoriUIProvider>
        </div>
      )
    }

    render(<Harness />)
    await waitFor(() => {
      const root = document.getElementById('widget-root')
      expect(root?.style.getPropertyValue('--memori-z-index-base')).toBe(
        '10000',
      )
    })
  })

  it('Modal portals into clipContainer when provided', async () => {
    function Harness() {
      const [root, setRoot] = useState<HTMLDivElement | null>(null)
      const [surface, setSurface] = useState<HTMLDivElement | null>(null)
      return (
        <div>
          <div
            id="widget-root"
            ref={setRoot}
          />
          <div
            id="widget-surface"
            ref={setSurface}
          />
          <MemoriUIProvider
            container={root}
            clipContainer={surface}
          >
            <Modal
              open
              title="Hello"
              onOpenChange={() => {}}
            >
              <p>Body</p>
            </Modal>
          </MemoriUIProvider>
        </div>
      )
    }

    render(<Harness />)
    await waitFor(() => {
      const surface = document.getElementById('widget-surface')
      expect(surface?.querySelector('.memori-modal__popup')).toBeTruthy()
      expect(
        document.getElementById('widget-root')?.querySelector(
          '.memori-modal__popup',
        ),
      ).toBeNull()
    })
  })

  it('Tooltip portals into container (escape), not clipContainer', async () => {
    function Harness() {
      const [root, setRoot] = useState<HTMLDivElement | null>(null)
      const [surface, setSurface] = useState<HTMLDivElement | null>(null)
      return (
        <div>
          <div
            id="widget-root"
            ref={setRoot}
          />
          <div
            id="widget-surface"
            ref={setSurface}
          />
          <MemoriUIProvider
            container={root}
            clipContainer={surface}
          >
            <Tooltip
              title="Tip"
              open
            >
              <Button>Hover</Button>
            </Tooltip>
          </MemoriUIProvider>
        </div>
      )
    }

    render(<Harness />)
    await waitFor(() => {
      const root = document.getElementById('widget-root')
      expect(root?.querySelector('.memori-tooltip__popup')).toBeTruthy()
      expect(
        document
          .getElementById('widget-surface')
          ?.querySelector('.memori-tooltip__popup'),
      ).toBeNull()
    })
  })
})
