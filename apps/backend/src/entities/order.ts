import {
  BeforeInsert,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from "typeorm";

import { User } from "./user";
import { Product } from "./product";

@Entity()
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (user) => user.orders, { nullable: false })
  @JoinColumn({ name: "userId" })
  user: User;

  @ManyToOne(() => Product, (product) => product.orders, { nullable: false })
  @JoinColumn({ name: "productId" })
  product: Product;

  @Column("int", { nullable: false })
  quantity: number;

  @Column("decimal", { precision: 10, scale: 2 })
  totalPrice: number;

  @CreateDateColumn()
  createdAt: Date;
}
