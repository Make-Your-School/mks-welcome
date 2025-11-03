int countdown = 15;

void setup() { Serial.begin(115200);
  Serial.println("pingpong.ino - los gehts!");
}

void loop() {
  Serial.println(countdown);
  countdown = countdown - 1;
  if (countdown == 0) {
    Serial.println("jetzt piepts...");
    delay(1000);
    Serial.println("hör auf mit dem gepiepe...");
  }
  delay(1000);
}
