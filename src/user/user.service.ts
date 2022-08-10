import { Injectable } from '@nestjs/common';
import { Request, RequestHandler } from 'express';

@Injectable()
export class UserService {
    getData(){
        return {name:'Arnab',company:'Geospoc'}
    }
    create(userDetailsDto:{name:String,email:String}){
        return userDetailsDto;
    }
    update(body:any,Param:{userId:number}){
        return {body,Param}
    }
    delete(param:{userId:number}){
        return param
    }
}
