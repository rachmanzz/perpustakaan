import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDto {
    @ApiProperty()
    name: string

    @ApiProperty({required: false})
    username?: string

    @ApiProperty()
    email: string

    @ApiProperty({required: false})
    password?: string

    @ApiProperty({default: false})
    verified?: boolean
}
