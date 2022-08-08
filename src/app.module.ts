import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
// import { userController } from "./_user/user.controller";
// import { UserModule } from "./_user/user.module";
import { UserModule } from './user/user.module';

@Module({
  controllers:[AppController],
  imports: [UserModule],
  
})
export class AppModule{}