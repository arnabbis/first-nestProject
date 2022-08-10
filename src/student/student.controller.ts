import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('student')
export class StudentController {
    @Get()
    getDetails(){
        return {
            name:"arnab",
            age:"21",
            company:"google"
        }
    }
    @Post('/create')
    createDetails(@Req() req:Request){
        return req.body;
    }
    @Get('/fetch')
    fetchDetails(@Param() Param:{name:String}){
        return Param;
    }
}
