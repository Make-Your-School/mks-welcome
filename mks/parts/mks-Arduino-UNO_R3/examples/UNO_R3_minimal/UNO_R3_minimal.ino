// *Hallo Welt* in Hardware.
// Lasse die eingebaute LED Blinken.

const int led_pin = LED_BUILTIN;

void setup() { 
    pinMode(led_pin, OUTPUT); 
}

void loop() {
    digitalWrite(led_pin, HIGH);
    delay(500);
    digitalWrite(led_pin, LOW);
    delay(2 * 1000);
}
