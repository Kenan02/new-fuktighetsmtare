OLED.init(128, 64)
basic.forever(function () {
    OLED.writeNumNewLine(tinkercademy.MoistureSensor(AnalogPin.P0))
    if (tinkercademy.MoistureSensor(AnalogPin.P0) < 50) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
    }
})
