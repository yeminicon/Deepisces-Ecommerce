import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    createUser(signUpDto: SignUpDto): Promise<User>;
    validateUser(email: string, password: string): Promise<User | null>;
    generateAuthToken(user: User): Promise<string>;
}
