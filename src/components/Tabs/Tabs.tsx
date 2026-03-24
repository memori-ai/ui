import React from 'react'
import { Tabs as BaseTabs } from '@base-ui/react/tabs'
import type {
  TabsIndicatorProps as BaseTabsIndicatorProps,
  TabsListProps as BaseTabsListProps,
  TabsPanelProps as BaseTabsPanelProps,
  TabsRootProps as BaseTabsRootProps,
  TabsTabProps as BaseTabsTabProps,
} from '@base-ui/react/tabs'
import cx from 'classnames'
import './styles.css'

function mergeClassName<S>(
  base: string | ((state: S) => string),
  user?: string | ((state: S) => string | undefined),
): string | ((state: S) => string | undefined) {
  if (user === undefined) {
    return typeof base === 'function' ? base : base
  }
  if (typeof user === 'string') {
    return typeof base === 'function'
      ? (state: S) => cx(base(state), user)
      : cx(base, user)
  }
  return (state: S) =>
    cx(typeof base === 'function' ? base(state) : base, user(state))
}

type TabsListState = import('@base-ui/react/tabs').TabsList.State

export type TabsVariant = 'segmented' | 'underline'

export interface TabsRootProps extends Omit<
  BaseTabsRootProps,
  'className' | 'style'
> {
  /**
   * Visual style: `segmented` (sliding pill) or `underline` (baseline + thick marker).
   * @default 'segmented'
   */
  variant?: TabsVariant
  className?: string | BaseTabsRootProps['className']
  style?: React.CSSProperties | BaseTabsRootProps['style']
}

const TabsRoot = React.forwardRef<HTMLDivElement, TabsRootProps>(
  (
    {
      className,
      style,
      orientation = 'horizontal',
      variant = 'segmented',
      ...props
    },
    ref,
  ) => {
    const baseClass =
      orientation === 'vertical'
        ? 'memori-tabs memori-tabs--vertical'
        : 'memori-tabs memori-tabs--horizontal'
    const mergedClass = mergeClassName(
      baseClass,
      className as
        | string
        | ((
            state: import('@base-ui/react/tabs').TabsRoot.State,
          ) => string | undefined)
        | undefined,
    )
    return (
      <BaseTabs.Root
        ref={ref}
        data-memori-variant={variant}
        orientation={orientation}
        {...props}
        className={mergedClass}
        style={style as BaseTabsRootProps['style']}
      />
    )
  },
)
TabsRoot.displayName = 'Tabs.Root'

export interface TabsListProps extends Omit<
  BaseTabsListProps,
  'className' | 'style' | 'activateOnFocus'
> {
  /**
   * When `true`, moving focus with arrow keys activates the focused tab.
   * @default true
   */
  activateOnFocus?: boolean
  className?: string | BaseTabsListProps['className']
  style?: React.CSSProperties | BaseTabsListProps['style']
}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ activateOnFocus = true, className, style, loopFocus, ...props }, ref) => (
    <BaseTabs.List
      ref={ref}
      activateOnFocus={activateOnFocus}
      loopFocus={loopFocus}
      {...props}
      className={mergeClassName(
        (state: TabsListState) =>
          cx('memori-tabs__list', `memori-tabs__list--${state.orientation}`),
        className as BaseTabsListProps['className'],
      )}
      style={style as BaseTabsListProps['style']}
    />
  ),
)
TabsList.displayName = 'Tabs.List'

export interface TabsTabProps extends Omit<
  BaseTabsTabProps,
  'className' | 'style'
> {
  className?: string | BaseTabsTabProps['className']
  style?: React.CSSProperties | BaseTabsTabProps['style']
}

const TabsTab = React.forwardRef<HTMLButtonElement, TabsTabProps>(
  ({ className, style, ...props }, ref) => (
    <BaseTabs.Tab
      ref={ref}
      {...props}
      className={mergeClassName(
        state =>
          cx(
            'memori-tabs__tab',
            `memori-tabs__tab--${state.orientation}`,
            state.active && 'memori-tabs__tab--active',
            state.disabled && 'memori-tabs__tab--disabled',
          ),
        className,
      )}
      style={style as BaseTabsTabProps['style']}
    />
  ),
)
TabsTab.displayName = 'Tabs.Tab'

export interface TabsPanelProps extends Omit<
  BaseTabsPanelProps,
  'className' | 'style'
> {
  className?: string | BaseTabsPanelProps['className']
  style?: React.CSSProperties | BaseTabsPanelProps['style']
}

const TabsPanel = React.forwardRef<HTMLDivElement, TabsPanelProps>(
  ({ className, style, ...props }, ref) => (
    <BaseTabs.Panel
      ref={ref}
      {...props}
      className={mergeClassName(
        state =>
          cx(
            'memori-tabs__panel',
            `memori-tabs__panel--${state.orientation}`,
            state.hidden && 'memori-tabs__panel--hidden',
          ),
        className,
      )}
      style={style as BaseTabsPanelProps['style']}
    />
  ),
)
TabsPanel.displayName = 'Tabs.Panel'

export interface TabsIndicatorProps extends Omit<
  BaseTabsIndicatorProps,
  'className' | 'style'
> {
  className?: string | BaseTabsIndicatorProps['className']
  style?: React.CSSProperties | BaseTabsIndicatorProps['style']
}

const TabsIndicator = React.forwardRef<HTMLSpanElement, TabsIndicatorProps>(
  ({ className, style, renderBeforeHydration, ...props }, ref) => (
    <BaseTabs.Indicator
      ref={ref}
      {...props}
      renderBeforeHydration={renderBeforeHydration}
      className={mergeClassName(
        state =>
          cx(
            'memori-tabs__indicator',
            `memori-tabs__indicator--${state.orientation}`,
          ),
        className,
      )}
      style={style as BaseTabsIndicatorProps['style']}
    />
  ),
)
TabsIndicator.displayName = 'Tabs.Indicator'

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Tab: TabsTab,
  Panel: TabsPanel,
  Indicator: TabsIndicator,
}

export default Tabs
