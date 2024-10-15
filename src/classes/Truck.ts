// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from "./Vehicle.js";
import Motorbike from "./Motorbike.js";
import Car from "./Car.js";
import Wheel from "./Wheel.js";
import AbleToTow from "../interfaces/AbleToTow.js";

// The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
	// Declare properties of the Truck class
	// The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
	// The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
	vin: string;
	color: string;
	make: string;
	model: string;
	year: number;
	weight: number;
	topSpeed: number;
	wheels: Wheel[];
	towingCapacity: number;

	// Create a constructor that accepts the properties of the Truck class
	// The constructor should call the constructor of the parent class, Vehicle
	// The constructor should initialize the properties of the Truck class
	// The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
	constructor(
		vin: string,
		color: string,
		make: string,
		model: string,
		year: number,
		weight: number,
		topSpeed: number,
		wheels: Wheel[],
		towingCapacity: number
	) {
		super();
		this.vin = vin;
		this.color = color;
		this.make = make;
		this.model = model;
		this.year = year;
		this.weight = weight;
		this.topSpeed = topSpeed;
		this.wheels = wheels;
		this.towingCapacity = towingCapacity;

		// adds wheel objects until it reaches 4
		if (wheels.length < 4) this.addWheel(4 - wheels.length);
	}

	private addWheel(quantity: number) {
		for (var i = 1; i <= quantity; i++) {
			const newWheel = new Wheel();
			this.wheels.push(newWheel);
		}
	}

	// Implement the tow method from the AbleToTow interface
	tow(vehicle: Truck | Motorbike | Car): void {
		// Get the make an model of the vehicle if it exists
		// Check if the vehicle's weight is less than or equal to the truck's towing capacity
		// If it is, log that the vehicle is being towed
		// If it is not, log that the vehicle is too heavy to be towed
		if (vehicle.make && vehicle.model) {
			if (vehicle.weight <= this.towingCapacity) {
				console.log(
					`Vehicle ${vehicle.year} ${vehicle.make} ${vehicle.model} will be towed`
				);
				vehicle.stop();
			} else {
				console.log(
					`Vehicle ${vehicle.year} ${vehicle.make} ${vehicle.model} will not be towed due to the vehicle being too heavy for the truck's towing capacity`
				);
			}
		}
	}

	// Override the printDetails method from the Vehicle class
	// The method should call the printDetails method of the parent class
	// The method should log the details of the Truck
	// The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
	override printDetails(): void {
		console.log(`Vehicle started: ${this.started}`);
		console.log(`Vehicle current speed: ${this.currentSpeed} mph`);
		console.log(`Vehicle Details:
  VIN: ${this.vin}
  Make: ${this.make}
  Model: ${this.model}
  Year: ${this.year}
  Weight: ${this.weight} lbs
  Top Speed: ${this.topSpeed} mph
  Color: ${this.color}`);
		let i: number = 1;
		this.wheels.forEach((wheel) => {
			console.log(
				`  Wheel ${i}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`
			);
			i++;
		});
	}
}

// Export the Truck class as the default export
export default Truck;
