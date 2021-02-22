from microbit import *

def procedure():
    pass



display.show(Image.SMILE)
while True:
    if button_a.is_pressed():
        display.scroll("Hello World!")
    elif button_b.is_pressed():
        display.show(Image.HEART)
