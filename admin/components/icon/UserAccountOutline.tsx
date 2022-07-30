import { iconType } from "../IconType"

const UserAccountOutline = ({size=32, fill="none", height, width, color, ...props}: iconType) => {
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
            d="M16.0001 2.66663C14.2491 2.66663 12.5153 3.0115 10.8976 3.68157C9.27996 4.35163 7.81011 5.33375 6.57199 6.57187C4.07151 9.07235 2.66675 12.4637 2.66675 16C2.66675 19.5362 4.07151 22.9276 6.57199 25.428C7.81011 26.6662 9.27996 27.6483 10.8976 28.3184C12.5153 28.9884 14.2491 29.3333 16.0001 29.3333C19.5363 29.3333 22.9277 27.9285 25.4282 25.428C27.9287 22.9276 29.3334 19.5362 29.3334 16C29.3334 14.249 28.9885 12.5152 28.3185 10.8975C27.6484 9.27984 26.6663 7.80998 25.4282 6.57187C24.1901 5.33375 22.7202 4.35163 21.1025 3.68157C19.4849 3.0115 17.751 2.66663 16.0001 2.66663V2.66663ZM9.42675 24.3733C10.0001 23.1733 13.4934 22 16.0001 22C18.5067 22 22.0001 23.1733 22.5734 24.3733C20.7601 25.8133 18.4801 26.6666 16.0001 26.6666C13.5201 26.6666 11.2401 25.8133 9.42675 24.3733ZM24.4801 22.44C22.5734 20.12 17.9467 19.3333 16.0001 19.3333C14.0534 19.3333 9.42675 20.12 7.52008 22.44C6.16008 20.6666 5.33341 18.4266 5.33341 16C5.33341 10.12 10.1201 5.33329 16.0001 5.33329C21.8801 5.33329 26.6667 10.12 26.6667 16C26.6667 18.4266 25.8401 20.6666 24.4801 22.44ZM16.0001 7.99996C13.4134 7.99996 11.3334 10.08 11.3334 12.6666C11.3334 15.2533 13.4134 17.3333 16.0001 17.3333C18.5867 17.3333 20.6667 15.2533 20.6667 12.6666C20.6667 10.08 18.5867 7.99996 16.0001 7.99996ZM16.0001 14.6666C15.4696 14.6666 14.9609 14.4559 14.5859 14.0808C14.2108 13.7058 14.0001 13.1971 14.0001 12.6666C14.0001 12.1362 14.2108 11.6275 14.5859 11.2524C14.9609 10.8773 15.4696 10.6666 16.0001 10.6666C16.5305 10.6666 17.0392 10.8773 17.4143 11.2524C17.7894 11.6275 18.0001 12.1362 18.0001 12.6666C18.0001 13.1971 17.7894 13.7058 17.4143 14.0808C17.0392 14.4559 16.5305 14.6666 16.0001 14.6666Z"
            fill={color || "#F39508"}
          />
        </svg>
      )
}
  
  export default UserAccountOutline