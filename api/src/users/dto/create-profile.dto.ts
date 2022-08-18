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

    @ApiProperty()
    expired_card: Date;

    @ApiProperty()
    address: string;

    @ApiProperty()
    address_region_id: number;

    @ApiProperty()
    domicile: string;

    @ApiProperty()
    domicile_region_id: number;

}