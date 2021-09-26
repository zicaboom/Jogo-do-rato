import { Mouse } from "../../entities/Mouse"
import { Table } from "../../entities/Table"
import { CreateGameService } from "../CreateGame/CreateGameService"

class CreateMouseService{
    execute(){
        if(!Table.getInit){
            const createGameService = new CreateGameService()
            createGameService.execute()
        }

        let cell: number

        do{
            cell = Math.round(Math.random() * Table.getCells.length)
        }while(Table.getCells[cell])

        const mouse = new Mouse(cell)
        Table.getMouses.push(mouse)
        Table.getCells[cell] = 'r'

        return {mouse}
    }
}

export { CreateMouseService }