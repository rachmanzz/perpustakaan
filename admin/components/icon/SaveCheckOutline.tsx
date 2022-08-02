import { iconType } from "../IconType"

const SaveCheckOutline = ({size=32, fill="none", height, width, color, ...props}: iconType) => {
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
            d="M18.6667 17.0667C18 16.4133 17.04 16 16 16C13.7867 16 12 17.7867 12 20C12 21.7467 13.12 23.2133 14.6667 23.76C14.76 20.8933 16.36 18.4 18.6667 17.0667ZM14.7867 25.3333H6.66667V6.66667H21.56L25.3333 10.44V16.4667C26.3333 16.8133 27.2267 17.3333 28 18.0533V9.33333L22.6667 4H6.66667C5.18667 4 4 5.2 4 6.66667V25.3333C4 26.8 5.18667 28 6.66667 28H15.7467C15.28 27.1867 14.9467 26.2933 14.7867 25.3333ZM8 13.3333H20V8H8V13.3333ZM21 28L17.3333 24L18.88 22.4533L21 24.5733L25.7867 19.7867L27.3333 21.6667L21 28Z"
            fill={color || "#F39508"}
          />
        </svg>
      )
}
  
  export default SaveCheckOutline