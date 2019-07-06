import React, { Fragment } from 'react'

import './Selector.sass'

const options = [
  { label: 'Duplicated Code', value: 'duplicated_code' },
  { label: 'HOC', value: 'hoc' },
  { label: 'Render prop', value: 'render_prop' },
  { label: 'Custom hook', value: 'custom_hook' },
]

const Selector = ({ choice, setChoice }) => (
  <div className="selector">
    {options.map((option) => (
      <button
        key={option.value}
        className={`choice ${option.value === choice ? 'active' : ''}`.trim()}
        onClick={() => setChoice(option.value)}
      >
        {option.label}
      </button>
    ))}
  </div>
)

export default Selector
