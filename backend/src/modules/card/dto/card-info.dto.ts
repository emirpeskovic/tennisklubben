import {IsNumber, IsString, Matches, Max, Min} from "class-validator"

export class CardInfoDto {
	@IsString()
	@Matches(/^(([0-9]){4}(\s?)){4}(?<!\s)$/)
	cardNumber: string

	@IsNumber()
	@Min(new Date().getMonth() + 1)
	@Max(12)
	expMonth: number

	@IsNumber()
	@Min(new Date().getFullYear())
	@Max(new Date().getFullYear() + 50)
	expYear: number

	@IsString()
	@Matches(/^[0-9]{3,4}$/)
	cvv: string
}