import { ApiProperty } from "@nestjs/swagger";
import { AddressType } from "../entities/address.entity";
export class CreateAddressDto {

    @ApiProperty({ minLength: 3})
    name: string;

    @ApiProperty({ enum: AddressType})
    type: AddressType;

    @ApiProperty()
    postal_code: string;

    @ApiProperty()
    region_id: number;

    @ApiProperty({ required: false})
    profile_id?: number;


}
