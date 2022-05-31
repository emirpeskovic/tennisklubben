import {Type} from "class-transformer"
import {IsEmail, IsString, Matches} from "class-validator"
import {Column, Entity, OneToMany} from "typeorm"
import {BaseEntity} from "../../common/base/entity"
import {Location} from "../../common/embeddable/location"
import {User} from "../../common/embeddable/user"
import {CardEntity} from "../card/card.entity"

@Entity()
export class MemberEntity extends BaseEntity {
	@Type(() => User)
	@Column(() => User, {prefix: false})
	user: User

	@IsString()
	@Column()
	firstName: string

	@IsString()
	@Column()
	lastName: string

	@Type(() => Location)
	@Column(() => Location, {prefix: false})
	location: Location

	@IsString()
	@Matches(/^(\+|00)[1-9][0-9 \-\(\)\.]{7,32}$/)
	@Column()
	phoneNumber: string

	@IsEmail()
	@Type(() => String)
	@Column()
	email: string

	@OneToMany(() => CardEntity, (card) => card.member)
	@Column("int", {
		array: true,
		nullable: true,
	})
	cards?: CardEntity[]
}