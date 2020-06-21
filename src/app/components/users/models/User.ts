import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column('is_active')
  isActive: boolean;

  @CreateDateColumn('created_at')
  createdAt: Date;

  @UpdateDateColumn('updated_at')
  updatedAt: Date;
}
