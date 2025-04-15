import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from './order';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false})
  email: string;

  @Column({ type: 'decimal', default: 100 })
  balance: number;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
