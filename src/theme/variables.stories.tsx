import React from 'react'
import type { StoryObj, Meta } from '@storybook/react-vite'
import './variables.css'

const ColorSwatch = ({
  variable,
  label,
  description,
}: {
  variable: string
  label: string
  description?: string
}) => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '16px',
        border: '1px solid var(--memori-primary-subtle)',
        borderRadius: 'var(--memori-radius-box)',
        backgroundColor: 'var(--memori-main-background)',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '80px',
          backgroundColor: `var(${variable})`,
          borderRadius: 'var(--memori-radius-field)',
          border: '1px solid var(--memori-primary-subtle)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      />
      <div>
        <div
          style={{
            fontSize: 'var(--memori-text-size-small)',
            fontWeight: 'var(--memori-text-weight-semibold)',
            color: 'var(--memori-text-color)',
            marginBottom: '4px',
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: 'var(--memori-text-size-small)',
            fontFamily: 'monospace',
            color: 'var(--memori-text-color)',
            marginBottom: '2px',
          }}
        >
          {variable}
        </div>
        <div
          style={{
            fontSize: 'var(--memori-text-size-small)',
            color: 'var(--memori-text-color)',
          }}
        >
          {value}
        </div>
        {description && (
          <div
            style={{
              fontSize: 'var(--memori-text-size-small)',
              color: 'var(--memori-text-color)',
              marginTop: '4px',
              fontStyle: 'italic',
            }}
          >
            {description}
          </div>
        )}
      </div>
    </div>
  )
}

const TypographyExample = ({
  variable,
  label,
  property,
  exampleText = 'The quick brown fox jumps over the lazy dog',
}: {
  variable: string
  label: string
  property: 'font-size' | 'line-height' | 'font-weight'
  exampleText?: string
}) => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim()

  const style: React.CSSProperties = {
    [property]: `var(${variable})`,
  }

  if (property === 'font-size') {
    style.fontFamily = 'var(--memori-font-family)'
    style.lineHeight = 'var(--memori-text-line-normal)'
    style.fontWeight = 'var(--memori-text-weight-normal)'
  } else if (property === 'line-height') {
    style.fontSize = 'var(--memori-text-size-base)'
    style.fontFamily = 'var(--memori-font-family)'
    style.fontWeight = 'var(--memori-text-weight-normal)'
  } else if (property === 'font-weight') {
    style.fontSize = 'var(--memori-text-size-base)'
    style.fontFamily = 'var(--memori-font-family)'
    style.lineHeight = 'var(--memori-text-line-normal)'
  }

  return (
    <div
      style={{
        padding: '16px',
        border: '1px solid var(--memori-primary-subtle)',
        borderRadius: 'var(--memori-radius-box)',
        backgroundColor: 'var(--memori-main-background)',
      }}
    >
      <div
        style={{
          fontSize: 'var(--memori-text-size-small)',
          fontWeight: 'var(--memori-text-weight-semibold)',
          color: 'var(--memori-text-color)',
          marginBottom: '8px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 'var(--memori-text-size-small)',
          fontFamily: 'monospace',
          color: 'var(--memori-text-color)',
          marginBottom: '12px',
        }}
      >
        {variable}: {value}
      </div>
      <div style={style}>{exampleText}</div>
    </div>
  )
}

const SpacingExample = ({
  variable,
  label,
}: {
  variable: string
  label: string
}) => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim()

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px',
        border: '1px solid var(--memori-primary-subtle)',
        borderRadius: 'var(--memori-radius-box)',
        backgroundColor: 'var(--memori-main-background)',
      }}
    >
      <div
        style={{
          minWidth: '120px',
          fontSize: 'var(--memori-text-size-small)',
          fontWeight: 'var(--memori-text-weight-semibold)',
          color: 'var(--memori-text-color)',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 'var(--memori-text-size-small)',
          fontFamily: 'monospace',
          color: 'var(--memori-text-color)',
          minWidth: '200px',
        }}
      >
        {variable}: {value}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flex: 1,
        }}
      >
        <div
          style={{
            width: `var(${variable})`,
            height: '40px',
            backgroundColor: 'var(--memori-primary)',
            borderRadius: 'var(--memori-radius-field)',
            border: '1px solid var(--memori-primary)',
          }}
        />
        <div
          style={{
            fontSize: 'var(--memori-text-size-small)',
            color: 'var(--memori-text-color)',
          }}
        >
          ← {value}
        </div>
      </div>
    </div>
  )
}

const VariableValueExample = ({
  variable,
  label,
  children,
}: {
  variable: string
  label: string
  children?: React.ReactNode
}) => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim()

  return (
    <div
      style={{
        padding: '16px',
        border: '1px solid var(--memori-primary-subtle)',
        borderRadius: 'var(--memori-radius-box)',
        backgroundColor: 'var(--memori-main-background)',
      }}
    >
      <div
        style={{
          fontSize: 'var(--memori-text-size-small)',
          fontWeight: 'var(--memori-text-weight-semibold)',
          color: 'var(--memori-text-color)',
          marginBottom: '8px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 'var(--memori-text-size-small)',
          fontFamily: 'monospace',
          color: 'var(--memori-text-color)',
          marginBottom: '12px',
        }}
      >
        {variable}: {value}
      </div>
      {children}
    </div>
  )
}

const BorderRadiusExample = ({
  variable,
  label,
}: {
  variable: string
  label: string
}) => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '16px',
        border: '1px solid var(--memori-primary-subtle)',
        borderRadius: 'var(--memori-radius-box)',
        backgroundColor: 'var(--memori-main-background)',
      }}
    >
      <div>
        <div
          style={{
            fontSize: 'var(--memori-text-size-small)',
            fontWeight: 'var(--memori-text-weight-semibold)',
            color: 'var(--memori-text-color)',
            marginBottom: '4px',
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: 'var(--memori-text-size-small)',
            fontFamily: 'monospace',
            color: 'var(--memori-text-color)',
          }}
        >
          {variable}: {value}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'var(--memori-primary)',
            borderRadius: `var(${variable})`,
            border: '2px solid var(--memori-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--memori-primary-content)',
            fontSize: 'var(--memori-text-size-small)',
            fontWeight: 'var(--memori-text-weight-semibold)',
          }}
        >
          Box
        </div>
        <div
          style={{
            width: '100px',
            height: '60px',
            backgroundColor: 'var(--memori-secondary)',
            borderRadius: `var(${variable})`,
            border: '2px solid var(--memori-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--memori-secondary-content)',
            fontSize: 'var(--memori-text-size-small)',
            fontWeight: 'var(--memori-text-weight-semibold)',
          }}
        >
          Button
        </div>
      </div>
    </div>
  )
}

const Section = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <div
    style={{
      marginBottom: 'var(--memori-spacing-3xl)',
    }}
  >
    <h2
      style={{
        fontSize: 'var(--memori-text-size-heading-large)',
        fontWeight: 'var(--memori-text-weight-bold)',
        color: 'var(--memori-text-color)',
        marginBottom: 'var(--memori-spacing-lg)',
        paddingBottom: 'var(--memori-spacing-md)',
        borderBottom: '2px solid var(--memori-primary-subtle)',
      }}
    >
      {title}
    </h2>
    {children}
  </div>
)

const Subsection = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <div
    style={{
      marginBottom: 'var(--memori-spacing-xl)',
    }}
  >
    <h3
      style={{
        fontSize: 'var(--memori-text-size-heading)',
        fontWeight: 'var(--memori-text-weight-semibold)',
        color: 'var(--memori-text-color)',
        marginBottom: 'var(--memori-spacing-md)',
      }}
    >
      {title}
    </h3>
    {children}
  </div>
)

const ThemeVariables = () => {
  return (
    <div
      style={{
        padding: 'var(--memori-spacing-xl)',
        backgroundColor: 'var(--memori-main-background)',
        minHeight: '100vh',
        fontFamily: 'var(--memori-font-family)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            fontSize: 'var(--memori-text-size-heading-xlarge)',
            fontWeight: 'var(--memori-text-weight-bold)',
            color: 'var(--memori-text-color)',
            marginBottom: 'var(--memori-spacing-2xl)',
          }}
        >
          Design Tokens - CSS Variables
        </h1>

        {/* COLOR TOKENS */}
        <Section title="Color Tokens">
          <Subsection title="Base Colors">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: 'var(--memori-spacing-md)',
              }}
            >
              <ColorSwatch
                variable="--memori-main-background"
                label="Main Background"
                description="Main background color (white/light gray)"
              />
              <ColorSwatch
                variable="--memori-primary-subtle"
                label="Primary Subtle"
                description="Primary subtle – secondary/tertiary backgrounds, borders, hover"
              />
              <ColorSwatch
                variable="--memori-text-color"
                label="Text Color"
                description="Text color on base backgrounds"
              />
            </div>
          </Subsection>

          <Subsection title="Primary Colors">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: 'var(--memori-spacing-md)',
              }}
            >
              <ColorSwatch
                variable="--memori-primary"
                label="Primary"
                description="Primary actions, links, highlights"
              />
              <ColorSwatch
                variable="--memori-primary-content"
                label="Primary Content"
                description="Text/icon color on primary background"
              />
            </div>
          </Subsection>

          <Subsection title="Secondary Colors">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: 'var(--memori-spacing-md)',
              }}
            >
              <ColorSwatch
                variable="--memori-secondary"
                label="Secondary"
                description="Secondary actions, accents"
              />
              <ColorSwatch
                variable="--memori-secondary-content"
                label="Secondary Content"
                description="Text/icon color on secondary background"
              />
            </div>
          </Subsection>

          <Subsection title="Accent Colors">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: 'var(--memori-spacing-md)',
              }}
            >
              <ColorSwatch
                variable="--memori-accent"
                label="Accent"
                description="Accent elements, highlights"
              />
              <ColorSwatch
                variable="--memori-accent-content"
                label="Accent Content"
                description="Text/icon color on accent background"
              />
            </div>
          </Subsection>

          <Subsection title="Neutral Colors">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: 'var(--memori-spacing-md)',
              }}
            >
              <ColorSwatch
                variable="--memori-neutral"
                label="Neutral"
                description="Neutral elements, dividers"
              />
              <ColorSwatch
                variable="--memori-neutral-content"
                label="Neutral Content"
                description="Text/icon color on neutral background"
              />
            </div>
          </Subsection>

          <Subsection title="Semantic Colors">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: 'var(--memori-spacing-md)',
              }}
            >
              <ColorSwatch
                variable="--memori-info"
                label="Info"
                description="Informational messages, badges"
              />
              <ColorSwatch
                variable="--memori-info-content"
                label="Info Content"
                description="Text/icon color on info background"
              />
              <ColorSwatch
                variable="--memori-success"
                label="Success"
                description="Success messages, positive states"
              />
              <ColorSwatch
                variable="--memori-success-content"
                label="Success Content"
                description="Text/icon color on success background"
              />
              <ColorSwatch
                variable="--memori-warning"
                label="Warning"
                description="Warning messages, caution states"
              />
              <ColorSwatch
                variable="--memori-warning-content"
                label="Warning Content"
                description="Text/icon color on warning background"
              />
              <ColorSwatch
                variable="--memori-error"
                label="Error"
                description="Error messages, destructive actions"
              />
              <ColorSwatch
                variable="--memori-error-content"
                label="Error Content"
                description="Text/icon color on error background"
              />
            </div>
          </Subsection>
        </Section>
      </div>
    </div>
  )
}

const meta = {
  title: 'Theme/Design Tokens',
  component: ThemeVariables,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ThemeVariables>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
