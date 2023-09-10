import React, { memo } from 'react';

const IconArrowRight = memo((props) => {
  const { width = '2.4rem', height = '2.4rem' } = props;

  return (
    <svg
      viewBox="0 0 18 18"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{ height: height, width: width, fill: 'currentcolor' }}>
      <path
        d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
        fill-rule="evenodd"></path>
    </svg>
  );
});

export default IconArrowRight;
