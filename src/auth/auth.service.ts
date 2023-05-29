import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){
        
    }
    signUp(){
        return {mgs:"I am signup"};
    }

    signin(){
        return "I am signin";
    }
}