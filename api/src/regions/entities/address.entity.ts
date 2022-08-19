import { Profile } from "@apps/users/entities/profile.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Region } from "./region.entity";

export enum AddressType {
    RESIDENCECARD = "residence-card",
    DOMICILE = "domicile"
}

@Entity()
export class Address extends BaseEntity {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;

    @Column()
    name: string;

    @Column({enum: AddressType, default: AddressType.RESIDENCECARD})
    type: AddressType;

    @Column()
    postal_code: string;

    @ManyToOne(() => Region, region => region.addresses)
    @JoinColumn({name: 'region_id'})
    region: Region;

    @ManyToOne(() => Profile, profile => profile.addresses)
    @JoinColumn({name: 'profile_id'})
    profile: Profile;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
