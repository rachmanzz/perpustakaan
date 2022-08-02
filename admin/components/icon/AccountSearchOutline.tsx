import { iconType } from "../IconType"

const AccountSearchOutline = ({size=32, fill="none", height, width, color, ...props}: iconType) => {
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
            d="M13.3333 17.3334C12.8667 18.12 12.48 18.9867 12.2533 19.9067C8.66667 20.2134 5.20001 21.8934 5.20001 22.6667V24.1334H12.2667C12.4933 25.04 12.8667 25.8934 13.3333 26.6667H2.66667V22.6667C2.66667 19.12 9.77334 17.3334 13.3333 17.3334ZM13.3333 5.33337C14.7478 5.33337 16.1044 5.89528 17.1046 6.89547C18.1048 7.89567 18.6667 9.25222 18.6667 10.6667C18.6667 11.88 18.2533 13 17.5733 13.9067C16.4267 14.3334 15.4 15.0134 14.5467 15.8667L13.3333 16C11.9189 16 10.5623 15.4381 9.5621 14.4379C8.56191 13.4378 8.00001 12.0812 8.00001 10.6667C8.00001 9.25222 8.56191 7.89567 9.5621 6.89547C10.5623 5.89528 11.9189 5.33337 13.3333 5.33337V5.33337ZM13.3333 7.86671C12.5907 7.86671 11.8785 8.16171 11.3534 8.68681C10.8283 9.21191 10.5333 9.9241 10.5333 10.6667C10.5333 11.4093 10.8283 12.1215 11.3534 12.6466C11.8785 13.1717 12.5907 13.4667 13.3333 13.4667C14.0759 13.4667 14.7881 13.1717 15.3132 12.6466C15.8383 12.1215 16.1333 11.4093 16.1333 10.6667C16.1333 9.9241 15.8383 9.21191 15.3132 8.68681C14.7881 8.16171 14.0759 7.86671 13.3333 7.86671ZM20.6667 16C24 16 26.6667 18.6667 26.6667 22C26.6667 23.1734 26.3333 24.28 25.7467 25.2L29.8533 29.3334L28 31.1867L23.84 27.0934C22.92 27.6667 21.8267 28 20.6667 28C17.3333 28 14.6667 25.3334 14.6667 22C14.6667 18.6667 17.3333 16 20.6667 16ZM20.6667 18.6667C19.7826 18.6667 18.9348 19.0179 18.3096 19.643C17.6845 20.2681 17.3333 21.116 17.3333 22C17.3333 22.8841 17.6845 23.7319 18.3096 24.3571C18.9348 24.9822 19.7826 25.3334 20.6667 25.3334C21.5507 25.3334 22.3986 24.9822 23.0237 24.3571C23.6488 23.7319 24 22.8841 24 22C24 21.116 23.6488 20.2681 23.0237 19.643C22.3986 19.0179 21.5507 18.6667 20.6667 18.6667Z"
            fill={color || "#F39508"}
          />
        </svg>
      )
}
  
  export default AccountSearchOutline