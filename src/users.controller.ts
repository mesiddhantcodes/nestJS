// import { Controller, Get, HttpCode, Req, Res, HttpStatus, Param, Query, Post, Body } from "@nestjs/common";
// import { Request, Response } from 'express';
// @Controller('/users')
// export class UserController {
//     @Get('/profile')
//     // @HttpCode(HttpStatus.ACCEPTED) two ways to set status code
//     getProfile(@Req() req: Request, @Res() res: Response) {
//         res.status(HttpStatus.ACCEPTED);
//         res.json({
//             name: 'John Doe',
//             email: 'sudidis@gmail.com'
//         }); 
//     }
//     // @Get('/video/:id') for params
//     @Get('/video')
//     @HttpCode(200)
//     // getList(@Param() params: Record<string, any>) {
//     getList(@Query() query: Record<string, any>) {
//         console.log(query);
//         return 'success';
//     }

//     @Post('/videos')
//     addvideo(@Body() requestData: Record<string, any>){
//         console.log(requestData);
//         return {success: true, data: requestData}
//     }
// }


const USERS = [];

import { Controller, Get, HttpCode, Req, Res, HttpStatus, Param, Query, Post, Body } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
@Controller('/users')
export class UserController {
    @Post()
    addUser(@Body() createUserDto: CreateUserDto) {
        USERS.push(createUserDto);
        console.log(USERS);
        return { success: true, data: createUserDto }
    }

    @Get()
    getUsers() {
        return USERS;
    }

    @Get(':id')
    getUser(@Param('id') id:number) {
        const info= USERS.find((user) => user.id === id);
        console.log(info);
        return info;

    }

}