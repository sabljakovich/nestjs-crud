import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, IsNumber, MinLength, Min, IsDefined } from 'class-validator'

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsDefined({ always: true })
    @IsString({ always: true })
    @MinLength(2, { always: true })
    name: string;

    @Column()
    @IsDefined({ always: true })
    @IsString({ always: true })
    @MinLength(3, { always: true })
    sku: string;

    @Column()
    @IsNumber()
    @Min(0, { always: true })
    price: number;
}