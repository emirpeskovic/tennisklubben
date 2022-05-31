import {Type} from "class-transformer"
import {IsString} from "class-validator"
import {Column} from "typeorm"

export class Location {
	@IsString()
	@Type(() => String)
	@Column()
	country: string

	@IsString()
	@Type(() => String)
	@Column()
	state: string

	@IsString()
	@Type(() => String)
	@Column()
	city: string

	@IsString()
	@Type(() => String)
	@Column()
	address: string

	@IsString()
	@Type(() => String)
	@Column()
	postalCode: string
}