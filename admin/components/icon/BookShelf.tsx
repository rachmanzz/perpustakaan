import { iconType } from "../IconType"

const BookShelf = ({size=32, fill="none", height, width, color, ...props}: iconType) => {
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
            d="M12 4V24H16V4H12ZM16 6.66667L21.3333 24L25.3333 22.6667L20 5.33333L16 6.66667ZM6.66667 6.66667V24H10.6667V6.66667H6.66667ZM4 25.3333V28H28V25.3333H4Z"
            fill={color || "#F39508"}
          />
        </svg>
      )
}
  
  export default BookShelf