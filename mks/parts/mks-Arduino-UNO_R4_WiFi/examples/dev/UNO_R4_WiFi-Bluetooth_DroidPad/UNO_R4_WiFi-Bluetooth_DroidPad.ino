// Extra benötigte Libraries:
// - ArduinoBLE

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// This Example is Work-In-Progress
// it currently does not work.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#include <ArduinoBLE.h>

// dies sind die UUIDs die DroidPad verwendet.
const char *serviceUUID = "4fbfc1d7-f509-44ab-afe1-62ea40a4b111";
const char *characteristicUUID = "dc3f5274-33ba-48de-8246-43bf8985b323";

const int ledPin = LED_BUILTIN;

BLEDevice droidPadPeripheral;
bool droidPadConnected;
BLEService droidPadService;
BLECharacteristic droidPadCharacteristic;

void setup() {
    delay(500);
    Serial.begin(115200);
    unsigned long startZeit = millis();
    while ((!Serial) && ((millis() - startZeit) < 6000)) {
        // warte bis der computer sich mit dem Arduino Seriell verbunden hat.
        // oder mache nach über 6s warten ohne Verbindung weiter.
        1;
    }
    delay(500);
    Serial.println("UNO_R4_WiFi-Bluetooth_DroidPad.ino");

    pinMode(ledPin, OUTPUT);

    setupBluethooth();
}

unsigned long timeStamp_lastPrint = millis();

void loop() { handleBLE(); }

void setupBluethooth() {
    BLE.debug(Serial);

    if (!BLE.begin()) {
        Serial.println("Verbindung zu Bluethooth module fehlgeschlagen!");
        // wir können hier nicht weitermachen.
        // also bleiben wir extra in einer Endlosschleife hängen.
        while (true)
            ;
    }

    BLE.setLocalName("HackBLE");

    // BLE.setAdvertisedService(ledService);
    // ledService.addCharacteristic(ledCharacteristic);
    // BLE.addService(ledService);
    // ledCharacteristic.writeValue(0);
    // BLE.advertise();

    // BLE.scan();
    BLE.scanForUuid(serviceUUID);
    Serial.println("Bluethooth Device namens 'HackBLE' fertig initialisiert.");
}

void handleBLE() {
    BLEDevice peripheral = BLE.available();
    if (peripheral) {
        // gerät gefunden.
        // zeige addresse, local name, and advertised service
        Serial.print("Gefunden: '");
        Serial.print(peripheral.localName());
        Serial.print("' Service UUID '");
        Serial.print(peripheral.advertisedServiceUuid());
        Serial.print("'");
        Serial.println();

        // check for peripheral's name
        if (peripheral.advertisedServiceUuid() == serviceUUID) {
            // stop scanning
            BLE.stopScan();

            connectPeripheral(peripheral);
        }
    }
}

void connectPeripheral(BLEDevice peripheral) {
    // connect to the peripheral
    Serial.println("Verbinden ...");

    if (peripheral.connect()) {
        Serial.println("Verbunden");
    } else {
        Serial.println("Verbindudng Fehlgeschlagen!");
        return;
    }
    Serial.println("suche Attribute ...");
    if (peripheral.discoverAttributes()) {
        Serial.println("Attribute gefunden");
    } else {
        Serial.println("Attribute suchen fehlgeschlagen!");
        peripheral.disconnect();
        return;
    }

    droidPadPeripheral = peripheral;
    handleDroidPadPeripheral();
}

void handleDroidPadPeripheral() {
    droidPadCharacteristic =
        droidPadPeripheral.characteristic(characteristicUUID);

    if (!droidPadCharacteristic) {
        Serial.println("DroidPad characteristic nicht gefunden!");
        droidPadPeripheral.disconnect();
        return;
    }

    if (!droidPadCharacteristic.canRead()) {
        Serial.println("DroidPad characteristic nicht lesbar!");
    }
    if (!droidPadCharacteristic.canWrite()) {
        Serial.println("DroidPad characteristic nicht schreibbar!");
    }
    if (droidPadCharacteristic.canSubscribe()) {
        Serial.println("DroidPad characteristic abonnierbar..");
        if (!droidPadCharacteristic.subscribe()) {
            Serial.println("subscription failed!");
            droidPadPeripheral.disconnect();
        } else {
            // we have subscribed.
        }
    }

    while (droidPadPeripheral.connected()) {
        handleDroidPadConnected();
    }
    Serial.println("Peripheral disconnected");
}

void handleDroidPadConnected() {
    // while the peripheral is connected

    if (droidPadCharacteristic.valueUpdated()) {
        Serial.print("value length: ");
        Serial.print(droidPadCharacteristic.valueLength());
        // droidPadCharacteristic.readValue(value);
        printData(droidPadCharacteristic.value(),
                  droidPadCharacteristic.valueLength());
    }

    // droidPadCharacteristic.read();

    // if (droidPadCharacteristic.valueLength() > 0) {
    //     // print out the value of the droidPadCharacteristic
    //     // Serial.print(", value 0x");
    //     // Serial.print(String(droidPadCharacteristic.value()));
    //     printData(droidPadCharacteristic.value(),
    //     droidPadCharacteristic.valueLength());
    // }
    // Serial.println();
    // // read the button pin
    // int buttonState = digitalRead(buttonPin);

    // if (oldButtonState != buttonState) {
    //     // button changed
    //     oldButtonState = buttonState;

    //     if (buttonState) {
    //         Serial.println("button pressed");

    //         // button is pressed, write 0x01 to turn the LED on
    //         leddroidPadCharacteristic.writeValue((byte)0x01);
    //         leddroidPadCharacteristic.writeValue((byte)0x01);
    //     } else {
    //         Serial.println("button released");

    //         // button is released, write 0x00 to turn the LED off
    //         leddroidPadCharacteristic.writeValue((byte)0x00);
    //     }
    // }
}

void printData(const unsigned char data[], int length) {
    for (int i = 0; i < length; i++) {
        unsigned char b = data[i];

        // if (b < 16) {
        //     Serial.print("0");
        // }

        // Serial.print(b, HEX);
        Serial.print(b);
    }
}