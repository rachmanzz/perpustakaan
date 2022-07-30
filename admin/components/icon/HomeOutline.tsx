import { iconType } from "../IconType"

const HomeOutline = ({size=32, fill="none", height, width, color, ...props}: iconType) => {
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
            d="M11.9999 17.3333H19.9999V25.3333H23.9999V13.3333L15.9999 7.33333L7.99992 13.3333V25.3333H11.9999V17.3333ZM5.33325 28V12L15.9999 4L26.6666 12V28H5.33325Z"
            fill={color || "#F39508"}
          />
        </svg>
      )
}
  
  export default HomeOutline