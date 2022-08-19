import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Card } from "./card.entity";
import { User } from "./user.entity";
import { Address } from "@apps/regions/entities/address.entity";


@Entity()
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({nullable: true})
    nickname: string;

    @Column({nullable: true})
    phone: string;

    @Column()
    place_of_birth: string;

    @Column()
    birthday: Date;

    @Column()
    id_card: string;

    @Column({default: true})
    lifetime: boolean;

    @Column({nullable: true, default: null})
    expired_card: Date;

    @OneToOne(() => User, user => user.profile, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Card, card => card.profiles, { onDelete: "RESTRICT", onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'card_id' })
    card: Card;

    @OneToMany(() => Address, address => address.profile)
    addresses: Address[];
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;
}