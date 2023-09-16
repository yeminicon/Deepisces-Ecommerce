import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(signUpDto: SignUpDto): Promise<{
        message: string;
        user: import("./schemas/user.schema").User;
    }>;
    login(loginDto: LoginDto): Promise<{
        token: string;
        message: string;
    }>;
}
