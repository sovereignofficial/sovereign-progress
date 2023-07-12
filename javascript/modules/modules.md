# JavaScript Modules

A JavaScript module is a file that allows you to export its code, enabling other JavaScript files to import and use the exported code as their dependencies. This allows for code reusability and separation of concerns, which is crucial in large-scale JavaScript applications. JavaScript modules can be shared within your project or with the world through package managers like Yarn and NPM.

## Why Use Modules?

As JavaScript has grown and become capable of handling complex tasks such as server-side website development, game development, and mobile app development, the need to share scripts between a project's files and the world arose. The JavaScript community developed the module system to allow developers to share their scripts on demand.

## Types of Module System

There are several types of module systems in JavaScript, including ES modules (sometimes called "JS modules" or "ECMAScript modules"), AMD, CommonJS, and UMD. The ES module system is the official standard for JavaScript, and the others were created by various developers when JavaScript did not have a standardized module system. However, the other module systems have gradually become part of JavaScript's history since the ES module's appearance in the 2015 ECMAScript standard.

## Usage

To convert a JavaScript file to an ES module, you need to use the export keyword to make your code available for other files to import. For example:

```javascript
    export default class Vehicle{
        constructor(brand,model){
            this.brand = brand;
            this.model = model;
        }
    }

    export const moveForward = () => {
        console.log("vehicle is moving forward.")
    }
```
In JavaScript there are two way to export variables: Named export and default export.
Default exports allow you to export a single value as the default export from a module. There can only be one default export per module. When importing a default export, you can choose any name for the imported value.
When importing a default export, you don't need to use curly braces ({ }) like you do with named exports. The imported value can be assigned to any variable name.

Named exports allow you to export multiple values from a module. Each exported value has a name, and when importing, you need to use the same name to reference the exported value. Named exports are useful when you want to export multiple functions, variables, or objects from a module and import by using {}.

Then, in another file, you can use the import keyword to import the function from the module:

```javascript
    import Vehicle, { moveForward } from "./export.js";

    const vehicle = new Vehicle("Audi","R8");

    console.log(vehicle);
    moveForward();
```
Its crucial to know, when you wanted to import variables from external files you can indicate module address by two way. 

 If it's in the same folder with your current js file or same application folder you can indicate the address by from "./exp.js" or "../expfolder/exp.js". "./" is searchs in current folder while "../" is moving one folder back.

 If it's in another project file in your computer, you can type the addres by using simply '/' this will start your root folder of your computer.


## Using Modules in Browser

To use modules in a browser, the script tag should include the type attribute with the value "module". For example:

```html
<script type="module" src="./modules.js"></script>
```


