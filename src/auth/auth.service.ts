import { AuthDto } from './dto/auth.dto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from "@nestjs/common";
import * as argon from 'argon2';
@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){

    }
    async signUp(dto: AuthDto){
        // Hash password
        const hashPassword = await argon.hash(dto.password);
        // Save user in db
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash: hashPassword,
            },
            select: {
                id: true,
                email: true,
                createdAt: true,
            },
        })
        return user;
    }

    signin(){
        return "I am signin";
    }
}