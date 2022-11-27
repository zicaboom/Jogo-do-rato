import { Mouse } from "./Mouse"

interface Mouses{
    [key: string]: Mouse
}
class Table{
    private static width: number
    private static height: number
    private static mouses: Mouses
    private static cells: string[]
    private static init: boolean = false

    static get getMouses(){
        return Table.mouses
    }
    static get getCells(){
        return Table.cells
    }
    static get getWidth(){
        return Table.width
    }
    static get getHeight(){
        return Table.height
    }
    static get getInit(){
        return Table.init
    }
    
    static set setMouses(mouse: Mouse){
        Table.mouses[mouse.getId] = mouse

        console.log(Table.mouses)
        let cell: number

        do{
            cell = Math.round(Math.random() * Table.cells.length)
        }while(Table.cells[cell])
        mouse.setPosition = cell
        Table.cells[cell] = 'r'
    }

    static set setWidth(width: number){
        Table.width = width
    }
    static set setHeight(height: number){
        Table.height = height
    }

    constructor(){
        Table.width = 5
        Table.height = 5
        Table.mouses = Object()
        Table.cells = Array(Table.width * Table.height).fill('')
        Table.init = true
    }
}

export { Table }