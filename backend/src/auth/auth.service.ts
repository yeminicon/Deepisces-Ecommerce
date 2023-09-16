import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async createUser(signUpDto: SignUpDto): Promise<User> {
    const { name, email, password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }

    return null;
  }

  async generateAuthToken(user: User): Promise<string> {
    const token = this.jwtService.sign({ id: user._id });
    return token;
  }
}

// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { User } from './schemas/user.schema';
// import * as bcrypt from 'bcryptjs';
// import { Model } from 'mongoose';
// import { JwtService } from '@nestjs/jwt/dist';
// import { SignUpDto } from './dto/signup.dto';
// import { LoginDto } from './dto/login.dto';

// @Injectable()
// export class AuthService {
//   constructor(
//     @InjectModel(User.name)
//     private userModel: Model<User>,
//     private jwtService: JwtService,
//   ) {}

//   async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
//     const { name, email, password } = signUpDto;

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await this.userModel.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     const token = this.jwtService.sign({ id: user._id });

//     return { token };
//   }

//   async login(loginDto: LoginDto): Promise<{ token: string; message: string }> {
//     const { email, password } = loginDto;

//     const user = await this.userModel.findOne({ email });

//     if (!user) {
//       throw new UnauthorizedException('Invalid email or password');
//     }

//     const isPasswordMatched = await bcrypt.compare(password, user.password);

//     if (!isPasswordMatched) {
//       throw new UnauthorizedException('Invalid email or password');
//     }
//     const token = this.jwtService.sign({ id: user._id });
//     return {
//       token,
//       message: 'Login Successful',
//     };
//   }
// }
