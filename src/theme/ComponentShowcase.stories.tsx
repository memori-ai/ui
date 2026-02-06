import React, { useEffect, useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react-vite'
import { Button } from '../components/Button'
import Card from '../components/Card'
import {
  AlertProvider,
  AlertViewport,
  useAlertManager,
  createAlertOptions,
} from '../components/Alert'
import { Input } from '../components/Input'
import { Checkbox } from '../components/Checkbox'
import { SelectBox } from '../components/SelectBox'
import { Slider } from '../components/Slider'
import { Tooltip } from '../components/Tooltip'
import { Collapsible } from '../components/Collapsible'
import { Expandable } from '../components/Expandable'
import { Spin } from '../components/Spin'
import { Modal } from '../components/Modal'
import Drawer from '../components/Drawer'
import './variables.css'
import { Dropdown } from '../components/Dropdown'

// Theme wrapper component
const ThemeWrapper = ({
  theme,
  children,
}: {
  theme: 'light' | 'dark'
  children: React.ReactNode
}) => {
  useEffect(() => {
    const root = document.documentElement
    root.removeAttribute('data-theme')
    root.classList.remove('dark')

    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark')
      root.classList.add('dark')
    }
  }, [theme])

  return <>{children}</>
}

const ComponentShowcaseContent = ({ theme }: { theme: 'light' | 'dark' }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [checkboxChecked, setCheckboxChecked] = useState(true)
  const [selectValue, setSelectValue] = useState<string | null>('option1')
  const [sliderValue, setSliderValue] = useState(50)
  const [inputValue, setInputValue] = useState('Sample text')
  const alertManager = useAlertManager()

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3', disabled: true },
    { value: 'option4', label: 'Option 4' },
  ]

  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <ThemeWrapper theme={theme}>
      <div
        style={{
          padding: 'var(--memori-spacing-xl)',
          paddingLeft:
            'clamp(var(--memori-spacing-sm), 4vw, var(--memori-spacing-xl))',
          paddingRight:
            'clamp(var(--memori-spacing-sm), 4vw, var(--memori-spacing-xl))',
          backgroundColor: 'var(--memori-main-background)',
          minHeight: '100vh',
          fontFamily: 'var(--memori-font-family)',
          color: 'var(--memori-text-color)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--memori-spacing-xl)',
          }}
        >
          {/* Header */}
          <Card
            variant="elevated"
            padding="lg"
          >
            <h1
              style={{
                fontSize: 'var(--memori-text-size-heading-xlarge)',
                fontWeight: 'var(--memori-text-weight-bold)',
                marginBottom: 'var(--memori-spacing-md)',
                color: 'var(--memori-text-color)',
              }}
            >
              Component Showcase - {theme === 'light' ? 'Light' : 'Dark'} Theme
            </h1>
            <p
              style={{
                fontSize: 'var(--memori-text-size-base)',
                color: 'var(--memori-text-color)',
                marginBottom: 'var(--memori-spacing-lg)',
              }}
            >
              This page demonstrates all UI components working together in a{' '}
              {theme === 'light' ? 'light' : 'dark'} theme environment.
            </p>
          </Card>

          {/* Alerts Section */}
          <Card
            variant="elevated"
            padding="lg"
            title="Alerts"
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--memori-spacing-md)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--memori-spacing-sm)',
                  marginBottom: 'var(--memori-spacing-md)',
                }}
              >
                <Button
                  variant="primary"
                  onClick={() =>
                    alertManager.add(
                      createAlertOptions({
                        severity: 'info',
                        title: 'Information Alert',
                        description:
                          'This is an informational message to help users understand what is happening.',
                        closable: true,
                      }),
                    )
                  }
                >
                  Show Info Alert
                </Button>
                <Button
                  variant="secondary"
                  onClick={() =>
                    alertManager.add(
                      createAlertOptions({
                        severity: 'success',
                        title: 'Success Alert',
                        description: 'Your action was completed successfully!',
                        closable: true,
                      }),
                    )
                  }
                >
                  Show Success Alert
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    alertManager.add(
                      createAlertOptions({
                        severity: 'warning',
                        title: 'Warning Alert',
                        description:
                          'Please review this information before proceeding.',
                        closable: true,
                      }),
                    )
                  }
                >
                  Show Warning Alert
                </Button>
                <Button
                  variant="danger"
                  onClick={() =>
                    alertManager.add(
                      createAlertOptions({
                        severity: 'error',
                        title: 'Error Alert',
                        description: 'Something went wrong. Please try again.',
                        closable: true,
                      }),
                    )
                  }
                >
                  Show Error Alert
                </Button>
              </div>
            </div>
          </Card>

          {/* Form Elements Section */}
          <Card
            variant="elevated"
            padding="lg"
            title="Form Elements"
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: 'var(--memori-spacing-lg)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--memori-spacing-md)',
                  width: '100%',
                  minWidth: 0,
                }}
              >
                <div style={{ width: '100%', minWidth: 0 }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 'var(--memori-text-size-small)',
                      fontWeight: 'var(--memori-text-weight-semibold)',
                      marginBottom: 'var(--memori-spacing-xs)',
                    }}
                  >
                    Text Input
                  </label>
                  <Input
                    placeholder="Enter text here"
                    value={inputValue}
                    onValueChange={setInputValue}
                    fullWidth
                  />
                </div>
                <div style={{ width: '100%', minWidth: 0 }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 'var(--memori-text-size-small)',
                      fontWeight: 'var(--memori-text-weight-semibold)',
                      marginBottom: 'var(--memori-spacing-xs)',
                    }}
                  >
                    Disabled Input
                  </label>
                  <Input
                    placeholder="This is disabled"
                    disabled
                    fullWidth
                  />
                </div>
                <div style={{ width: '100%', minWidth: 0 }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 'var(--memori-text-size-small)',
                      fontWeight: 'var(--memori-text-weight-semibold)',
                      marginBottom: 'var(--memori-spacing-xs)',
                    }}
                  >
                    Error Input
                  </label>
                  <Input
                    placeholder="This has an error"
                    variant="error"
                    fullWidth
                  />
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--memori-spacing-md)',
                  width: '100%',
                  minWidth: 0,
                }}
              >
                <div style={{ width: '100%', minWidth: 0 }}>
                  <SelectBox
                    label="Select Box"
                    options={selectOptions}
                    value={selectValue}
                    onChange={setSelectValue}
                    placeholder="Choose an option"
                  />
                </div>
                <div style={{ width: '100%', minWidth: 0 }}>
                  <SelectBox
                    label="Disabled Select"
                    options={selectOptions}
                    disabled
                    placeholder="Disabled select"
                  />
                </div>
                <div style={{ width: '100%', minWidth: 0 }}>
                  <SelectBox
                    label="Error Select"
                    options={selectOptions}
                    error
                    placeholder="Select with error"
                  />
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--memori-spacing-md)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--memori-spacing-sm)',
                  }}
                >
                  <label
                    style={{
                      fontSize: 'var(--memori-text-size-small)',
                      fontWeight: 'var(--memori-text-weight-semibold)',
                    }}
                  >
                    Checkboxes
                  </label>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--memori-spacing-sm)',
                    }}
                  >
                    <Checkbox
                      checked={checkboxChecked}
                      onChange={checked => setCheckboxChecked(checked)}
                      label="Checked checkbox"
                    />
                    <Checkbox
                      defaultChecked
                      label="Default checked checkbox"
                    />
                    <Checkbox
                      disabled
                      label="Disabled checkbox"
                    />
                    <Checkbox
                      indeterminate
                      label="Indeterminate checkbox"
                    />
                  </div>
                </div>

                <Slider
                  label="Slider Control"
                  min={0}
                  max={100}
                  defaultValue={sliderValue}
                  onChange={setSliderValue}
                />
                <Slider
                  label="Disabled Slider"
                  min={0}
                  max={100}
                  defaultValue={30}
                  disabled
                />
              </div>
            </div>
          </Card>

          {/* Buttons Section */}
          <Card
            variant="elevated"
            padding="lg"
            title="Buttons"
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--memori-spacing-md)',
              }}
            >
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="danger">Danger Button</Button>
              <Button
                variant="primary"
                size="sm"
              >
                Small
              </Button>
              <Button
                variant="primary"
                size="lg"
              >
                Large
              </Button>
              <Button
                variant="primary"
                loading
              >
                Loading
              </Button>
              <Button
                variant="primary"
                disabled
              >
                Disabled
              </Button>
              <Tooltip content="This is a tooltip">
                <Button variant="primary">With Tooltip</Button>
              </Tooltip>
            </div>
          </Card>

          {/* Cards Section */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'var(--memori-spacing-lg)',
            }}
          >
            <Card
              variant="elevated"
              padding="md"
              title="Elevated Card"
            >
              <p
                style={{
                  fontSize: 'var(--memori-text-size-base)',
                  lineHeight: 'var(--memori-text-line-normal)',
                }}
              >
                This is an elevated card with some content. Cards are great for
                organizing information and creating visual hierarchy.
              </p>
            </Card>
            <Card
              variant="outlined"
              padding="md"
              title="Outlined Card"
            >
              <p
                style={{
                  fontSize: 'var(--memori-text-size-base)',
                  lineHeight: 'var(--memori-text-line-normal)',
                }}
              >
                This is an outlined card. It has a border instead of a shadow,
                providing a different visual style.
              </p>
            </Card>
            <Card
              variant="elevated"
              padding="md"
              title="Card with Actions"
            >
              <p
                style={{
                  fontSize: 'var(--memori-text-size-base)',
                  lineHeight: 'var(--memori-text-line-normal)',
                  marginBottom: 'var(--memori-spacing-md)',
                }}
              >
                Cards can contain interactive elements.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: 'var(--memori-spacing-sm)',
                }}
              >
                <Button
                  variant="primary"
                  size="sm"
                >
                  Action
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                >
                  Cancel
                </Button>
              </div>
            </Card>
          </div>

          {/* Interactive Components Section */}
          <Card
            variant="elevated"
            padding="lg"
            title="Interactive Components"
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--memori-spacing-lg)',
              }}
            >
              <Collapsible summary="Click to expand details">
                <div
                  style={{
                    padding: 'var(--memori-spacing-md)',
                    fontSize: 'var(--memori-text-size-base)',
                  }}
                >
                  This is the content inside the details component. You can put
                  any content here that should be hidden by default and shown
                  when the user clicks to expand.
                </div>
              </Collapsible>

              <Expandable
                rows={3}
                defaultExpanded={false}
                expandSymbol={() => 'Show more'}
                collapseSymbol={() => 'Show less'}
              >
                <p
                  style={{
                    fontSize: 'var(--memori-text-size-base)',
                    lineHeight: 'var(--memori-text-line-relaxed)',
                  }}
                >
                  This is a long text that can be expanded and collapsed. It
                  demonstrates the Expandable component which is useful for
                  showing previews of content with the option to read more. The
                  text will be truncated after a certain number of rows, and
                  users can click to expand and see the full content. This is
                  particularly useful for long descriptions, comments, or any
                  content that might take up too much space initially.
                </p>
              </Expandable>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--memori-spacing-md)',
                  flexWrap: 'wrap',
                }}
              >
                <Button
                  variant="primary"
                  onClick={() => setModalOpen(true)}
                >
                  Open Modal
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setDrawerOpen(true)}
                >
                  Open Drawer
                </Button>
                <Spin />
                <span
                  style={{
                    fontSize: 'var(--memori-text-size-small)',
                  }}
                >
                  Loading spinner
                </span>
              </div>
            </div>
          </Card>

          {/* Modal */}
          <Modal
            open={modalOpen}
            onOpenChange={setModalOpen}
            title="Example Modal"
            description="This is a modal dialog demonstrating the Modal component."
            footer={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: 'var(--memori-spacing-sm)',
                }}
              >
                <Button
                  variant="outline"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={() => setModalOpen(false)}
                >
                  Confirm
                </Button>
              </div>
            }
          >
            <div
              style={{
                padding: 'var(--memori-spacing-md) 0',
              }}
            >
              <p
                style={{
                  fontSize: 'var(--memori-text-size-base)',
                  lineHeight: 'var(--memori-text-line-normal)',
                  marginBottom: 'var(--memori-spacing-md)',
                }}
              >
                This modal contains form elements and demonstrates how
                components work together.
              </p>
              <div style={{ width: '100%', maxWidth: '100%', minWidth: 0 }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: 'var(--memori-text-size-small)',
                    fontWeight: 'var(--memori-text-weight-semibold)',
                    marginBottom: 'var(--memori-spacing-xs)',
                  }}
                >
                  Modal Input
                </label>
                <Input
                  placeholder="Enter value in modal"
                  fullWidth
                />
              </div>
            </div>
          </Modal>

          {/* Drawer */}
          <Drawer
            open={drawerOpen}
            onOpenChange={setDrawerOpen}
            title="Example Drawer"
            description="This is a drawer panel demonstrating the Drawer component."
            anchor="right"
            footer={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: 'var(--memori-spacing-sm)',
                }}
              >
                <Button
                  variant="outline"
                  onClick={() => setDrawerOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={() => setDrawerOpen(false)}
                >
                  Save
                </Button>
              </div>
            }
          >
            <div
              style={{
                padding: 'var(--memori-spacing-md) 0',
              }}
            >
              <p
                style={{
                  fontSize: 'var(--memori-text-size-base)',
                  lineHeight: 'var(--memori-text-line-normal)',
                  marginBottom: 'var(--memori-spacing-md)',
                }}
              >
                Drawers are great for secondary navigation, filters, or forms
                that don't need to interrupt the user's workflow.
              </p>
              <hr style={{ margin: 'var(--memori-spacing-md) 0' }} />
              <Dropdown
                open={dropdownOpen}
                onOpenChange={setDropdownOpen}
              >
                <Dropdown.Trigger>Actions</Dropdown.Trigger>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => {}}>Edit</Dropdown.Item>
                  <Dropdown.Item onClick={() => {}}>Duplicate</Dropdown.Item>
                  <Dropdown.Item onClick={() => {}}>Share</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <hr style={{ margin: 'var(--memori-spacing-md) 0' }} />
              <SelectBox
                label="Select Box"
                options={selectOptions}
                value={selectValue}
                onChange={setSelectValue}
                placeholder="Choose an option"
              />
              <div style={{ width: '100%', maxWidth: '100%', minWidth: 0 }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: 'var(--memori-text-size-small)',
                    fontWeight: 'var(--memori-text-weight-semibold)',
                    marginBottom: 'var(--memori-spacing-xs)',
                  }}
                >
                  Drawer Input
                </label>
                <Input
                  placeholder="Enter value in drawer"
                  fullWidth
                />
              </div>
              <div style={{ marginTop: 'var(--memori-spacing-md)' }}>
                <Checkbox
                  label="Remember my preferences"
                  checked={checkboxChecked}
                  onChange={newChecked => setCheckboxChecked(newChecked)}
                />
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </ThemeWrapper>
  )
}

const ComponentShowcase = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <AlertProvider defaultDuration={5000}>
      <ComponentShowcaseContent theme={theme} />
      <AlertViewport placement="top-end" />
    </AlertProvider>
  )
}

const meta = {
  title: 'Theme/Component Showcase',
  component: ComponentShowcase,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ComponentShowcase>

export default meta

type Story = StoryObj<typeof meta>

export const LightTheme: Story = {
  args: {
    theme: 'light',
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [{ name: 'light', value: '#F7F9F2' }],
    },
  },
}

export const DarkTheme: Story = {
  args: {
    theme: 'dark',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#333' }],
    },
  },
}
