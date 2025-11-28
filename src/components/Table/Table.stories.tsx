import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Button from '../Button/Button'
import Select from '../Select/Select'
import ChevronLeft from '../../icons/ChevronLeft'
import ChevronRight from '../../icons/ChevronRight'

import './Table.css'

const meta = {
  title: 'UI/Table',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<HTMLTableElement>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <table className="memori--table memori--table--compact">
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
        </tr>
        <tr>
          <td>Cell 4</td>
          <td>Cell 5</td>
          <td>Cell 6</td>
        </tr>
      </tbody>
    </table>
  ),
}

export const Compact: Story = {
  render: () => (
    <table className="memori--table memori--table--compact">
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
        </tr>
        <tr>
          <td>Cell 4</td>
          <td>Cell 5</td>
          <td>Cell 6</td>
        </tr>
      </tbody>
    </table>
  ),
}

export const Responsive: Story = {
  render: () => (
    <div className="memori--responsive-table-wrapper">
      <table className="memori--table memori--table--compact">
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
          </tr>
          <tr>
            <td>Cell 4</td>
            <td>Cell 5</td>
            <td>Cell 6</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <table className="memori--table memori--table--compact">
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
        </tr>
        <tr>
          <td>Cell 4</td>
          <td>Cell 5</td>
          <td>Cell 6</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Footer 1</td>
          <td>Footer 2</td>
          <td>Footer 3</td>
        </tr>
      </tfoot>
    </table>
  ),
}

export const WithColumnsAlignment: Story = {
  render: () => (
    <table className="memori--table memori--table--compact">
      <thead>
        <tr>
          <th>Column aligned left by default</th>
          <th className="memori--table--column-centered">
            Column aligned center
          </th>
          <th className="memori--table--column-right">Column aligned right</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
        </tr>
        <tr>
          <td>Cell 4</td>
          <td>Cell 5</td>
          <td>Cell 6</td>
        </tr>
      </tbody>
    </table>
  ),
}

export const WithDateColumn: Story = {
  render: () => (
    <table className="memori--table memori--table--compact">
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
        </tr>
        <tr>
          <td className="memori--table--date">2025-01-01</td>
          <td className="memori--table--date">2025-01-02</td>
          <td className="memori--table--date">2025-01-03</td>
        </tr>
      </tbody>
    </table>
  ),
}

export const WithColumnHiddenOnMobile: Story = {
  render: () => (
    <div className="memori--responsive-table-wrapper">
      <table className="memori--table memori--table--compact">
        <thead>
          <tr>
            <th>Header 1</th>
            <th className="mobile-hidden">Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell 1</td>
            <td className="mobile-hidden">Cell 2</td>
            <td>Cell 3</td>
          </tr>
          <tr>
            <td>Cell 4</td>
            <td className="mobile-hidden">Cell 5</td>
            <td>Cell 6</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
}

export const WithPagination: Story = {
  render: () => (
    <div>
      <nav className="memori--table--pagination">
        <div className="memori--table--pagination--pages">
          <Button
            shape="circle"
            disabled
            padded={false}
            title="Previous page"
            icon={<ChevronLeft />}
          />
          <div className="memori--table--pagination--pages">1/6</div>
          <Button
            shape="circle"
            padded={false}
            title="Next page"
            icon={<ChevronRight />}
          />
        </div>
        <Select
          options={[
            { label: `25 / page`, value: 25 },
            { label: `50 / page`, value: 50 },
            { label: `100 / page`, value: 100 },
          ]}
          value={25}
          displayValue={`25 / page`}
          onChange={value => {
            console.log(value)
          }}
        />
      </nav>
      <div className="memori--responsive-table-wrapper">
        <table className="memori--table memori--table--compact">
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cell 1</td>
              <td>Cell 2</td>
              <td>Cell 3</td>
            </tr>
            <tr>
              <td>Cell 4</td>
              <td>Cell 5</td>
              <td>Cell 6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
}
