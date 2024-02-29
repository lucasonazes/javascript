export class Car {
  private readonly engine = new Engine();

  turnOn(): void {
    this.engine.turnOn();
  }
  turnOff(): void {
    this.engine.turnOff();
  }
  stop(): void {
    this.engine.stop();
  }
  speedUp(): void {
    this.engine.speedUp();
  }
}

export class Engine {
  turnOn(): void {
    console.log('Engine is turned on');
  }
  turnOff(): void {
    console.log('Engine is turned off');
  }
  stop(): void {
    console.log('The car is stopped');
  }
  speedUp(): void {
    console.log('The car is speeding up');
  }
}

const car = new Car();
