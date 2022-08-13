import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

    @Column()
    address: string;
    
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;
}