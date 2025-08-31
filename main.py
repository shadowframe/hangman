# ermöglicht das warten in sekunden statt microsekunden
def wait_sek(sekunden: number):
    control.wait_micros(sekunden * 1000000)
    
guesses = ""
wait_sek(1)
# Liste der Wörter erstellen, aus einem Bereich von 1 bis
# Länge der word_list eine Zahl zufällig auswählen
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
word_list = ["kacka", "alex", "sandra", "banane", "apfel"]
print(len(word_list))
print(randint(1, len(word_list)))
# debug zufällige zahl aus den wörtern
# debug
for index in range(4):
    word = word_list[randint(0, len(word_list) - 1)]
    print(word)
# bevor es weitergeht, KI anschalten experimentell :)
word = word_list[randint(1, len(word_list) - 1)]
print(word)

# determine the number of turns
turns = 10

#verzweifelter versuch buttonklick, zwekcs weiter ...
buttonklick = 0
auswahl = 0

print(alphabet[0])
#print(alphabet[auswahl])
for index in range(len(alphabet) - 1):
            print(alphabet[index])



while turns > 0:
    buttonklick = 0
    # make a counter that starts with zero
    failed = 0
    # for every character in secret_word
    for char in word:
        # see if the character is in the players guess
        if guesses.index_of(char) >= 0:
            print(char)
        else:
            print("_")
            # and increase the failed counter with one
            failed += 1
    # if failed is equal to zero
    # print You Won
    if failed == 0:
        print("You won")
        basic.show_string("You won")
        basic.show_icon(IconNames.HAPPY)
        wait_sek(3)
        # exit the script
        break
    
    print("Auswahl:")
    print(alphabet[auswahl])

    while buttonklick == 0:
        if input.button_is_pressed(Button.A):
            auswahl = auswahl + 1
            print("Auswahl")
            print(alphabet[auswahl])
            wait_sek(1)
        elif input.button_is_pressed(Button.B):
            guess = (alphabet[auswahl])
            print("weiter gehts")
            buttonklick = 1
            wait_sek(1)
    
    #buttonklick = 0 
    #guess = "x"
    
    # set the players guess to guesses
    guesses = "" + guesses + guess
    # if the guess is not found in the secret word
    if word.index_of(guess) < 0:
        # turns counter decreases with 1 (now 9)
        turns += 0 - 1
        # print wrong
        basic.show_string("Wrong")
        basic.show_icon(IconNames.SAD)
        wait_sek(1)
        print("wrong")
        # how many turns are left
        basic.show_number(turns)
        wait_sek(1)
        print("You have")
        print(turns)
        print("more guesses")
        # if the turns are equal to zero
        if turns == 0:
            print("You Lose")
            basic.show_icon(IconNames.SKULL)
            wait_sek(30000)

def on_forever():
    pass
basic.forever(on_forever)
