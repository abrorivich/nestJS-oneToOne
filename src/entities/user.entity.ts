import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "../user/dto/create-user.dto";
import { Address } from "./address.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 64 })
    fullname: string

    @Column({ type: "int", })
    age: number

    @Column({ type: "varchar", unique: true })
    username: string

    @Column({ type: "varchar", unique: true })
    password: string

    @Column({ type: "enum", enum: UserRole, default: UserRole.MALE })
    role: UserRole

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    create_at: Date

    @OneToOne((type) => Address, (address) => address.user)
    address: Address
}
