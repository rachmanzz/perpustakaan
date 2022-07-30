import { iconType } from "../IconType"

const BookClockOutline = ({size=32, fill="none", height, width, color, ...props}: iconType) => {
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
            d="M26.6666 15.0133V5.33329C26.6666 3.86663 25.4799 2.66663 23.9999 2.66663H7.99992C6.51992 2.66663 5.33325 3.86663 5.33325 5.33329V26.6666C5.33325 28.1466 6.51992 29.3333 7.99992 29.3333H14.8133C16.4933 30.9866 18.7866 32 21.3333 32C26.4933 32 30.6666 27.8266 30.6666 22.6666C30.6666 19.4933 29.0799 16.7066 26.6666 15.0133ZM23.9999 5.33329V13.72C23.1599 13.48 22.2666 13.3333 21.3333 13.3333C19.9066 13.3333 18.5466 13.6666 17.3333 14.24V5.33329H23.9999ZM7.99992 5.33329H10.6666V16L13.9999 13L16.1333 14.92C13.6399 16.6 11.9999 19.44 11.9999 22.6666C11.9999 24.1066 12.3333 25.4533 12.9066 26.6666H7.99992V5.33329ZM21.3333 29.3333C17.6533 29.3333 14.6666 26.3466 14.6666 22.6666C14.6666 18.9866 17.6533 16 21.3333 16C25.0133 16 27.9999 18.9866 27.9999 22.6666C27.9999 26.3466 25.0133 29.3333 21.3333 29.3333ZM21.9999 23L25.8133 25.2533L24.8133 26.88L19.9999 24V17.3333H21.9999V23Z"
            fill={color || "#F39508"}
          />
        </svg>
      )
}
  
  export default BookClockOutline