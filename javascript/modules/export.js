export default class Vehicle{
    constructor(brand,model){
        this.brand = brand;
        this.model = model;
    }
}

export const moveForward = () => {
    console.log("vehicle is moving forward.")
}