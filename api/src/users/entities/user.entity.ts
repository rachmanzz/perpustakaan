import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum UserType {
    SUPERUSER = "superuser",
    ADMIN = "admin",
    OFFICER = "officer",
    VISITOR = "visitor"

}

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    username: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    email_verified: boolean

    @Column()
    verified: boolean // verify by admin

    @Column({enum: UserType, default: UserType.VISITOR})
    user_type: UserType

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
