import { v4 } from "uuid"

class Mouse {
    readonly id: string 
    private pontos: number 
    private position: number

    constructor(cell: number){
        this.id = v4()
        this.pontos = 0
        this.position=cell
    }
}


export { Mouse }