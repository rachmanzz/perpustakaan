import { iconType } from "../IconType"

const ArrowRightThick = ({size=32, fill="none", height, width, color, ...props}: iconType) => {
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
            d="M5.33334 13.3333V18.6666H17.3333L12.6667 23.3333L15.8933 26.5599L26.4533 15.9999L15.8933 5.43994L12.6667 8.66661L17.3333 13.3333H5.33334Z"
            fill={color || "#F39508"}
          />
        </svg>
      )
}
  
  export default ArrowRightThick