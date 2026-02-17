
int inputPin = 2; // change this to the digital input pin you want to read

void setup() {
  Serial.begin(9600); 
  pinMode(inputPin, INPUT); // set the input pin as an input
}

void loop() {
  int inputState = digitalRead(inputPin); // read the state of the input pin
  if (inputState == HIGH) {
    Serial.println("Input is HIGH");
  } else {
    Serial.println("Input is LOW");
  }
  delay(500); 
}
