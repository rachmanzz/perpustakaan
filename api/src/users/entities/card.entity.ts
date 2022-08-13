import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Card extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    card_name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

}