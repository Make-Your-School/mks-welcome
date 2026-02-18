// https://docs.arduino.cc/tutorials/uno-r4-wifi/cheat-sheet/#bluetooth

#include <ArduinoBLE.h>

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

    // begin initialization
    if (!BLE.begin()) {
        Serial.println("starting Bluetooth® Low Energy module failed!");

        while (1)
            ;
    }

    Serial.println("Bluetooth® Low Energy Central - Peripheral Explorer");

    // start scanning for peripherals
    BLE.scan();
}

void loop() {
    // check if a peripheral has been discovered
    BLEDevice peripheral = BLE.available();

    if (peripheral) {
        // discovered a peripheral, print out address, local name, and
        // advertised service
        Serial.print("Found ");
        Serial.print(peripheral.address());
        Serial.print(" '");
        Serial.print(peripheral.localName());
        Serial.print("' ");
        Serial.print(peripheral.advertisedServiceUuid());
        Serial.println();

        // check for peripheral's name
        if (peripheral.localName() == "Fairphone 4 5G") {
            // stop scanning
            BLE.stopScan();

            explorerPeripheral(peripheral);

            // peripheral disconnected, we are done
            while (1) {
                // do nothing
            }
        }
    }
}

void explorerPeripheral(BLEDevice peripheral) {
    // connect to the peripheral
    Serial.println("Connecting ...");

    if (peripheral.connect()) {
        Serial.println("Connected");
    } else {
        Serial.println("Failed to connect!");
        return;
    }

    // discover peripheral attributes
    Serial.println("Discovering attributes ...");
    if (peripheral.discoverAttributes()) {
        Serial.println("Attributes discovered");
    } else {
        Serial.println("Attribute discovery failed!");
        peripheral.disconnect();
        return;
    }

    // read and print device name of peripheral
    Serial.println();
    Serial.print("Device name: ");
    Serial.println(peripheral.deviceName());
    Serial.print("Appearance: 0x");
    Serial.println(peripheral.appearance(), HEX);
    Serial.println();

    // loop the services of the peripheral and explore each
    for (int i = 0; i < peripheral.serviceCount(); i++) {
        BLEService service = peripheral.service(i);
        Serial.print("Service " + String(i) + " :");
        exploreService(service);
    }
    Serial.println();

    // try to get changed values on subscribed characteristic...
    const char *characteristicUUID = "dc3f5274-33ba-48de-8246-43bf8985b323";
    while (peripheral.connected()) {
        // we are already updated to this characteristic..
        BLECharacteristic characteristic =
            peripheral.characteristic(characteristicUUID);
        if (characteristic.valueUpdated()) {
            Serial.print("value length: ");
            Serial.print(characteristic.valueLength());
            Serial.println();
            Serial.print("value: '");
            // characteristic.readValue(value);
            printDataAscii(characteristic.value(),
                           characteristic.valueLength());
            Serial.println("'");
        }
    }

    // we are done exploring, disconnect
    Serial.println("Disconnecting ...");
    peripheral.disconnect();
    Serial.println("Disconnected");
}

void exploreService(BLEService service) {
    // print the UUID of the service

    Serial.println(service.uuid());

    // loop the characteristics of the service and explore each
    for (int i = 0; i < service.characteristicCount(); i++) {
        BLECharacteristic characteristic = service.characteristic(i);

        exploreCharacteristic(characteristic);
    }
}

void exploreCharacteristic(BLECharacteristic characteristic) {
    // print the UUID and properties of the characteristic
    Serial.print("\tCharacteristic ");
    Serial.print(characteristic.uuid());
    Serial.print(", properties 0x");
    Serial.print(characteristic.properties(), HEX);

    // check if the characteristic is readable
    if (characteristic.canRead()) {
        Serial.print(", canRead");
        // read the characteristic value
        characteristic.read();

        if (characteristic.valueLength() > 0) {
            // print out the value of the characteristic
            Serial.print(", value 0x");
            printData(characteristic.value(), characteristic.valueLength());
        }
    }
    if (characteristic.canWrite()) {
        Serial.print(", canWrite");
    }
    if (characteristic.canSubscribe()) {
        Serial.print(", canSubscribe");
    }
    Serial.println();

    if (characteristic.canSubscribe()) {
        Serial.print("\t subscribe: ");
        Serial.println(characteristic.subscribe());
    }

    // loop the descriptors of the characteristic and explore each
    for (int i = 0; i < characteristic.descriptorCount(); i++) {
        BLEDescriptor descriptor = characteristic.descriptor(i);

        exploreDescriptor(descriptor);
    }
}

void exploreDescriptor(BLEDescriptor descriptor) {
    // print the UUID of the descriptor
    Serial.print("\t\tDescriptor ");
    Serial.print(descriptor.uuid());

    // read the descriptor value
    descriptor.read();

    // print out the value of the descriptor
    Serial.print(", value 0x");
    printData(descriptor.value(), descriptor.valueLength());

    Serial.println();
}

void printData(const unsigned char data[], int length) {
    for (int i = 0; i < length; i++) {
        unsigned char b = data[i];

        if (b < 16) {
            Serial.print("0");
        }

        Serial.print(b, HEX);
    }
}
void printDataAscii(const unsigned char data[], int length) {
    for (int i = 0; i < length; i++) {
        unsigned char b = data[i];
        Serial.print(b);
    }
}