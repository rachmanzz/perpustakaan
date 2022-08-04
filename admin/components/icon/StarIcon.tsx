import { iconType } from "../IconType"
interface starIconType extends iconType {
    filled: boolean
}
const StarIcon = ({size=24, fill="none", height, width, color, filled=false, ...props}: starIconType) => {
    const nextWidth = width || size
    const nextHeight = height || size
    const iconFilled = "M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27Z"
    const iconOutline = "M12 15.39L8.24 17.66L9.23 13.38L5.91 10.5L10.29 10.13L12 6.09L13.71 10.13L18.09 10.5L14.77 13.38L15.76 17.66L12 15.39ZM22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.45 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24Z"
    return (
        <svg
          width={nextWidth}
          height={nextHeight}
          fill={fill}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d={filled ? iconFilled : iconOutline}
            fill={color || "#F39508"}
          />
        </svg>
      )
}
  
  export default StarIcon