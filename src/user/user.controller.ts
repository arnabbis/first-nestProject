import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('user')
export class UserController {

    @Get()
    getCompanys(){
      return {name:'Arnab',company:'Geospoc'}
      
    }
    @Post()
    store(@Req() req:Request){
      return req.body;
    }
    @Get('/:userId')
    getCompany(@Param() Param:{userId:Number}){
      return Param;
    }
    @Delete('/:userId')
    deleteCompany(@Param() Param:{userId:Number}){
      return Param;
    }
    @Patch('/:userId')
    update(@Req() req:Request){
      return req.body;
    }
}

