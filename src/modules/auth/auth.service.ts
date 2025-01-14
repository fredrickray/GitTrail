import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(githubId: string): Promise<any> {
    const user = await this.usersService.findByGithubId(githubId);
    if (!user) {
      return null;
    }
    return user;
  }

  async login(user: any): Promise<any> {
    const payload = { username: user.username, sub: user.githubId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
