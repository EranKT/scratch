import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {

    @Get('/asdf')
    getRootRoute() {
        return 'Get api call answer';
    }

    @Get('/bye')
    getByeThere() {
        return 'bye there';
    }
}
