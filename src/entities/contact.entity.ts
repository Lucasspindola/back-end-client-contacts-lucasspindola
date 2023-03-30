import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
  } from "typeorm";
  import { User } from "./user.entity";
  
  @Entity("contacts")
  class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    phone: string;
  
    @Column()
    email: string;
    
    @Column({ default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJGlDRZM5zsQv-p66Q6MYlWMqYgokxPNLOw&usqp=CAU" })
    profileImage: string | null;
  
    @ManyToOne(() => User, (user) => user.contacts)
    user: User;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date;
  }
  
  export { Contact };
  ``
  