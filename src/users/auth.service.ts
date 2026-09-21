import { Injectable } from "@nestjs/common";
import { UsersService } from "./users.service";

@Injectable()
export class AuthService {
	constructor(private usersService: UsersService) {}

	signup(email: string, password: string) {
		//See if email is in use
		const user = this.usersService.find(email);
		//Hash the users password

		//Create a new user and save it

		//Return the user
	}

	signin() {
	}
}