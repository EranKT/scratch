import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {

    @Get()
    getRootRoute() {
        return 'Get api call answer';
    }
}