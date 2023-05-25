basic.forever(function () {
    led.plot(0, 0)
    basic.pause(pins.analogReadPin(AnalogPin.P1))
    led.unplot(0, 0)
    basic.pause(pins.analogReadPin(AnalogPin.P1))
})
