let index: number;
let word: string;
let failed: number;
let guess: string;
//  ermöglicht das warten in sekunden statt microsekunden
function wait_sek(sekunden: number) {
    control.waitMicros(sekunden * 1000000)
}

let guesses = ""
wait_sek(1)
//  Liste der Wörter erstellen, aus einem Bereich von 1 bis
//  Länge der word_list eine Zahl zufällig auswählen
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let word_list = ["kacka", "alex", "sandra", "banane", "apfel"]
console.log(word_list.length)
console.log(randint(1, word_list.length))
//  debug zufällige zahl aus den wörtern
//  debug
for (index = 0; index < 4; index++) {
    word = word_list[randint(0, word_list.length - 1)]
    console.log(word)
}
//  bevor es weitergeht, KI anschalten experimentell :)
word = word_list[randint(1, word_list.length - 1)]
console.log(word)
//  determine the number of turns
let turns = 10
// verzweifelter versuch buttonklick, zwekcs weiter ...
let buttonklick = 0
let auswahl = 0
console.log(alphabet[0])
// print(alphabet[auswahl])
for (index = 0; index < alphabet.length - 1; index++) {
    console.log(alphabet[index])
}
while (turns > 0) {
    buttonklick = 0
    //  make a counter that starts with zero
    failed = 0
    //  for every character in secret_word
    for (let char of word) {
        //  see if the character is in the players guess
        if (guesses.indexOf(char) >= 0) {
            console.log(char)
        } else {
            console.log("_")
            //  and increase the failed counter with one
            failed += 1
        }
        
    }
    //  if failed is equal to zero
    //  print You Won
    if (failed == 0) {
        console.log("You won")
        basic.showString("You won")
        basic.showIcon(IconNames.Happy)
        wait_sek(3)
        //  exit the script
        break
    }
    
    console.log("Auswahl:")
    console.log(alphabet[auswahl])
    while (buttonklick == 0) {
        if (input.buttonIsPressed(Button.A)) {
            auswahl = auswahl + 1
            console.log("Auswahl")
            console.log(alphabet[auswahl])
            wait_sek(1)
        } else if (input.buttonIsPressed(Button.B)) {
            guess = alphabet[auswahl]
            console.log("weiter gehts")
            buttonklick = 1
            wait_sek(1)
        }
        
    }
    // buttonklick = 0 
    // guess = "x"
    //  set the players guess to guesses
    guesses = "" + guesses + guess
    //  if the guess is not found in the secret word
    if (word.indexOf(guess) < 0) {
        //  turns counter decreases with 1 (now 9)
        turns += 0 - 1
        //  print wrong
        basic.showString("Wrong")
        basic.showIcon(IconNames.Sad)
        wait_sek(1)
        console.log("wrong")
        //  how many turns are left
        basic.showNumber(turns)
        wait_sek(1)
        console.log("You have")
        console.log(turns)
        console.log("more guesses")
        //  if the turns are equal to zero
        if (turns == 0) {
            console.log("You Lose")
            basic.showIcon(IconNames.Skull)
            wait_sek(30000)
        }
        
    }
    
}
basic.forever(function on_forever() {
    
})
