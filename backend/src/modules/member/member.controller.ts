import {Body, Controller, Post} from "@nestjs/common"
import {CreateMemberDto} from "./dto/create-member.dto"

@Controller("member")
export class MemberController {
	@Post("create")
	createMember(@Body() createMemberDto: CreateMemberDto) {
		
	}
}
