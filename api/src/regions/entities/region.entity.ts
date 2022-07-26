import { Profile } from "../../users/entities/profile.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, TreeChildren, TreeParent } from "typeorm";


export enum RegionType {
    COUNTRY = 'country',
    PROVINCE = 'province',
    CITY = 'city',
    DISTRICT = 'district',
    SUB_DISTRICT = 'sub_district',
    VILLAGE = 'village',
    URBAN_VILLAGE = 'urban_village',
}

@Entity()
export class Region extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    name: string;

    @Column({enum: RegionType, default: RegionType.VILLAGE})
    type: RegionType;

    @Column()
    region_order: number;

    @OneToMany(() => Profile, profile => profile.region)
    profiles: Profile[];

    @TreeChildren()
    children: Region[];

    @TreeParent()
    parent: Region;
}
