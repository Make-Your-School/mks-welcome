RFID Library  [![Build Status](https://travis-ci.com/Seeed-Studio/RFID_Library.svg?branch=master)](https://travis-ci.com/Seeed-Studio/RFID_Library)
============

125Khz RFID library for Arduino. 

This library only support TTL RS232 serial port.

![125Khz RFID Reader](https://statics3.seeedstudio.com/images/product/gr125k.jpg)


[Grove - 125KHz RFID Reader
](https://www.seeedstudio.com/s/Grove-125KHz-RFID-Reader-p-1008.html)



When read the data from some RFID card, you will get data like `00 91 6f 0b f5`.

Example:
```
your card number: 0009531147
that your data  : 00 91 6f 0b f5
```
**Notice, f5 is the check bit**

`f5 = 00^91^6f^0b`


#### Pins 

1. VCC support 3.3 ~ 5V
2. TX, RX connect to Arduino or Seeeduino
3. T1, T2 is the Signal port for RFID antenna
4. W0, W1 is for wiegand protocol, but this library not support yet.

```
     		+-----------+
++++++++----|VCC	  T1|----
|  +++++----|GND	  T2|----
|  | |++----|TX		 SER|----
|  | |	----|RX		 LED|----	
|  | |	----|W0		BEEP|----
|  | |	----|W1		 GND|----
|  | |		+-----------+
|  | \___________________________________
|  |_____________________________        |
|                                |       |
|                              + + + + + + + +  + + + + + + + +
|                              | | | | | | | |  | | | | | | | |
|                              | | | | | | | |  | | | | | | | |
|            +-----------------|-|-|-|-|-|-|-|--|-|-|-|-|-|-|-|-+
|            |                 x-x-x-x-x-x-x-x  x-x-x-x-x-x-x-x |
|            |              xxx                                 |
|       +--------+          xxx    --- ---    .............     |
|       |        |                | - x + |  ' |  ||\ |.-. '    +
|       |        |          ^      --- ---   | |__|| \|._. |     x
|       |        |        <+++>    ARDUINO   '.............'      +
|       +--------+          V                                     |
|            |            _____                       ++-++   xx  |
|            |           <_____>                      +-O-+   xx  |
|            |                                        ++-++   xx  |
|            |+--++--                                             |
|            ||||++--                  +---------------------+    |
|            |+--++--                  |                     |    |
|            |                         |                     |    |
|         ++------+                    +---------------------+    |
|         ++      |                                               +
|         ++      |          +-+ +-+                             x
|         ++------+          +-+ +-+   x-x-x-x-x-x x-x-x-x-x-x  +
|            +-------------------------|-|-|-|-|-|-|-|-|-|-|-|--+
|                                      | | | | | | | | | | | |
|                                      | | | | | | | | | | | |
|                                      + + + + + + + + + + + +
|____________________________________________|
	