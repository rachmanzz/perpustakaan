import { iconType } from "../IconType"

const ArrowLeftThick = ({size=32, fill="none", height, width, color, ...props}: iconType) => {
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
            d="M26.6667 13.3333V18.6666H14.6667L19.3334 23.3333L16.1067 26.5599L5.54669 15.9999L16.1067 5.43994L19.3334 8.66661L14.6667 13.3333H26.6667Z"
            fill={color || "#F39508"}
          />
        </svg>
      )
}
  
  export default ArrowLeftThick