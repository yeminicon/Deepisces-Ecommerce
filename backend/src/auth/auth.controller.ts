import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiCreatedResponse({ description: 'User successfully registered.' })
  @ApiBadRequestResponse({
    description: 'Invalid input or user already exists.',
  })
  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  async signUp(@Body() signUpDto: SignUpDto) {
    const user = await this.authService.createUser(signUpDto);
    return { message: 'User successfully registered', user };
  }

  @ApiOkResponse({ description: 'User successfully logged in.' })
  @ApiBadRequestResponse({ description: 'Invalid email or password.' })
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = await this.authService.generateAuthToken(user);
    return { token, message: 'Login successful' };
  }
}

// import { Controller, Post, Get, Body } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { SignUpDto } from './dto/signup.dto';
// import { LoginDto } from './dto/login.dto';
// import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

// @Controller('auth')
// export class AuthController {
//   constructor(private authService: AuthService) {}

//   @Post('/signup')
//   signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
//     return this.authService.signUp(signUpDto);
//   }
//   @Post('/login')
//   login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
//     return this.authService.login(loginDto);
//   }
// }
