import { UserService } from './user.service';
import { User } from './schemas/user.schema';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(req: any): User;
}
