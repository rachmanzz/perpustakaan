import { iconType } from "../IconType"

const BookSearch = ({size=28, fill="none", height, width, color, ...props}: iconType) => {
    const nextWidth = width || size
    const nextHeight = height || size
    return (
        <svg
          width={nextWidth}
          height={nextHeight}
          fill={fill}
          viewBox="0 0 28 28"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M18.0834 14C21.0001 14 23.3334 16.3334 23.3334 19.25C23.3334 20.2767 23.0417 21.245 22.5284 22.05L26.1217 25.6667L24.5001 27.2884L20.8601 23.7067C20.0551 24.2084 19.0984 24.5 18.0834 24.5C15.1667 24.5 12.8334 22.1667 12.8334 19.25C12.8334 16.3334 15.1667 14 18.0834 14ZM18.0834 16.3334C17.3099 16.3334 16.568 16.6407 16.021 17.1876C15.474 17.7346 15.1667 18.4765 15.1667 19.25C15.1667 20.0236 15.474 20.7655 16.021 21.3124C16.568 21.8594 17.3099 22.1667 18.0834 22.1667C18.857 22.1667 19.5988 21.8594 20.1458 21.3124C20.6928 20.7655 21.0001 20.0236 21.0001 19.25C21.0001 18.4765 20.6928 17.7346 20.1458 17.1876C19.5988 16.6407 18.857 16.3334 18.0834 16.3334ZM7.00008 25.6667C6.38124 25.6667 5.78775 25.4209 5.35017 24.9833C4.91258 24.5457 4.66675 23.9522 4.66675 23.3334V4.66671C4.66675 3.37171 5.71675 2.33337 7.00008 2.33337H8.16675V10.5L11.0834 8.75004L14.0001 10.5V2.33337H21.0001C21.6189 2.33337 22.2124 2.57921 22.65 3.01679C23.0876 3.45438 23.3334 4.04787 23.3334 4.66671V13.7784C21.9684 12.4717 20.1251 11.6667 18.0834 11.6667C16.0722 11.6667 14.1433 12.4657 12.7212 13.8878C11.299 15.31 10.5001 17.2388 10.5001 19.25C10.5001 21.945 11.9117 24.325 14.0351 25.6667H7.00008Z"
            fill={color || "#F39508"}
          />
        </svg>
      )
}
  
  export default BookSearch