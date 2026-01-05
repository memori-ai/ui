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
        border: '1px solid var(--color-neutral-400)',
        borderRadius: 'var(--border-radius-md)',
        backgroundColor: 'var(--color-neutral-white)',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '80px',
          backgroundColor: `var(${variable})`,
          borderRadius: 'var(--border-radius-sm)',
          border: '1px solid var(--color-neutral-400)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      />
      <div>
        <div
          style={{
            fontSize: 'var(--typography-font-size-sm)',
            fontWeight: 'var(--typography-font-weight-semibold)',
            color: 'var(--color-neutral-800)',
            marginBottom: '4px',
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: 'var(--typography-font-size-xs)',
            fontFamily: 'monospace',
            color: 'var(--color-neutral-600)',
            marginBottom: '2px',
          }}
        >
          {variable}
        </div>
        <div
          style={{
            fontSize: 'var(--typography-font-size-xs)',
            color: 'var(--color-neutral-600)',
          }}
        >
          {value}
        </div>
        {description && (
          <div
            style={{
              fontSize: 'var(--typography-font-size-xs)',
              color: 'var(--color-neutral-500)',
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
    style.fontFamily = 'var(--typography-font-family-base)'
    style.lineHeight = 'var(--typography-line-height-normal)'
    style.fontWeight = 'var(--typography-font-weight-regular)'
  } else if (property === 'line-height') {
    style.fontSize = 'var(--typography-font-size-base)'
    style.fontFamily = 'var(--typography-font-family-base)'
    style.fontWeight = 'var(--typography-font-weight-regular)'
  } else if (property === 'font-weight') {
    style.fontSize = 'var(--typography-font-size-base)'
    style.fontFamily = 'var(--typography-font-family-base)'
    style.lineHeight = 'var(--typography-line-height-normal)'
  }

  return (
    <div
      style={{
        padding: '16px',
        border: '1px solid var(--color-neutral-400)',
        borderRadius: 'var(--border-radius-md)',
        backgroundColor: 'var(--color-neutral-white)',
      }}
    >
      <div
        style={{
          fontSize: 'var(--typography-font-size-sm)',
          fontWeight: 'var(--typography-font-weight-semibold)',
          color: 'var(--color-neutral-800)',
          marginBottom: '8px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 'var(--typography-font-size-xs)',
          fontFamily: 'monospace',
          color: 'var(--color-neutral-600)',
          marginBottom: '12px',
        }}
      >
        {variable}: {value}
      </div>
      <div style={style}>{exampleText}</div>
    </div>
  )
}

const SpacingExample = ({ variable, label }: { variable: string; label: string }) => {
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
        border: '1px solid var(--color-neutral-400)',
        borderRadius: 'var(--border-radius-md)',
        backgroundColor: 'var(--color-neutral-white)',
      }}
    >
      <div
        style={{
          minWidth: '120px',
          fontSize: 'var(--typography-font-size-sm)',
          fontWeight: 'var(--typography-font-weight-semibold)',
          color: 'var(--color-neutral-800)',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 'var(--typography-font-size-xs)',
          fontFamily: 'monospace',
          color: 'var(--color-neutral-600)',
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
            backgroundColor: 'var(--color-primary-500)',
            borderRadius: 'var(--border-radius-sm)',
            border: '1px solid var(--color-primary-700)',
          }}
        />
        <div
          style={{
            fontSize: 'var(--typography-font-size-xs)',
            color: 'var(--color-neutral-600)',
          }}
        >
          ← {value}
        </div>
      </div>
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
        border: '1px solid var(--color-neutral-400)',
        borderRadius: 'var(--border-radius-md)',
        backgroundColor: 'var(--color-neutral-white)',
      }}
    >
      <div>
        <div
          style={{
            fontSize: 'var(--typography-font-size-sm)',
            fontWeight: 'var(--typography-font-weight-semibold)',
            color: 'var(--color-neutral-800)',
            marginBottom: '4px',
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: 'var(--typography-font-size-xs)',
            fontFamily: 'monospace',
            color: 'var(--color-neutral-600)',
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
            backgroundColor: 'var(--color-primary-500)',
            borderRadius: `var(${variable})`,
            border: '2px solid var(--color-primary-700)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-neutral-white)',
            fontSize: 'var(--typography-font-size-xs)',
            fontWeight: 'var(--typography-font-weight-semibold)',
          }}
        >
          Box
        </div>
        <div
          style={{
            width: '100px',
            height: '60px',
            backgroundColor: 'var(--color-secondary-500)',
            borderRadius: `var(${variable})`,
            border: '2px solid var(--color-secondary-700)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-neutral-white)',
            fontSize: 'var(--typography-font-size-xs)',
            fontWeight: 'var(--typography-font-weight-semibold)',
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
      marginBottom: 'var(--spacing-3xl)',
    }}
  >
    <h2
      style={{
        fontSize: 'var(--typography-font-size-2xl)',
        fontWeight: 'var(--typography-font-weight-bold)',
        color: 'var(--color-neutral-900)',
        marginBottom: 'var(--spacing-lg)',
        paddingBottom: 'var(--spacing-md)',
        borderBottom: '2px solid var(--color-neutral-300)',
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
      marginBottom: 'var(--spacing-xl)',
    }}
  >
    <h3
      style={{
        fontSize: 'var(--typography-font-size-xl)',
        fontWeight: 'var(--typography-font-weight-semibold)',
        color: 'var(--color-neutral-800)',
        marginBottom: 'var(--spacing-md)',
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
        padding: 'var(--spacing-xl)',
        backgroundColor: 'var(--color-neutral-100)',
        minHeight: '100vh',
        fontFamily: 'var(--typography-font-family-base)',
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
            fontSize: 'var(--typography-font-size-3xl)',
            fontWeight: 'var(--typography-font-weight-bold)',
            color: 'var(--color-neutral-900)',
            marginBottom: 'var(--spacing-2xl)',
          }}
        >
          Design Tokens - CSS Variables
        </h1>

        {/* COLOR TOKENS */}
        <Section title="Color Tokens">
          <Subsection title="Primary Colors">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 'var(--spacing-md)',
              }}
            >
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
                <ColorSwatch
                  key={shade}
                  variable={`--color-primary-${shade}`}
                  label={`Primary ${shade}`}
                  description={shade === 500 ? 'Base Brand Color' : undefined}
                />
              ))}
            </div>
          </Subsection>

          <Subsection title="Secondary Colors">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 'var(--spacing-md)',
              }}
            >
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
                <ColorSwatch
                  key={shade}
                  variable={`--color-secondary-${shade}`}
                  label={`Secondary ${shade}`}
                  description={shade === 500 ? 'Base Secondary Color' : undefined}
                />
              ))}
            </div>
          </Subsection>

          <Subsection title="Semantic Colors">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: 'var(--spacing-md)',
              }}
            >
              <ColorSwatch
                variable="--color-semantic-success-base"
                label="Success Base"
                description="Primary success color"
              />
              <ColorSwatch
                variable="--color-semantic-success-light"
                label="Success Light"
                description="Backgrounds"
              />
              <ColorSwatch
                variable="--color-semantic-success-dark"
                label="Success Dark"
                description="Text/Icons"
              />
              <ColorSwatch
                variable="--color-semantic-error-base"
                label="Error Base"
                description="Primary error color"
              />
              <ColorSwatch
                variable="--color-semantic-error-light"
                label="Error Light"
                description="Backgrounds"
              />
              <ColorSwatch
                variable="--color-semantic-error-dark"
                label="Error Dark"
                description="Text/Icons"
              />
              <ColorSwatch
                variable="--color-semantic-warning-base"
                label="Warning Base"
                description="Primary warning color"
              />
              <ColorSwatch
                variable="--color-semantic-warning-light"
                label="Warning Light"
                description="Backgrounds"
              />
              <ColorSwatch
                variable="--color-semantic-warning-dark"
                label="Warning Dark"
                description="Text/Icons"
              />
            </div>
          </Subsection>

          <Subsection title="Neutral Colors">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 'var(--spacing-md)',
              }}
            >
              <ColorSwatch
                variable="--color-neutral-white"
                label="White"
                description="Pure white"
              />
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
                <ColorSwatch
                  key={shade}
                  variable={`--color-neutral-${shade}`}
                  label={`Neutral ${shade}`}
                  description={
                    shade === 100
                      ? 'Page Background'
                      : shade === 200
                        ? 'Component Background'
                        : shade === 300
                          ? 'Hover States'
                          : shade === 400
                            ? 'Borders'
                            : shade === 500
                              ? 'Disabled Text'
                              : shade === 600
                                ? 'Secondary Text'
                                : shade === 700
                                  ? 'Primary Text'
                                  : shade === 800
                                    ? 'Headings'
                                    : undefined
                  }
                />
              ))}
            </div>
          </Subsection>
        </Section>

        {/* TYPOGRAPHY TOKENS */}
        <Section title="Typography Tokens">
          <Subsection title="Font Family">
            <div
              style={{
                padding: '16px',
                border: '1px solid var(--color-neutral-400)',
                borderRadius: 'var(--border-radius-md)',
                backgroundColor: 'var(--color-neutral-white)',
              }}
            >
              <div
                style={{
                  fontSize: 'var(--typography-font-size-sm)',
                  fontWeight: 'var(--typography-font-weight-semibold)',
                  color: 'var(--color-neutral-800)',
                  marginBottom: '8px',
                }}
              >
                Font Family
              </div>
              <div
                style={{
                  fontSize: 'var(--typography-font-size-xs)',
                  fontFamily: 'monospace',
                  color: 'var(--color-neutral-600)',
                  marginBottom: '12px',
                }}
              >
                --typography-font-family-base
              </div>
              <div
                style={{
                  fontSize: 'var(--typography-font-size-lg)',
                  fontFamily: 'var(--typography-font-family-base)',
                  lineHeight: 'var(--typography-line-height-normal)',
                }}
              >
                The quick brown fox jumps over the lazy dog
              </div>
              <div
                style={{
                  fontSize: 'var(--typography-font-size-lg)',
                  fontFamily: 'var(--typography-font-family-base)',
                  lineHeight: 'var(--typography-line-height-normal)',
                  fontWeight: 'var(--typography-font-weight-bold)',
                  marginTop: '8px',
                }}
              >
                THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
              </div>
              <div
                style={{
                  fontSize: 'var(--typography-font-size-lg)',
                  fontFamily: 'var(--typography-font-family-base)',
                  lineHeight: 'var(--typography-line-height-normal)',
                  fontStyle: 'italic',
                  marginTop: '8px',
                }}
              >
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
          </Subsection>

          <Subsection title="Font Sizes">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 'var(--spacing-md)',
              }}
            >
              <TypographyExample
                variable="--typography-font-size-xs"
                label="Extra Small (xs)"
                property="font-size"
              />
              <TypographyExample
                variable="--typography-font-size-sm"
                label="Small (sm)"
                property="font-size"
              />
              <TypographyExample
                variable="--typography-font-size-base"
                label="Base"
                property="font-size"
              />
              <TypographyExample
                variable="--typography-font-size-lg"
                label="Large (lg)"
                property="font-size"
              />
              <TypographyExample
                variable="--typography-font-size-xl"
                label="Extra Large (xl)"
                property="font-size"
              />
              <TypographyExample
                variable="--typography-font-size-2xl"
                label="2X Large (2xl)"
                property="font-size"
              />
              <TypographyExample
                variable="--typography-font-size-3xl"
                label="3X Large (3xl)"
                property="font-size"
              />
            </div>
          </Subsection>

          <Subsection title="Line Heights">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 'var(--spacing-md)',
              }}
            >
              <TypographyExample
                variable="--typography-line-height-tight"
                label="Tight"
                property="line-height"
                exampleText="This is a paragraph with tight line height. It makes text more compact and is useful for headings or when space is limited."
              />
              <TypographyExample
                variable="--typography-line-height-normal"
                label="Normal"
                property="line-height"
                exampleText="This is a paragraph with normal line height. It provides comfortable reading for body text and is the default for most content."
              />
              <TypographyExample
                variable="--typography-line-height-relaxed"
                label="Relaxed"
                property="line-height"
                exampleText="This is a paragraph with relaxed line height. It provides more breathing room between lines, making text easier to read for longer content."
              />
            </div>
          </Subsection>

          <Subsection title="Font Weights">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 'var(--spacing-md)',
              }}
            >
              <TypographyExample
                variable="--typography-font-weight-regular"
                label="Regular (400)"
                property="font-weight"
              />
              <TypographyExample
                variable="--typography-font-weight-medium"
                label="Medium (500)"
                property="font-weight"
              />
              <TypographyExample
                variable="--typography-font-weight-semibold"
                label="Semibold (600)"
                property="font-weight"
              />
              <TypographyExample
                variable="--typography-font-weight-bold"
                label="Bold (700)"
                property="font-weight"
              />
            </div>
          </Subsection>
        </Section>

        {/* SPACING TOKENS */}
        <Section title="Spacing Tokens">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-md)',
            }}
          >
            <SpacingExample variable="--spacing-xs" label="Extra Small (xs)" />
            <SpacingExample variable="--spacing-sm" label="Small (sm)" />
            <SpacingExample variable="--spacing-md" label="Medium (md)" />
            <SpacingExample variable="--spacing-lg" label="Large (lg)" />
            <SpacingExample variable="--spacing-xl" label="Extra Large (xl)" />
            <SpacingExample variable="--spacing-2xl" label="2X Large (2xl)" />
            <SpacingExample variable="--spacing-3xl" label="3X Large (3xl)" />
          </div>
        </Section>

        {/* BORDER RADIUS TOKENS */}
        <Section title="Border Radius Tokens">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 'var(--spacing-md)',
            }}
          >
            <BorderRadiusExample
              variable="--border-radius-sm"
              label="Small (sm) - Inputs, Checkboxes"
            />
            <BorderRadiusExample
              variable="--border-radius-md"
              label="Medium (md) - Cards, Buttons"
            />
            <BorderRadiusExample
              variable="--border-radius-lg"
              label="Large (lg) - Modals, Containers"
            />
            <BorderRadiusExample
              variable="--border-radius-full"
              label="Full - Pills, Avatars"
            />
          </div>
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

