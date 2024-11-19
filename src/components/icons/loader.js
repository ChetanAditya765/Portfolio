import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
          fill="none"
          strokeDasharray="270" // Total length of the polygon outline
          strokeDashoffset="270" // Initially hide the outline
        >
          <animate
            attributeName="stroke-dashoffset"
            from="270"
            to="0"
            dur="2s"
            fill="freeze"
          />
        </polygon>
        <text
          x="50%" 
          y="50%" 
          dominantBaseline="middle" 
          textAnchor="middle" 
          fill="currentColor"
          fontSize="40" 
          fontWeight="bold"
          opacity="0"
        >
          CA
          <animate
            attributeName="opacity"
            from="0"
            to="1"
            dur="1s"
            begin="2s"
            fill="freeze"
          />
          <animate
            attributeName="transform"
            type="scale"
            from="0.8"
            to="1"
            dur="1s"
            begin="2s"
            fill="freeze"
          />
        </text>
      </g>
    </g>
  </svg>
);

export default IconLogo;
