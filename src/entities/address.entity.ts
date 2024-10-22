import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "../user/dto/create-user.dto";
import { User } from "./user.entity";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 64, default: "Tashkent" })
    city: string

    @Column({ type: "int" })
    postal_code: number

    @Column({ type: "varchar", length: 72 })
    address: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    create_at: Date

    @OneToOne((type) => User, (user) => user.address)
    @JoinColumn()
    user: User

    @Column({ nullable: true })
    userId: number; 
}
