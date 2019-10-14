  import React from 'react'

// STOP! You should not have to change anything in this file to
// make it through the workshop. If tests are failing because of
// this switch not having properties set correctly, then the
// problem is probably in your implementation. Tip: Check
// your `render` method or the `getTogglerProps` method
// (if we've gotten to that part)

// this is here to fill in for the onChange handler
// we're not using onChange because it seems to behave
// differently in codesandbox and locally :shrug:
const noop = () => {}

class Switch extends React.Component {
  render() {
    const {
      on,
      className = '',
      'aria-label': ariaLabel,
      onClick,
      ...props
    } = this.props
    const btnClassName = [
      className,
      'toggle-btn',
      on ? 'toggle-btn-on' : 'toggle-btn-off',
    ]
      .filter(Boolean)
      .join(' ')
    return (
      <label
        aria-label={ariaLabel || 'Toggle'}
        style={{display: 'block'}}
      >
        <input
          className="toggle-input"
          type="checkbox"
          checked={on}
          onChange={noop}
          onClick={onClick}
          data-testid="toggle-input"
        />
        <span className={btnClassName} {...props} />
        <style jsx> {`
        
          .toggle-btn {
            box-sizing: initial;
            display: inline-block;
            outline: 0;
            width: 8em;
            height: 4em;
            position: relative;
            cursor: pointer;
            user-select: none;
            background: #fbfbfb;
            border-radius: 4em;
            padding: 4px;
            transition: all 0.4s ease;
            border: 2px solid #e8eae9;
          }
          .toggle-input:focus + .toggle-btn::after,
          .toggle-btn:active::after {
            box-sizing: initial;
            box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1),
              0 4px 0 rgba(0, 0, 0, 0.08), inset 0px 0px 0px 3px #9c9c9c;
          }
          .toggle-btn::after {
            left: 0;
            position: relative;
            display: block;
            content: '';
            width: 50%;
            height: 100%;
            border-radius: 4em;
            background: #fbfbfb;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
              padding 0.3s ease, margin 0.3s ease;
            box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1),
              0 4px 0 rgba(0, 0, 0, 0.08);
          }
          .toggle-btn.toggle-btn-on::after {
            left: 50%;
          }
          .toggle-btn.toggle-btn-on {
            background: #86d993;
          }
          .toggle-btn.toggle-btn-on:active {
            box-shadow: none;
          }
          .toggle-btn.toggle-btn-on:active::after {
            margin-left: -1.6em;
          }
          .toggle-btn:active::after {
            padding-right: 1.6em;
          }
          .toggle-input {
            /* visually hidden but still accessible */
            border: 0;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
            white-space: nowrap;
          }
        `}



        </style>
      </label>
    )
  }
}

export default Switch;
