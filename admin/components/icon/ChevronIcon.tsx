import { iconType } from "../IconType"
type direction = "up" | "down" | "left" | "right"
interface chevronIconType extends iconType {
  direction?: direction
}
const ChevronIcon = ({size=32, fill="none", height, width, color, direction = 'up', ...props}: chevronIconType) => {
    const nextWidth = width || size
    const nextHeight = height || size

    const chevronDirection = (direction: direction) => {
      switch (direction) {
        case "up":
          return "M9.88 20.5466L16 14.44L22.12 20.5466L24 18.6666L16 10.6666L8 18.6666L9.88 20.5466Z"
        case "down":
          return "M9.88 11.4399L16 17.5599L22.12 11.4399L24 13.3333L16 21.3333L8 13.3333L9.88 11.4399Z"
        case "left":
          return "M11.4533 22.1067L17.56 16L11.4533 9.88L13.3333 8L21.3333 16L13.3333 24L11.4533 22.1067Z"
        case "right":
          return "M20.5467 22.1067L14.44 16L20.5467 9.88L18.6667 8L10.6667 16L18.6667 24L20.5467 22.1067Z"
        default:
          return "M9.88 20.5466L16 14.44L22.12 20.5466L24 18.6666L16 10.6666L8 18.6666L9.88 20.5466Z"
      }
    }
    

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
            d={chevronDirection(direction)}
            fill={color || "#F39508"}
          />
        </svg>
      )
}
  
  export default ChevronIcon