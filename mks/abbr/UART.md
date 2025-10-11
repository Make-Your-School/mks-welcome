# Serielle Schnittstelle
UART = Universal Asynchronous Receiver Transmitter

<!-- meist 2Pins: TX (Senden) und RX (Empfangen)
der TX Pin des Sendenden Geräts muss an den RX-Pin des Empfangenen Gerätes angeschlossen werden. -->

Bei einer seriellen Datenübertragung werden die Bits (Informationen/Kommandos) nacheinander (seriell) über eine Leitung übertragen. Die wichtigsten seriellen Standards im Rahmen der Mikrocontroller sind I2C (Inter-Integrated Circuit), SPI (Serial Peripheral Interface) und UART (Universal Asynchronous Receiver Transmitter). Die genaue Funktionsweise ist für die reine Nutzung vorerst irrelevant. Es muss allerdings immer geprüft werden an welchen Pins oder an welchen Steckplätzen der jeweilige serielle Anschluss genutzt werden kann. Dies wird in den Datenblättern der Mikrocontroller normalerweise mit angegeben.
