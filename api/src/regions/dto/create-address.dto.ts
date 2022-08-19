import { ApiProperty } from "@nestjs/swagger";
import { AddressType } from "../entities/address.entity";
export class CreateAddressDto {

    @ApiProperty({ minLength: 3})
    name: string;

    @ApiProperty({ enum: AddressType})
    type: AddressType;

    @ApiProperty()
    region_id: number;

    @ApiProperty()
    profile_id: number;


}
