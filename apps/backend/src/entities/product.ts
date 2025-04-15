import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from './order';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  price: number;

  @Column('int', { nullable: false })
  stock: number;

  @OneToMany(() => Order, (order) => order.product)
  orders: Order[];
}
