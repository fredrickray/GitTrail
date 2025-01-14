import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findByGithubId(githubId: string): Promise<User> {
    return this.usersRepository.findOne({ where: { githubId } });
  }

  async create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }
}
