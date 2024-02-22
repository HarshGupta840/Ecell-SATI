import React from 'react'

type Props = {}

const SearchIcon = ({}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.4805 12.29L19.0005 19"
        stroke="url(#paint0_linear_554_14)"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M8.5 14C11.5376 14 14 11.5376 14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14Z"
        stroke="url(#paint1_linear_554_14)"
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <defs>
        <linearGradient
          id="paint0_linear_554_14"
          x1="15.7405"
          y1="12.29"
          x2="15.7405"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFD600" />
          <stop offset="1" stop-color="#FF30E3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_554_14"
          x1="8.5"
          y1="3"
          x2="8.5"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFD600" />
          <stop offset="1" stop-color="#FF30E3" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SearchIcon
