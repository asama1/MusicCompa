// Define variables
let degrees = 0

basic.forever(function () {
    // Set 'degrees' variable as the direction of device in degrees
    degrees = input.compassHeading()

    // Check if device is facing north (45 < x > 315)
    if (degrees < 45 || degrees > 315) {
        // Display the letter 'N'
        basic.showString("N")

        // Stop playing current track
        music.stopAllSounds()

        // Play Jingle Bells
        music.playMelody("E - E - E E E - ", 280)
        music.playMelody("E - E - E E E - ", 280)
        music.playMelody("E - G - C - D - ", 280)
        music.playMelody("E E E E - - - - ", 280)
        music.playMelody("F - F - F F F - ", 280)
        music.playMelody("F - E - E E E - ", 280)
        music.playMelody("E - E - G - G - ", 280)
        music.playMelody("F - D - C C C - ", 280)
        music.playMelody("C5 C5 C5 - - - - - ", 280)
    }

    // Check if device is facing west (135 < x)
    else if (degrees < 135) {
        // Display the letter 'W'
        basic.showString("W")

        // Stop playing current track
        music.stopAllSounds()

        // Play Super Mario Theme
        music.playMelody("C G E C G E E C ", 280)
        music.playMelody("C E G G E G G E ", 280)
        music.playMelody("A B B b A", 280)
        music.playMelody("G E G A G A G E ", 280)
        music.playMelody("F G E C D B E A ", 280)
        music.playMelody("G F E C G B A E ", 280)
        music.playMelody("G G E E G G E G ", 280)
        music.playMelody("G A F G A E G E ", 280)
    }

    // Check if device is facing south (225 < x)
    else if (degrees < 225) {
        // Display the letter 'S'
        basic.showString("S")

        // Stop playing current track
        music.stopAllSounds()

        // Play Never Gonna Give You Up
        music.playMelody("E - E - E E E - ", 280)
    }

    // Otherwise, device is assumed to be facing east
    else {
        // Display the letter 'E'
        basic.showString("E")

        // Stop playing current track
        music.stopAllSounds()

        // Play Bloody Stream
        music.playMelody("E - E - E E E - ", 280)
    }
})


