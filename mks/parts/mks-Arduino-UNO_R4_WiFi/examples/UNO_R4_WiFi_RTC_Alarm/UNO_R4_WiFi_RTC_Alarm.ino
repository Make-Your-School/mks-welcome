#include "RTC.h"

bool ledState = false;
bool alarm = false;
unsigned long previousMillis = 0;
const long interval = 1000;

void setup() {
    delay(1000);
    Serial.begin(115200);
    while (!Serial) {
        // warte bis der computer sich mit dem Arduino Seriell verbunden hat.
        ;
    }
    delay(500);
    Serial.println("UNO_R4_WiFi_RTC_Alarm.ino");

    // setze pin für die eingebaute LED als Ausgang
    pinMode(LED_BUILTIN, OUTPUT);

    // Verbindung zur RTC (real-time-clock) herstellen
    RTC.begin();

    // wir müssen die RTC einmal mit `setTime` stellen.
    // für diess Beispiel ist es allerdings egal welche Datum/Uhrzeit wir
    // einstellen.
    RTCTime initialTime(3, Month::FEBRUARY, 2026, 13, 3, 1, DayOfWeek::THURSDAY,
                        SaveLight::SAVING_TIME_INACTIVE);
    RTC.setTime(initialTime);
    printTime(initialTime);

    // Der Alarm soll jedes mal ausgelöst werden wenn die Sekunden gleich 0
    // sind.
    RTCTime alarmTime;
    alarmTime.setSecond(0);
    // dafür brauchen wir noch diesen *Match*:
    // markiere das nur die Sekunden relevanz haben
    AlarmMatch matchTime;
    matchTime.addMatchSecond();
    // nun den Alarm Konfigurieren:
    // Funktion die bei ausgelöstem Alarm aufgerufen werden soll:
    // `alarmCallbackISP`
    RTC.setAlarmCallback(alarmCallbackISP, alarmTime, matchTime);
}

void loop() {
    // prüfen ob der alarm-flag gesetzt wurde..
    if (alarm) {
        alarm = false;
        alarmCallback();
    }

    if (millis() - previousMillis >= interval) {
        previousMillis = millis();
        RTCTime tempTime;
        RTC.getTime(tempTime);
        printTime(tempTime);
    }
}

void alarmCallbackISP() {
    // wird aufgerufen wenn der Alarm ausgelöst wurde
    // diese Funktion wird aus den internen *Tiefen* heraus aufgerufen.
    // ISP = Interrupt Service Provider
    // diese info list aktuell nur im library code selbst zu finden:
    // https://github.com/arduino/ArduinoCore-renesas/blob/main/libraries/RTC/src/RTC.cpp#L656
    // deshalb darf hier drinnen z.B. kein Serial.println() aufgerufen werden.
    // um diese Einschränkungen zu umgehen, setzen wir hier nur unser eigenes
    // *flag*. dieses fragen wir dann in der *loop* ab.
    alarm = true;
}

void alarmCallback() {
    // wird aufgerufen wenn der Alarm ausgelöst wurde
    // dann *toggle* (tausche) den LED-Status.
    ledState = !ledState;
    // zeige aktuellen ledState auf der LED
    digitalWrite(LED_BUILTIN, ledState);
    Serial.println("Alarm!!");
    RTCTime tempTime;
    RTC.getTime(tempTime);
    printTime(tempTime);
}

void printTime(RTCTime &currentTime) {
    // zeige datum als DD.MM.YYYY
    if (currentTime.getDayOfMonth() < 10) {
        Serial.print(0);
    }
    Serial.print(currentTime.getDayOfMonth());
    Serial.print(".");
    if (Month2int(currentTime.getMonth()) < 10) {
        Serial.print(0);
    }
    Serial.print(Month2int(currentTime.getMonth()));
    Serial.print(".");
    Serial.print(currentTime.getYear());

    Serial.print(" - ");

    // zeige Zeit als HH:MM:SS
    if (currentTime.getHour() < 10) {
        Serial.print(0);
    }
    Serial.print(currentTime.getHour());
    Serial.print(":");
    if (currentTime.getMinutes() < 10) {
        Serial.print(0);
    }
    Serial.print(currentTime.getMinutes());
    Serial.print(":");
    if (currentTime.getSeconds() < 10) {
        Serial.print(0);
    }
    Serial.println(currentTime.getSeconds());
}
