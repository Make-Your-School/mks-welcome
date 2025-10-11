# I²C
I²C InterInterCircuit
<!--
Serielle Schnittstelle
2Pins: SDA, SCL
es gibt immer einen *Controller* (z.B. Arduino oder RaspberryPi) und viele *Geräte* (z.B. Sensoren)
die Geräte werden über eine Adresse (*Hausnummer*) angesprochen.
Diese kann Teils auch beim Gerät Eingestellt werden.
 -->

Bei einer seriellen Datenübertragung werden die Bits (Informationen/Kommandos) nacheinander (seriell) über eine Leitung übertragen. Die wichtigsten seriellen Standards im Rahmen der Mikrocontroller sind I2C (Inter-Integrated Circuit), SPI (Serial Peripheral Interface) und UART (Universal Asynchronous Receiver Transmitter). Die genaue Funktionsweise ist für die reine Nutzung vorerst irrelevant. Es muss allerdings immer geprüft werden, an welchen Pins oder an welchen Steckplätzen der jeweilige serielle Anschluss genutzt werden kann. Dies wird in den Datenblättern der Mikrocontroller normalerweise angegeben.
