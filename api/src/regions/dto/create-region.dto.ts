import { ApiProperty } from "@nestjs/swagger";
import { RegionType } from "../entities/region.entity";
export class CreateRegionDto {
    @ApiProperty({ minLength: 9})
    code: string;

    @ApiProperty({ minLength: 3})
    name: string;

    @ApiProperty({ enum: RegionType})
    type: RegionType;

    @ApiProperty({ minimum: 0})
    regionOrder: number;

    @ApiProperty({required: false})
    parentId: number;
}
