import { Profile } from "@apps/users/entities/profile.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Region } from "./region.entity";

export enum AddressType {
    RESIDENCE = "residence",
    DOMICILE = "domicile"
}

@Entity()
export class Address extends BaseEntity {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;

    @Column()
    name: string;

    @Column({enum: AddressType, default: AddressType.RESIDENCE})
    type: AddressType;

    @ManyToOne(() => Region, region => region.addresses)
    region: Region;

    @ManyToOne(() => Profile, profile => profile.addresses)
    profile: Profile;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
