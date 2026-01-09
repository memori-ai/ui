import * as React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import {
  Alert,
  AlertProvider,
  AlertViewport,
  useAlertManager,
  getDefaultIcon,
  createAlertOptions,
  type AlertSeverity,
} from './Alert'

/**
 * Test wrapper with AlertProvider
 */
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AlertProvider defaultDuration={5000}>
    {children}
    <AlertViewport placement="top-end" />
  </AlertProvider>
)

/**
 * Helper component to trigger alerts in tests
 */
const AlertTrigger: React.FC<{
  severity?: AlertSeverity
  title?: string
  description?: string
  closable?: boolean
  showIcon?: boolean
  duration?: number
  action?: React.ReactNode
  onClose?: () => void
}> = ({
  severity = 'info',
  title = 'Test Alert',
  description,
  closable = true,
  showIcon = true,
  duration,
  action,
  onClose,
}) => {
  const alertManager = useAlertManager()

  const handleClick = () => {
    alertManager.add(
      createAlertOptions({
        title,
        description,
        severity,
        closable,
        showIcon,
        duration,
        action,
        onClose,
      }),
    )
  }

  return (
    <button
      onClick={handleClick}
      data-testid="trigger"
    >
      Show Alert
    </button>
  )
}

describe('Alert Component', () => {
  describe('Rendering', () => {
    it('renders alert when triggered', async () => {
      render(
        <TestWrapper>
          <AlertTrigger title="Test Alert Title" />
        </TestWrapper>,
      )

      fireEvent.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByText('Test Alert Title')).toBeInTheDocument()
      })
    })

    it('renders alert with description', async () => {
      render(
        <TestWrapper>
          <AlertTrigger
            title="Test Title"
            description="Test description message"
          />
        </TestWrapper>,
      )

      fireEvent.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByText('Test Title')).toBeInTheDocument()
        expect(screen.getByText('Test description message')).toBeInTheDocument()
      })
    })

    it('renders alert without icon when showIcon is false', async () => {
      render(
        <TestWrapper>
          <AlertTrigger
            title="No Icon Alert"
            showIcon={false}
          />
        </TestWrapper>,
      )

      fireEvent.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByText('No Icon Alert')).toBeInTheDocument()
      })
    })

    it('renders alert with custom action', async () => {
      const actionClick = vi.fn()

      render(
        <TestWrapper>
          <AlertTrigger
            title="Action Alert"
            action={
              <button
                onClick={actionClick}
                data-testid="custom-action"
              >
                Custom Action
              </button>
            }
          />
        </TestWrapper>,
      )

      fireEvent.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByTestId('custom-action')).toBeInTheDocument()
      })

      fireEvent.click(screen.getByTestId('custom-action'))
      expect(actionClick).toHaveBeenCalled()
    })
  })

  describe('Severity Variants', () => {
    const severities: AlertSeverity[] = ['info', 'success', 'warning', 'error']

    severities.forEach(severity => {
      it(`renders ${severity} alert`, async () => {
        render(
          <TestWrapper>
            <AlertTrigger
              severity={severity}
              title={`${severity} Alert`}
            />
          </TestWrapper>,
        )

        fireEvent.click(screen.getByTestId('trigger'))

        await waitFor(() => {
          expect(screen.getByText(`${severity} Alert`)).toBeInTheDocument()
        })
      })
    })
  })

  describe('Close Functionality', () => {
    it('shows close button when closable is true', async () => {
      render(
        <TestWrapper>
          <AlertTrigger
            title="Closable Alert"
            closable={true}
          />
        </TestWrapper>,
      )

      fireEvent.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByLabelText('Close alert')).toBeInTheDocument()
      })
    })

    it('hides close button when closable is false', async () => {
      render(
        <TestWrapper>
          <AlertTrigger
            title="Non-closable Alert"
            closable={false}
          />
        </TestWrapper>,
      )

      fireEvent.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByText('Non-closable Alert')).toBeInTheDocument()
        expect(screen.queryByLabelText('Close alert')).not.toBeInTheDocument()
      })
    })

    it('calls onClose callback when close button is clicked', async () => {
      const onClose = vi.fn()

      render(
        <TestWrapper>
          <AlertTrigger
            title="Closable Alert"
            onClose={onClose}
          />
        </TestWrapper>,
      )

      fireEvent.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByLabelText('Close alert')).toBeInTheDocument()
      })

      fireEvent.click(screen.getByLabelText('Close alert'))

      await waitFor(() => {
        expect(onClose).toHaveBeenCalled()
      })
    })
  })

  describe('Multiple Alerts', () => {
    it('can display multiple alerts', async () => {
      const MultipleTrigger: React.FC = () => {
        const alertManager = useAlertManager()

        const handleClick = () => {
          alertManager.add(createAlertOptions({ title: 'Alert 1' }))
          alertManager.add(createAlertOptions({ title: 'Alert 2' }))
          alertManager.add(createAlertOptions({ title: 'Alert 3' }))
        }

        return (
          <button
            onClick={handleClick}
            data-testid="multi-trigger"
          >
            Show Multiple
          </button>
        )
      }

      render(
        <TestWrapper>
          <MultipleTrigger />
        </TestWrapper>,
      )

      fireEvent.click(screen.getByTestId('multi-trigger'))

      await waitFor(() => {
        expect(screen.getByText('Alert 1')).toBeInTheDocument()
        expect(screen.getByText('Alert 2')).toBeInTheDocument()
        expect(screen.getByText('Alert 3')).toBeInTheDocument()
      })
    })
  })

  describe('createAlertOptions helper', () => {
    it('creates proper toast options from alert options', () => {
      const options = createAlertOptions({
        title: 'Test Title',
        description: 'Test Description',
        severity: 'success',
        closable: true,
        showIcon: true,
      })

      expect(options.title).toBe('Test Title')
      expect(options.description).toBe('Test Description')
      expect(options.data?.severity).toBe('success')
      expect(options.data?.closable).toBe(true)
      expect(options.data?.showIcon).toBe(true)
    })

    it('handles duration correctly', () => {
      const options = createAlertOptions({
        title: 'Test',
        duration: 3000,
      })

      expect(options.timeout).toBe(3000)
    })
  })

  describe('getDefaultIcon helper', () => {
    it('returns correct icon for each severity', () => {
      const infoIcon = getDefaultIcon('info')
      const successIcon = getDefaultIcon('success')
      const warningIcon = getDefaultIcon('warning')
      const errorIcon = getDefaultIcon('error')

      expect(infoIcon).toBeDefined()
      expect(successIcon).toBeDefined()
      expect(warningIcon).toBeDefined()
      expect(errorIcon).toBeDefined()
    })
  })

  describe('AlertViewport', () => {
    it('renders with default placement', () => {
      const { container } = render(
        <AlertProvider>
          <AlertViewport />
        </AlertProvider>,
      )

      const viewport = container.querySelector('.memori-alert-viewport')
      expect(viewport).toBeInTheDocument()
    })

    it('renders with custom className', () => {
      const { container } = render(
        <AlertProvider>
          <AlertViewport className="custom-viewport" />
        </AlertProvider>,
      )

      const viewport = container.querySelector('.custom-viewport')
      expect(viewport).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('close button has accessible label', async () => {
      render(
        <TestWrapper>
          <AlertTrigger title="Accessible Alert" />
        </TestWrapper>,
      )

      fireEvent.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        const closeButton = screen.getByLabelText('Close alert')
        expect(closeButton).toBeInTheDocument()
        expect(closeButton.tagName.toLowerCase()).toBe('button')
      })
    })

    it('renders icon with proper accessibility', async () => {
      render(
        <TestWrapper>
          <AlertTrigger
            title="Icon Alert"
            showIcon={true}
          />
        </TestWrapper>,
      )

      fireEvent.click(screen.getByTestId('trigger'))

      await waitFor(() => {
        expect(screen.getByText('Icon Alert')).toBeInTheDocument()
      })

      // Check that the alert contains SVG icons (from lucide-react)
      // which should have aria-hidden="true" on them
      const alertTitle = screen.getByText('Icon Alert')
      const alertContainer = alertTitle.parentElement?.parentElement
      const svgIcon = alertContainer?.querySelector('svg')
      expect(svgIcon).toBeInTheDocument()
      expect(svgIcon).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('Snapshot', () => {
    it('renders AlertProvider and AlertViewport unchanged', () => {
      const { container } = render(
        <AlertProvider defaultDuration={5000}>
          <AlertViewport placement="top-end" />
        </AlertProvider>,
      )
      expect(container).toMatchSnapshot()
    })
  })
})
