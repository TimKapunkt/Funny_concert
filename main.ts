input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 B B C5 B B C5 B ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 B B C5 B B C5 B ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 B B C5 B B C5 B ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 B B C5 B B C5 B ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 B B C5 B B C5 B ", 120), music.PlaybackMode.UntilDone)
})
music.setVolume(255)
basic.showString("Welcome!")
music.play(music.stringPlayable("C C5 G A E D A B ", 120), music.PlaybackMode.InBackground)
music.play(music.createSoundExpression(WaveShape.Square, 5000, 1, 255, 0, 561, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
basic.showString("Don't press A!!!!")
basic.forever(function () {
    if (input.isGesture(Gesture.ScreenDown)) {
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        basic.clearScreen()
    }
    if (input.isGesture(Gesture.ScreenDown)) {
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        basic.clearScreen()
    }
    if (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.Confused)
        music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        basic.clearScreen()
    }
    if (input.isGesture(Gesture.ThreeG)) {
        basic.showIcon(IconNames.Confused)
        music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        basic.clearScreen()
    }
    if (input.isGesture(Gesture.SixG)) {
        basic.showIcon(IconNames.Confused)
        music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        basic.clearScreen()
    }
    if (input.isGesture(Gesture.EightG)) {
        basic.showIcon(IconNames.Angry)
        music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        basic.clearScreen()
    }
})
