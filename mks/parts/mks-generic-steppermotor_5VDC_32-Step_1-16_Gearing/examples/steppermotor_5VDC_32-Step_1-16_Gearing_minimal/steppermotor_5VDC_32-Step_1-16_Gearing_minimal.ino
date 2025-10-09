
#include <Grove_I2C_Motor_Driver.h>

// default I2C address is 0x0f
#define I2C_ADDRESS 0x0f

void setup() {
Serial.begin(9600);
Motor.begin(I2C_ADDRESS);
// Drive a stepper motor
// _step: -1024~1024, when _step>0, stepper motor runs clockwise; _step<0, stepper
// motor runs anticlockwise; when _step is 512, the stepper motor will run a complete
// turn; if step is 1024, the stepper motor will run 2 turns.
Motor.StepperRun(-1024);
Motor.StepperRun(512);
}

void loop() {

}

// End of file
```