import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Alert,
  AlertProvider,
  AlertViewport,
  useAlertManager,
  createAlertOptions,
  type AlertSeverity,
  type AlertPlacement,
} from './Alert'
import { Undo2, RefreshCw, Bell, Mail, Trash2, Download } from 'lucide-react'

/**
 * Alert component built on @base-ui Toast.
 *
 * Alerts display brief, temporary notifications to users about app processes,
 * such as confirming actions, reporting errors, or providing status updates.
 *
 * ## Features
 * - **Four severity levels**: info, success, warning, error
 * - **Flexible positioning**: 6 placement options
 * - **Auto-dismiss**: Configurable duration or persistent
 * - **Accessible**: Full ARIA support and keyboard navigation
 * - **Swipe to dismiss**: Touch-friendly on mobile devices
 * - **Customizable**: Icons, actions, and styling
 */
const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A toast notification component for displaying temporary messages to users.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Helper component for triggering alerts in stories
 */
interface AlertTriggerProps {
  severity?: AlertSeverity
  title?: string
  description?: string
  closable?: boolean
  showIcon?: boolean
  duration?: number
  icon?: React.ReactNode
  action?: React.ReactNode
  buttonLabel?: string
}

const AlertTrigger: React.FC<AlertTriggerProps> = ({
  severity = 'info',
  title = 'Notification',
  description,
  closable = true,
  showIcon = true,
  duration,
  icon,
  action,
  buttonLabel = 'Show Alert',
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
        icon,
        action,
      }),
    )
  }

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '12px 24px',
        fontSize: '14px',
        fontWeight: 500,
        color: 'white',
        backgroundColor: 'var(--memori-primary)',
        border: 'none',
        borderRadius: 'var(--memori-radius-selector)',
        cursor: 'pointer',
      }}
    >
      {buttonLabel}
    </button>
  )
}

/**
 * Story wrapper with AlertProvider
 */
interface StoryWrapperProps {
  children: React.ReactNode
  placement?: AlertPlacement
  defaultDuration?: number
}

const StoryWrapper: React.FC<StoryWrapperProps> = ({
  children,
  placement = 'top-end',
  defaultDuration = 5000,
}) => {
  return (
    <AlertProvider defaultDuration={defaultDuration}>
      {children}
      <AlertViewport placement={placement} />
    </AlertProvider>
  )
}

/**
 * Default alert with info severity
 */
export const Default: Story = {
  render: () => (
    <StoryWrapper>
      <AlertTrigger
        title="Information"
        description="This is an informative alert message."
      />
    </StoryWrapper>
  ),
}

/**
 * Success alert for positive feedback
 */
export const Success: Story = {
  render: () => (
    <StoryWrapper>
      <AlertTrigger
        severity="success"
        title="Success!"
        description="Your changes have been saved successfully."
        buttonLabel="Show Success"
      />
    </StoryWrapper>
  ),
}

/**
 * Warning alert for cautionary messages
 */
export const Warning: Story = {
  render: () => (
    <StoryWrapper>
      <AlertTrigger
        severity="warning"
        title="Warning"
        description="Please review this important information before proceeding."
        buttonLabel="Show Warning"
      />
    </StoryWrapper>
  ),
}

/**
 * Error alert for critical issues
 */
export const Error: Story = {
  render: () => (
    <StoryWrapper>
      <AlertTrigger
        severity="error"
        title="Error"
        description="An error occurred while processing your request. Please try again."
        buttonLabel="Show Error"
      />
    </StoryWrapper>
  ),
}

/**
 * Alert with a custom action button
 */
export const WithAction: Story = {
  render: () => (
    <StoryWrapper>
      <AlertTrigger
        severity="info"
        title="Update Available"
        description="A new version is available for download."
        action={
          <button
            onClick={() => console.log('Action clicked')}
            style={{
              padding: '6px 12px',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--memori-primary)',
              backgroundColor: 'transparent',
              border: '1px solid var(--memori-primary)',
              borderRadius: 'var(--memori-radius-selector)',
              cursor: 'pointer',
            }}
          >
            Update
          </button>
        }
        buttonLabel="Show with Action"
      />
    </StoryWrapper>
  ),
}

/**
 * Alert with an undo action
 */
export const WithUndoAction: Story = {
  render: () => (
    <StoryWrapper>
      <AlertTrigger
        severity="success"
        title="Item Deleted"
        description="The item has been moved to trash."
        action={
          <button
            onClick={() => console.log('Undo clicked')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--memori-success)',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <Undo2 size={14} />
            Undo
          </button>
        }
        buttonLabel="Delete Item"
      />
    </StoryWrapper>
  ),
}

/**
 * Alert with custom icon
 */
export const CustomIcon: Story = {
  render: () => (
    <StoryWrapper>
      <div style={{ display: 'flex', gap: '12px' }}>
        <AlertTrigger
          severity="info"
          title="New Message"
          description="You have received a new message."
          icon={<Mail size={20} />}
          buttonLabel="Message Alert"
        />
        <AlertTrigger
          severity="info"
          title="New Notification"
          description="You have 3 new notifications."
          icon={<Bell size={20} />}
          buttonLabel="Notification Alert"
        />
        <AlertTrigger
          severity="info"
          title="Download Complete"
          description="Your file has been downloaded."
          icon={<Download size={20} />}
          buttonLabel="Download Alert"
        />
      </div>
    </StoryWrapper>
  ),
}

/**
 * Alert with only description (no title)
 */
export const DescriptionOnly: Story = {
  render: () => (
    <StoryWrapper>
      <AlertTrigger
        severity="info"
        description="Your session will expire in 5 minutes."
        buttonLabel="Show Description Only"
      />
    </StoryWrapper>
  ),
}

/**
 * Persistent alert that doesn't auto-dismiss
 */
export const Persistent: Story = {
  render: () => (
    <StoryWrapper defaultDuration={0}>
      <AlertTrigger
        severity="error"
        title="Connection Lost"
        description="Please check your internet connection and try again."
        duration={0}
        buttonLabel="Show Persistent"
      />
    </StoryWrapper>
  ),
}

/**
 * Alert placement at top-start
 */
export const PlacementTopStart: Story = {
  render: () => (
    <StoryWrapper placement="top-start">
      <AlertTrigger
        title="Top Start"
        description="This alert appears at the top-start position."
        buttonLabel="Top Start"
      />
    </StoryWrapper>
  ),
}

/**
 * Alert placement at top-center
 */
export const PlacementTopCenter: Story = {
  render: () => (
    <StoryWrapper placement="top-center">
      <AlertTrigger
        title="Top Center"
        description="This alert appears at the top-center position."
        buttonLabel="Top Center"
      />
    </StoryWrapper>
  ),
}

/**
 * Alert placement at bottom-end
 */
export const PlacementBottomEnd: Story = {
  render: () => (
    <StoryWrapper placement="bottom-end">
      <AlertTrigger
        title="Bottom End"
        description="This alert appears at the bottom-end position."
        buttonLabel="Bottom End"
      />
    </StoryWrapper>
  ),
}

/**
 * Multiple alerts stacking
 */
export const MultipleAlerts: Story = {
  render: () => {
    const MultipleAlertsTrigger = () => {
      const alertManager = useAlertManager()

      const handleClick = () => {
        const severities: AlertSeverity[] = [
          'info',
          'success',
          'warning',
          'error',
        ]
        const messages = [
          { title: 'Info', description: 'This is an info message.' },
          { title: 'Success', description: 'Operation completed!' },
          { title: 'Warning', description: 'Please be careful.' },
          { title: 'Error', description: 'Something went wrong.' },
        ]

        severities.forEach((severity, index) => {
          const message = messages[index]
          if (!message) return
          setTimeout(() => {
            alertManager.add(
              createAlertOptions({
                severity,
                title: message.title,
                description: message.description,
              }),
            )
          }, index * 300)
        })
      }

      return (
        <button
          onClick={handleClick}
          style={{
            padding: '12px 24px',
            fontSize: '14px',
            fontWeight: 500,
            color: 'white',
            backgroundColor: 'var(--memori-primary)',
            border: 'none',
            borderRadius: 'var(--memori-radius-selector)',
            cursor: 'pointer',
          }}
        >
          Show Multiple Alerts
        </button>
      )
    }

    return (
      <StoryWrapper>
        <MultipleAlertsTrigger />
      </StoryWrapper>
    )
  },
}

/**
 * Long content alert
 */
export const LongContent: Story = {
  render: () => (
    <StoryWrapper>
      <AlertTrigger
        severity="info"
        title="Important Update About Your Account"
        description="We have updated our privacy policy and terms of service. Please review the changes carefully as they affect how we handle your data. You can find the full document in your account settings."
        buttonLabel="Show Long Content"
      />
    </StoryWrapper>
  ),
}

/**
 * Real-world example: Delete with undo
 */
export const DeleteWithUndo: Story = {
  render: () => {
    const DeleteExample = () => {
      const alertManager = useAlertManager()
      const [items, setItems] = React.useState(['Item 1', 'Item 2', 'Item 3'])

      const handleDelete = (item: string, index: number) => {
        const newItems = items.filter((_, i) => i !== index)
        setItems(newItems)

        alertManager.add(
          createAlertOptions({
            severity: 'success',
            title: `"${item}" deleted`,
            icon: <Trash2 size={20} />,
            duration: 6000,
            action: (
              <button
                onClick={() => {
                  // Restore the item
                  const restored = [...newItems]
                  restored.splice(index, 0, item)
                  setItems(restored)
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'var(--memori-success)',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <Undo2 size={14} />
                Undo
              </button>
            ),
          }),
        )
      }

      return (
        <div style={{ minWidth: '200px' }}>
          <h4 style={{ margin: '0 0 12px 0', fontSize: '14px' }}>
            Your Items ({items.length})
          </h4>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {items.map((item, index) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '8px 12px',
                  backgroundColor: 'var(--memori-secondary-background)',
                  borderRadius: 'var(--memori-radius-box)',
                }}
              >
                {item}
                <button
                  onClick={() => handleDelete(item, index)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    height: '28px',
                    padding: 0,
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderRadius: 'var(--memori-radius-box)',
                    color: 'var(--memori-error)',
                    cursor: 'pointer',
                  }}
                  aria-label={`Delete ${item}`}
                >
                  <Trash2 size={16} />
                </button>
              </li>
            ))}
          </ul>
          {items.length === 0 && (
            <p style={{ color: 'var(--memori-neutral)', fontSize: '14px' }}>
              No items remaining
            </p>
          )}
        </div>
      )
    }

    return (
      <StoryWrapper>
        <DeleteExample />
      </StoryWrapper>
    )
  },
}
