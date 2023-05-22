import { User } from "../entities/user.entity";

export interface LoginResponse {
    user: User;
    toke: string;
}