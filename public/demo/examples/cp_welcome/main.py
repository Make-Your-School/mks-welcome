"""
CircuitPython hello world.
"""

import time
import board
import neopixel

pixels = neopixel.NeoPixel(board.GP18, 2)
pixels.fill(0)

print("Hello World :-)")

while True:
    pixels.fill(0x0000ff)
    time.sleep(0.5)
    pixels.fill(0x00ff00)
    time.sleep(0.5)
    pixels.fill(0xff00ff)
    time.sleep(0.5)
    pixels.fill(0x000100)
    time.sleep(1.0)
