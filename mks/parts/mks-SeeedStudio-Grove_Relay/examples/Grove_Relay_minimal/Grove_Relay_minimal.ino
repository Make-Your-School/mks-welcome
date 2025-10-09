
// Relay Control

void setup()
{
  pinMode(2, INPUT); //Grove Button an Digital 2
  pinMode(3, INPUT); //Grove Button an Digital 3
  pinMode(4, OUTPUT);
}

void loop()
{
  if (digitalRead(2)==HIGH)
  {
    digitalWrite(4, HIGH);
    delay(100);
  }
  if (digitalRead(3)==HIGH)
  {
    digitalWrite(4, LOW);
  }
}
```