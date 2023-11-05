# NodeJS

## What is NodeJS?
  
- It is not a programming language.
- It is not a JavaScript framework.
- It is not a library to add to our projects.

<hr>

- It is a open-source, cross-platform ( Windows, macOS, Linux, _etc_) JavaScript runtime environment that allows programmers to run JavaScript code outside of the tradicional browser environment.
- With NodeJS, we can develop fullstack applications in JavaScript: a JS library or framework on the front-end side, and NodeJS on the back-end side.

## How is server-side JavaScript execution possible?

- JavaScript was created for browsers.
- Browsers have JavaScript interpretation engines.
- NodeJS has Google's V8 engine inside it.
- This allows us to interpret JavaScript in any environment where it is installed.
- We will not have the DOM available.
- We now have modules that allow us to manipulate the File system, Databases, _etc_, ...

## It is important to learn how to use NodeJS?

- It is not a mandatory technology to develop web applications.
- It is a technology that is over 13 years old and is highly demanded in the market.
- Allows us to use the same programming language on the front and backend.
- Several similar technologies are emerging. Knowing, how to use NodeJS will help.
- It's a market trend. Companies value experience with NodeJS.

## NodeJS Installation (Windows)

- **Step 1** - Visit [NodeJS](https://nodejs.org/en) and install the LTS version;
- **Step 2** - After downloading the .msi file, complete the NodeJS setup by leaving the default options;
- **Step 3** - Next, you can check in your terminal that the system recognize NodeJS:
```shell
node -v
```
```shell
npm -v
```

## First Test with NodeJS

- **Step 1** - Create a folder named "test" and open it in a text editor, such as VS Code;
- **Step 2** - Create a file in this foulder with the name "app.js";
- **Step 3** - Enter the following text:
```js
console.log('Hello World!')
```
- **Step 4** . Then, execute the file from the terminal in the `test` directory:
```shell
node .\app.js
```

In this test, we are simply asking Node to execute the "app.js" file.

If you type `node` in the terminal and press Enter, NodeJS will start, and you will enter NodeJS's interactive mode, where you can type JavaScript commands directly and see them executed immediately. This is known as the "REPL" (Read-Eval-Print-Loop) of NodeJS. In this way, you can test code snippets, try out specific JavaScript functions, or perform simple claculations. To exit NodeJS's interactive mode, simply press `Ctrl+D` or `Ctrl+C` to abort current expression.
