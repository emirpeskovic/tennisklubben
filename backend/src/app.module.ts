import {Module} from "@nestjs/common"
import {ConfigModule} from "@nestjs/config"
import {TypeOrmModule} from "@nestjs/typeorm"
import * as Joi from "joi"
import {CardModule} from "./modules/card/card.module"
import {MemberModule} from "./modules/member/member.module"

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ".env." + process.env.NODE_ENV,
			validationSchema: Joi.object({
				NODE_ENV: Joi.string().valid("dev", "prod", "test").required(),
				DB_SCHEMA: Joi.string(),
			}),
		}),
		TypeOrmModule.forRoot({
			type: "postgres",

			host: process.env.DB_HOST,
			port: parseInt(process.env.DB_PORT),
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_SCHEMA,

			entities: ["dist/**/*.entity{.ts,.js}"],

			migrationsTableName: "migration",
			migrations: ["src/migration/*.ts"],

			synchronize: true, //process.env.NODE_ENV !== 'prod', TODO
			logging: process.env.NODE_ENV === "dev",

			autoLoadEntities: true,
		}),
		MemberModule,
		CardModule,
	],
})
export class AppModule {
}
