# CountIt word counting script

CountIt quickly displays the number of sentences, words, and characters in the text box. CountIt is a fully self-contained html page; simply run CountIt.html and it works.

## Usage

Enter characters in the text box or paste them in. CountIt will display the number of sentences, words, and characters below.

## Limitations

CountIt's sentence counter doesn't do very well with abbreviations or single letters with periods. #1 Examples of what will be miscounted:

> J. B. is going to the park today.

This will be counted as three sentences instead of one.

> The paper by J. Adams explains how manuals work.

This will be counted as two sentences instead of one.

Unfortunately, I don't see how to automatically check for these things without a very complicated algorithm. If you think you can help, feel free to contact me or create a new a pull request.

## Things I want to do

* Implement a paragraph counter 
* Make the flexbox more dynamic / size with the text box
* HTML5 drag/dropping of files into the textbox

Any suggestions regarding design or implementation are welcome.