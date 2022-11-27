import { v4 } from "uuid"
import { Mouse } from "../../entities/Mouse"
import { Table } from "../../entities/Table"
import { CreateGameService } from "../CreateGame/CreateGameService"

class CreateMouseService{
    execute(){
        if(!Table.getInit){
            const createGameService = new CreateGameService()
            createGameService.execute()
        }

        const mouse = new Mouse(v4())
        Table.setMouses = mouse

        return {mouse}
    }
}

export { CreateMouseService }