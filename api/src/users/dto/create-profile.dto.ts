import { CreateAddressDto } from "@apps/regions/dto/create-address.dto";
import { ApiProperty } from "@nestjs/swagger";
export class CreateProfileDto {
    @ApiProperty()
    nickname: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    place_of_birth: string;

    @ApiProperty()
    birthday: Date;

    @ApiProperty()
    id_card: string;

    @ApiProperty()
    lifetime: boolean;

    @ApiProperty({required: false})
    expired_card: Date;

}

export type CreateProfileAndAddressDto = CreateProfileDto & CreateAddressDto