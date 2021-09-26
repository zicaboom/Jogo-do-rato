import { Table } from "../../entities/Table"

class GetGameStateService {
    execute(){
        const width = Table.getWidth
        const height = Table.getHeight
        const cells = Table.getCells
        const mouses = Table.getMouses

        return{
            width,
            height,
            cells,
            mouses
        }
    }
}

export {GetGameStateService}