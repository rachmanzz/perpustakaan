import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Profile } from "./profile.entity";

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

    @OneToMany(() => Profile, profile => profile.user)
    profiles: Profile[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
