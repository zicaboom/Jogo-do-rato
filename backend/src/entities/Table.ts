import { Mouse } from "./Mouse"

class Table{
    private static width: number
    private static height: number
    private static mouses: Mouse[]
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
        Table.mouses.push(mouse)
    }
    static set setCells(cells: string[]){
        Table.cells = cells
    }
    static set setWidth(width: number){
        Table.width = width
    }
    static set setHeight(height: number){
        Table.height = height
    }

    constructor(){
        Table.width = 20
        Table.height = 20
        Table.mouses = Array()
        Table.cells = Array(Table.width * Table.height)
        Table.init = true
    }
}

export { Table }