import {Body, Controller, Get} from "@nestjs/common"
import {CardService} from "./card.service"
import {CardInfoDto} from "./dto/card-info.dto"

@Controller("card")
export class CardController {
	constructor(private readonly cardService: CardService) {
	}

	@Get("save")
	saveCard(@Body() cardInfo: CardInfoDto) {
		return this.cardService.validateCard(cardInfo)
	}
}
