import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Profile } from "./profile.entity";

@Entity()
export class Card extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    card_name: string;

    @Column()
    description: string;

    @OneToMany(() => Profile, profile => profile.card)
    profiles: Profile[];

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

}