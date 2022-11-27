class Mouse {
    private id: string 
    private pontos: number 
    private position: number

    set setPosition(position: number){
        this.position = position
    }
    get getPosition(){
        return this.position
    }
    get getId(){
        return this.id
    }
    constructor(id: string){
        this.id = id
        this.pontos = 0
        this.position= 0
    }
}


export { Mouse }