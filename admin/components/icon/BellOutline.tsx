import { iconType } from "../IconType"
interface BellOutlineType extends iconType {
  notificationOn?: boolean
}
const BellOutline = ({size=35, fill="none", height, width, color, notificationOn=false, ...props}: BellOutlineType) => {
    const nextWidth = width || size
    const nextHeight = height || size
    return (
        <svg
          width={nextWidth}
          height={nextHeight}
          fill={fill}
          viewBox="0 0 35 35"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M27.1166 24.2833V16.9167C26.4083 17.0583 25.7 17.2 24.9916 17.2H24.2833V25.7H10.1166V15.7833C10.1166 11.8167 13.2333 8.69999 17.2 8.69999C17.3416 6.85833 18.1916 5.29999 19.325 4.02499C18.9 3.45833 18.05 3.03333 17.2 3.03333C15.6416 3.03333 14.3666 4.30833 14.3666 5.86666V6.29166C10.1166 7.56666 7.28328 11.3917 7.28328 15.7833V24.2833L4.44995 27.1167V28.5333H29.95V27.1167L27.1166 24.2833ZM14.3666 29.95C14.3666 31.5083 15.6416 32.7833 17.2 32.7833C18.7583 32.7833 20.0333 31.5083 20.0333 29.95H14.3666ZM29.95 9.40833C29.95 12.1 27.6833 14.3667 24.9916 14.3667C22.3 14.3667 20.0333 12.1 20.0333 9.40833C20.0333 6.71666 22.3 4.44999 24.9916 4.44999C27.6833 4.44999 29.95 6.71666 29.95 9.40833Z"
            fill={color || "#F39508"}
          />
          <circle cx={25.5} cy={9.5} r={5.5} fill={notificationOn ? "#F39508":"#FFCE85"} />
        </svg>
      )
}
  
  export default BellOutline