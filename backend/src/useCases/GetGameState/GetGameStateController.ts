import { Request, Response } from "express";
import { GetGameStateService } from "./GetGameStateService";

class GetGameStateController{
    handle(req: Request, res: Response){
        const getGameStateService= new GetGameStateService()

        const table = getGameStateService.execute()
        
        return res.json(table)
    }
}

export { GetGameStateController }