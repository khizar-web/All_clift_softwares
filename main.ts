input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showLeds(`
        . # # # .
        # # . # #
        # . . . #
        # # . # #
        # . # . #
        `)
})
basic.showString("wellcome ")
