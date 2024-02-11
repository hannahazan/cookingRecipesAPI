import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

//@Get() est un décoracteur qui va indiquer au controller ce qu'il doit faire lorsque l'utilisateur emprunte la route spécifiée dans les paramètres
@Get("/test2")
  getBonjour():number{
    return this.appService.getBonjour();
  }
}
