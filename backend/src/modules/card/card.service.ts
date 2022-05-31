import {Injectable} from "@nestjs/common"
import {CardInfoDto} from "./dto/card-info.dto"

@Injectable()
export class CardService {
	validateCard(cardInfo: CardInfoDto) {
		// Split the value into an array separated by spaces
		const cardNumber = cardInfo.cardNumber.split(" ")

		// Select the last index
		const lastCardNumberIndex = cardNumber[cardNumber.length - 1]

		// Select last digit of the last index
		const validationNumber = parseInt(lastCardNumberIndex.split("")[lastCardNumberIndex.length - 1])

		// Reverse the card number without the last digit
		const cardNumberReversed = cardNumber
			.join("") // Join the array together
			.substring(0, 15) // Only select the first 15 digits
			.split("") // Split it up into an array again
			.reverse() // Reverse the array

		for (let i = 1; i < cardNumberReversed.length + 1; i++) {
			const num = parseInt(cardNumberReversed[i - 1])

			// If it's an uneven index
			if (i % 2 != 0) {
				// Check if doubling the value would go above 9
				if (num * 2 > 9) {
					const remaining = (num * 2) % 10

					// the value should be 1 + remaining
					cardNumberReversed[i - 1] = (1 + remaining).toString()
				} else {

					// the value should be itself times two
					cardNumberReversed[i - 1] = (num * 2).toString()
				}
			}
		}

		// sum of the card number
		let sum = 0
		for (let i = 0; i < cardNumberReversed.length; i++) {
			sum += parseInt(cardNumberReversed[i])
		}

		// split the sum into a string array
		const sumArray = sum.toString().split("")

		// select the last value of the sum array
		const lastSumVal = sumArray[sumArray.length - 1]

		// Card is valid if the last digit of the card number is the same as the last value of the sum array
		return validationNumber === parseInt(lastSumVal)
	}
}
