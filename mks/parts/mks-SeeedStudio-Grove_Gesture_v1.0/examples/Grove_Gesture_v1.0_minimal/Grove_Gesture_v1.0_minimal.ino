
/*
The following simple demo will show you a very easy application: When you move up, the red led will be turned on, otherwise the red led will be turned off.
*/
#include <Wire.h>
#include "paj7620.h"

void setup()
{
  paj7620Init();
}

void loop()
{
 uint8_t data = 0;  // Read Bank_0_Reg_0x43/0x44 for gesture result.

 paj7620ReadReg(0x43, 1, &data);  // When different gestures be detected, the variable 'data' will be set to different values by paj7620ReadReg(0x43, 1, &data).

 if (data == GES_UP_FLAG)      // When up gesture be detected,the variable 'data' will be set to GES_UP_FLAG.
  digitalWrite(4, HIGH);      // turn the LED on (HIGH is the voltage level)
 if (data == GES_DOWN_FLAG)      // When down gesture be detected,the variable 'data' will be set to GES_DOWN_FLAG.
        digitalWrite(4, LOW);       // turn the LED off by making the voltage LOW
}
