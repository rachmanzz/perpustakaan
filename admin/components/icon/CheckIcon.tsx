import { type } from "os"
import { iconType } from "../IconType"
interface checkType extends iconType {
  stroke?: string
}
const CheckIcon = ({size=32, fill="none", height, width, stroke, ...props}: checkType) => {
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
            d="M28.3535 9.68692L28.7071 9.33337L28.3535 8.97982L26.4735 7.09982L26.1202 6.74643L25.7666 7.09965L11.9997 20.8535L6.89978 15.766L6.54622 15.4134L6.1931 15.7665L4.3131 17.6465L3.95955 18L4.3131 18.3536L11.6464 25.6869L12 26.0405L12.3535 25.6869L28.3535 9.68692Z"
            stroke={stroke || "#E6E6E6"}
          />
        </svg>
      )
}
  
  export default CheckIcon