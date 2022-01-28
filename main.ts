radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        servos.P1.run(100)
        basic.pause(500)
        servos.P1.stop()
    }
    if (receivedNumber == 2) {
        servos.P2.run(100)
        basic.pause(500)
        servos.P2.stop()
    }
})
radio.setGroup(1)
