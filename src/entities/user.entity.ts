import { hashSync } from "bcryptjs";
import { Contact } from "./contact.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  DeleteDateColumn,
  BeforeUpdate,
  OneToMany,
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column({ default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJGlDRZM5zsQv-p66Q6MYlWMqYgokxPNLOw&usqp=CAU" })
  profileImage: string | null;

  @Column()
  password: string;

  @Column()
  isAdm: boolean;
  
  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

}

export { User };







