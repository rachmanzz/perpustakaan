import { ApiProperty } from "@nestjs/swagger";
export class CreateCardDto {
    @ApiProperty()
    card_name: string;
    @ApiProperty()
    description: string;
}