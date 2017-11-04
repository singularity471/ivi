# Project IVI | Ivy Development Team

Interactive Visual Interpreter is meant to help beginner CS students understand their code better. The student enters code in the "Editor" and sees an abstract visual representation in the "Visualizer", while code results are logged to the "Console". The "Navbar" and "Step" button provide a way to walk through your code more slowly - like a debugger.  Pressing the "Clear" button in the "Navbar" clears the visualizer, exits any stepping if the user was currently stepping through or running the code, and returns the user to edit mode (in which the user may edit their code).  The next time the user presses the "Step" or "Run" buttons, the code will be executed starting from line 1.

## Using
### Install  
Our project requires `git`, `npm`&`node`. It will be easier on a unix-like system. For Windows we recomend using [git bash](https://git-for-windows.github.io/).

To view our prototype, clone and enter the following repo:
```
git clone git@github.com:project-ivi/ivi.git
cd ivi
```
Install the dependencies:
```
npm install
```
Now build IVI
```
npm run build
```
IVI is now built. 

### Run  

`npm start` will run the dev server and open your browser. 

### Test

To run tests use `npm run test`. If you'd like to keep the test runner open use 'npm run test-w`. the `-w` is for "watch". Using the watch option will cause tests to reevaluate given any changes to test code.

## Features
### Supported  
Currently IVI only handles variable processing and is relatively basic.
- Variable declaration
- Assigning strings
- Assigning numbers
- Assigning to other variable's values
- Printing to console 

### Unsupported
- Obscure Variable Declaration methods
  - `var a,b = 2,3`
  - multi line assignment
    ```
    var a
    =
    5
    ```
  - `x = y = 5`
- Control flow
- Math
- Functions
- Everything else not listed in 'Supported'


