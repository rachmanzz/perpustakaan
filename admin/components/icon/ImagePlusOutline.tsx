import { iconType } from "../IconType"

const ImagePlusOutline = ({size=32, fill="none", height, width, color, ...props}: iconType) => {
    const nextWidth = width || size
    const nextHeight = height || size
    return (
        <svg
          width={nextWidth}
          height={nextHeight}
          fill={fill}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M17.3333 25.3333C17.3333 26.2667 17.5067 27.16 17.8 28H6.66667C5.2 28 4 26.8133 4 25.3333V6.66667C4 5.2 5.2 4 6.66667 4H25.3333C26.8133 4 28 5.2 28 6.66667V17.8C27.16 17.5067 26.2667 17.3333 25.3333 17.3333V6.66667H6.66667V25.3333H17.3333ZM18.6133 16.3867L14.9467 21.1067L12.3333 17.96L8.66667 22.6667H17.8C18.3333 21.1733 19.2933 19.88 20.5333 18.9467L18.6133 16.3867ZM26.6667 24V20H24V24H20V26.6667H24V30.6667H26.6667V26.6667H30.6667V24H26.6667Z"
            fill={color || "#F39508"}
          />
        </svg>
      )
}
  
  export default ImagePlusOutline