import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Profile } from "./profile.entity";
import * as bcrypt from 'bcrypt';

export enum UserType {
    SUPERUSER = "superuser",
    ADMIN = "admin",
    OFFICER = "officer",
    VISITOR = "visitor"

}

const saltOrRounds = 10;

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    name: string;

    @Column({unique: true, nullable: true})
    username: string;

    @Column({unique: true})
    email: string;

    @Column({nullable: true, select: false})
    password: string;

    @Column()
    email_verified: boolean

    @Column()
    verified: boolean // verify by admin

    @Column({enum: UserType, default: UserType.VISITOR})
    user_type: UserType

    @OneToOne(() => Profile, profile => profile.user)
    profile: Profile;

    @BeforeInsert()
    async hashPassword() {
        this.password = this.password ?  await bcrypt.hash(this.password, saltOrRounds) : null;
    }

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
