import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get(':githubId')
  async getUser(@Param('githubId') githubId: string) {
    return this.usersService.findByGithubId(githubId);
  }
}
