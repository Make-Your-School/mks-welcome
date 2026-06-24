// Beispiel sketch für den Grove Temperature Sensor V1.1/1.2

#include <math.h>

// B value of the thermistor
const int B = 4275;
// R0 = 100k
const int R0 = 100000;
const int tempSensor_PIN = A0;

void setup() {
    Serial.begin(115200);
    Serial.println("Grove Temperature Sensor Beispiel");
}

void loop() {
    float temperature = readTemperature(tempSensor_PIN);
    Serial.print("temperature = ");
    Serial.println(temperature);

    delay(100);
}


float readTemperature(byte sensorPIN) {
    int rawValue = analogRead(sensorPIN);
    float R = 1023.0 / a - 1.0;
    R = R0 * R;
    // convert to temperature via datasheet
    float temperature = 1.0 / (log(R / R0) / B + 1 / 298.15) - 273.15;
    return temperature;
}
