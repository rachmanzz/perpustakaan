import { Region } from "../../regions/entities/region.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Card } from "./card.entity";
import { User } from "./user.entity";


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

    @ManyToOne(() => User, user => user.profiles, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    user: User;

    @ManyToOne(() => Card, card => card.profiles, { onDelete: "RESTRICT", onUpdate: 'CASCADE' })
    card: Card;

    @ManyToOne(() => Region, region => region.profiles)
    region: Region;

    @Column()
    address: string;
    
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;
}