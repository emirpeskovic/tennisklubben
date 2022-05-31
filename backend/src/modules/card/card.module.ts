import {Module} from "@nestjs/common"
import {TypeOrmModule} from "@nestjs/typeorm"
import {CardEntity} from "./card.entity"
import {CardService} from "./card.service"
import { CardController } from './card.controller';

@Module({
	imports: [TypeOrmModule.forFeature([CardEntity])],
	providers: [CardService],
	exports: [CardService],
	controllers: [CardController],
})
export class CardModule {
}
