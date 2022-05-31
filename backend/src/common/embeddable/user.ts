import {InternalServerErrorException} from "@nestjs/common"
import * as argon2 from "argon2"
import {IsString, Matches} from "class-validator"
import {BeforeInsert, BeforeUpdate, Column} from "typeorm"

export class User {
	@IsString()
	@Column()
	username: string

	@IsString()
	@Column()
	@Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) // https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
	password: string

	@BeforeInsert()
	@BeforeUpdate()
	async hashPassword() {
		if (this.password) {
			try {
				this.password = await argon2.hash(this.password)
			} catch (e) {
				throw new InternalServerErrorException("Failed to hash password...")
			}
		}
	}

	public async checkPassword(password: string) {
		try {
			return await argon2.verify(this.password, password)
		} catch (e) {
			throw new InternalServerErrorException(
				"Failed to check password hash..." + e,
			)
		}
	}
}