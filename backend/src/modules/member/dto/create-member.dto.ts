import {IsEmail, IsString, Matches} from "class-validator"
import {Column} from "typeorm"

export class CreateMemberDto {
	@IsString()
	username: string

	@IsString()
	@Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) // https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
	password: string

	@IsString()
	firstName: string

	@IsString()
	lastName: string

	@IsString()
	country: string

	@IsString()
	state: string

	@IsString()
	city: string

	@IsString()
	@Column()
	address: string

	@IsString()
	postalCode: string

	@IsString()
	@Matches(/^(\+|00)[1-9][0-9 \-]{7,32}$/)
	phoneNumber: string

	@IsEmail()
	email: string
}