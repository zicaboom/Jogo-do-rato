import { Request, Response } from "express";
import { CreateMouseService } from "./CreateMouseService";

class CreateMouseController{
    handle(req: Request, res: Response){
        const createMouseService= new CreateMouseService()
        
        const mouse = createMouseService.execute()

        return res.json(mouse)
    }
}

export { CreateMouseController }