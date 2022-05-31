import {Type} from "class-transformer"
import {IsNumber, IsString, Matches, Max, Min} from "class-validator"
import {Column, Entity, JoinColumn, ManyToOne} from "typeorm"
import {BaseEntity} from "../../common/base/entity"
import {MemberEntity} from "../member/member.entity"

@Entity()
export class CardEntity extends BaseEntity {
	@IsString()
	@Type(() => String)
	@Column()
	@Matches(/^(([0-9]){4}(\s?)){4}(?<!\s)$/)
	cardNumber: string

	@IsNumber()
	@Type(() => Number)
	@Min(new Date().getMonth() + 1)
	@Max(12)
	@Column({nullable: false})
	expMonth: number

	@IsNumber()
	@Type(() => Number)
	@Min(new Date().getFullYear())
	@Max(new Date().getFullYear() + 50)
	@Column({nullable: false})
	expYear: number

	@IsString()
	@Type(() => String)
	@Column({nullable: false})
	@Matches(/^[0-9]{3,4}$/)
	cvv: string

	@ManyToOne(() => MemberEntity, (member) => member.cards)
	@JoinColumn()
	member: MemberEntity
}