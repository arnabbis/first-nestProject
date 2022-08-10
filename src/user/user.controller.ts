import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getCompanys() {
    return this.userService.getData();
  }
  @Post('/create')
  store(@Body() userDetailsDto:{name:String,email:String}) {
    return this.userService.create(userDetailsDto);
  }

  @Get('/:userId')
  Company(@Param() param: { userId: string }) {
    const convertedNo = parseInt(param.userId);
    if (convertedNo) {
      return convertedNo;
    } else {
      return 'it should be in no';
    }
  }

  @Delete('/:userId')
  deleteCompany(@Param() param: { userId: number }) {
    return this.userService.delete(param);
  }

  @Patch('/:userId')
  update(@Body() body:any, @Param() Param: { userId: number }) {
    return this.userService.update(body,Param);
  }
}
