import {Type} from "class-transformer"
import {IsDate, IsInt} from "class-validator"
import {BeforeInsert, BeforeUpdate, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm"

export class BaseEntity {
	@PrimaryGeneratedColumn()
	@IsInt()
	@Type(() => Number)
	id: number

	@CreateDateColumn()
	@Column({nullable: false})
	@IsDate()
	@Type(() => Date)
	createdAt: Date

	@UpdateDateColumn()
	@Column({nullable: false})
	@IsDate()
	@Type(() => Date)
	updatedAt: Date

	@BeforeInsert()
	async beforeInsert() {
		this.createdAt = new Date()
		this.updatedAt = new Date()
	}

	@BeforeUpdate()
	async beforeUpdate() {
		this.updatedAt = new Date()
	}
}