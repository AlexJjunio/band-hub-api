import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(email: string, password: string, name: string) {
    const hashed = await bcrypt.hash(password, 10);
    const user = this.usersRepo.create({ email, password: hashed, name });
    const saved = await this.usersRepo.save(user);
    const { password: _, ...result } = saved;
    return result;
  }

  async login(email: string, password: string) {
    const user = await this.usersRepo.findOne({
      where: { email },
      select: { id: true, email: true, password: true },
    });
    if (!user) throw new UnauthorizedException('Credenciais inválidas');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new UnauthorizedException('Credenciais inválidas');

    const payload = { sub: user.id, email: user.email };
    return { access_token: this.jwtService.sign(payload) };
  }
}
