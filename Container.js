class Container{
    constructor(x, y, width, height) {
        var Options = {isStatic: true}
        this.body = Bodies.rectangle(x, y , width, height, Options)
        World.add(world, this.body)
        this.w = width
        this.h = height
    }
    display() {
        rectMode(CENTER)
        fill("purple")
        rect(this.body.position.x, this.body.position.y, this.w, this.h)
    }
}