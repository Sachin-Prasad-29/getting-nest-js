import { Injectable } from '@nestjs/common';
import { User } from './dto';

@Injectable()
export class UserService {
  user = [];
  registerSvc(dto: User): User {
    this.user.push(dto);
    return this.user[this.user.length - 1];
  }
  loginSvc(dto: User): User {
    const user = this.user.filter((user) => {
      if (user.email === dto.email) return user;
    });
    return user[0];
  }
  getUserSvc(id: string):User {
    const user = this.user.filter((user) => {
      if (user.id === id) return user;
    });
    return user[0];
  }
  updateUserSvc(id: string, dto: User):User {
    let updatedUser: User;
    this.user.forEach((user) => {
      if (user.id === id) {
        user = dto;
        updatedUser = user;
      }
    });
    return updatedUser;
  }
  deleteUserSvc(id: string) {
    
    return this.user[0]
    
  }
}
