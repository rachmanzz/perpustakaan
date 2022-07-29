import { iconType } from "../IconType"

const AccountCircleOutline = ({size=42, fill="none", height, width, color, ...props}: iconType) => {
    const nextWidth = width || size
    const nextHeight = height || size
    return (
        <svg
          width={nextWidth}
          height={nextHeight}
          fill={fill}
          viewBox="0 0 42 42"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M21 3.5a17.5 17.5 0 1 0 0 35 17.5 17.5 0 0 0 0-35Zm-8.627 28.49c.752-1.575 5.337-3.115 8.627-3.115 3.29 0 7.875 1.54 8.628 3.115A13.812 13.812 0 0 1 21 35c-3.255 0-6.248-1.12-8.627-3.01Zm19.757-2.537c-2.503-3.046-8.575-4.078-11.13-4.078-2.555 0-8.627 1.032-11.13 4.078A13.874 13.874 0 0 1 7 21c0-7.717 6.283-14 14-14 7.718 0 14 6.283 14 14 0 3.185-1.085 6.125-2.87 8.453ZM21 10.5a6.11 6.11 0 0 0-6.125 6.125A6.11 6.11 0 0 0 21 22.75a6.11 6.11 0 0 0 6.125-6.125A6.11 6.11 0 0 0 21 10.5Zm0 8.75A2.625 2.625 0 1 1 21 14a2.625 2.625 0 0 1 0 5.25Z"
            fill={color || "#F39508"}
          />
        </svg>
      )
}
  
  export default AccountCircleOutline