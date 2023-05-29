import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    signUp(){
        return {mgs:"I am signup"};
    }

    signin(){
        return "I am signin";
    }
}