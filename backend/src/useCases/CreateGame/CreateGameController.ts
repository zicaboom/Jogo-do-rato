import { Request, Response } from "express";
import { CreateGameService } from "./CreateGameService";

class CreateGameController{
    handle(req: Request, res: Response){
        const createGameService= new CreateGameService()

        const table = createGameService.execute()
        
        return res.json(table)
    }
}

export { CreateGameController }