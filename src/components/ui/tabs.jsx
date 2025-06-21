import React, { useState } from 'react';

// Tabs container component
export function Tabs({ value: controlledValue, onValueChange, children }) {
  const childArray = React.Children.toArray(children);
  const firstTabValue = childArray[0]?.props.value;
  const [uncontrolledValue, setUncontrolledValue] = useState(firstTabValue);
  const value = controlledValue ?? uncontrolledValue;

  const handleChange = (newValue) => {
    setUncontrolledValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <div>
      <div className="flex space-x-4 border-b mb-4">
        {childArray.map((child) => {
          const isActive = child.props.value === value;
          return (
            <button
              key={child.props.value}
              onClick={() => handleChange(child.props.value)}
              className={`py-2 px-4 font-semibold ${
                isActive
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {child.props.label}
            </button>
          );
        })}
      </div>

      <div>
        {childArray.map((child) =>
          child.props.value === value ? child.props.children : null
        )}
      </div>
    </div>
  );
}

// Individual tab pane
export function Tab({ children }) {
  return <>{children}</>;
}
