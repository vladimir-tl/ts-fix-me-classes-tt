class Rectangle {
    width: number
    height: number

    constructor(width: number, height: number) {
        this.Width = width
        this.Height = height
    }

    getArea(): number {
        return width * height
    }
}

const rect = new Rectangle(5, 10)
console.log(rect.getArea()) // After fixing: will print 50
