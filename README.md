# Support Dashboard  
## Summary  

- Installation
- Aliases
- Routing  
- Layouts  
- Services  
- Templates  
- Norm
- Storybook
- Tests
- Deployment  

## Installation  
To install and run the application in development mode, clone the repository and run:

```npm install``` *or* ```yarn install```

Then:

```npm run dev``` *or* ```yarn run dev```

## Aliases  
  
In order to shorten paths when importing files, aliases can be setup inside ```/next.config.js```. 
Current configuration is:  
  
```  
Components: /components  
Layouts: /components/common/layouts  
Services: /services  
Public: /public  
Styles: /styles  
Tools: /tools  
Hooks: /tools/hooks  
```  
  
  
## Routing  
  
Next uses a folder to determine wich routes can be rendered.  
This folder is named *pages*. Except for **_app.js** and **_document.js**, each file in this folder is a route, and to assign a parameter to a route you have to name it with brackets around like this: **[id].js** or name a folder **[id]** with an **index.js** file in it.  
  
The current pages three is:  
  
```  
|-- _app.js  
|-- _document.js  
|-- index.js  
`-- user  
    |-- index.js  
    `-- [id]  
        `-- index.js  
```  
  
- **_app.js**: This file is used both by client and server. This is the root of the application.  
- **_document.js**: This file is only rendered server side. This file is used to setup every page under the same roof.  
- **index.js**: The home/landing/dashboard page. Mainly an overview of Weather Services.  
- **user/index.js**: The search form for a user.  
- **user/[id]/index.js**: Main view for every user (List of installations, devices...)  
  
## Layouts  
  
Layouts are shared components between pages.  
Every layouts are under ```components/common/layouts/```  
In order to setup a layout, the page component needs to export the ```getLayout``` method of the layout like so:  
  
```  
import { getLayout } from 'Layouts/LayoutUser';  
  
...  
  
Index.getLayout = getLayout;  
  
export default Index;  
```  
  
## Services  
  
Services are splitted in 3 parts: Contexts, Reducers and Functions.  

**[Contexts](https://reactjs.org/docs/hooks-reference.html#usecontext)** are used to provide the informations between components. Definitions can be found in ``` services/[ContextName]/context.js```
Usage of Hooks allows to extract and import both provider and consumer easily.

**[Reducers](https://reactjs.org/docs/hooks-reference.html#usereducer)** are defined and works the same way as Redux reducers. Definitions can be found in `services/[ContextName]/reducer.js`
Dispatch function and state are exported as hooks, and can be used like so.

Example:  
```
// provider.js
import { ContextNameProvider } from 'Services/ContextName';

export default ({ children }) => (
	<ContextNameProvider>
		{children}
	</ContextNameProvider>
);
```

```
// consumer.js
import {
 useContextNameState,
 useContextNameDispatch,
 ...otherHooksOrFunctions
 } from 'Services/ContextName';

...

export default () => {
	const state = useUserState();  
	const dispatch = useUserDispatch();


...
}
```
 
**Functions**: Functions can be used to dispatch events and manage state 
  
## Templates  
  
Templates are made to create components and services faster. Templates are defined under the ```.templates``` folder.  

**Components** are splitted in multiple files. Not all are mandatory, depending of the needs. Here is the list:  
  
```  
index.js
Component.js
Styles.js
Props.js
Animations.js
Tools.js
Loader.js
```

<details>
  <summary>Details</summary>

- ```index.js```: The export file.
- ```Component.js```: Component definition file, importing the others files to build it.
- ```Styles.js```: Styles of the component. Usage of [styled-components](https://www.styled-components.com).
- ```Props.js```: Props definitions ([prop-types](https://github.com/facebook/prop-types)), default props and others functions regarding the component's props.
- ```Animations.js```: Animations definitions. Usage of [framer-motion](https://www.framer.com/api/motion/).
- ```Tools.js```: Tools functions and others definitions that are used by the component.
- ```Loader.js```: Loader of the component, if any.  
</details>

**Services**  works the same way:
```
index.js
context.js
reducer.js
function.js
requests.js
hook.js
default.json
mock.json
```
<details>
  <summary>Details</summary>

- ```index.js```: The export file.
- ```context.js```: Context definition file. Provider and State/Dispatch Hooks
- ```reducer.js```: Reducer function definition.
- ```function.js```: Functions that calls requests, dispatch events and refresh state, among others.
- ```requests.js```: Functions of API calls.
- ```hook.js```: Hooks that can be used to update a state at first useEffect call.
- ```default.json```: Default state.
- ```mock.json```: Mock state. Used for tests.
</details>

## Norm

**Folder Naming**
Main folders and pages folders are written in minuscules. Components and others are written in [Upper Camel Case](https://wiki.c2.com/?UpperCamelCase).

**Files structure**
- ```Component.js```
1. External imports
2. Internal imports
    1. Internal components
    2. Styles
    3. Props
    4. Tools
    5. Loader
3. Definition
    1. Class
    2. Static variables
5. Export

External and internal imports are ordered by usage in the component definition, separated by a blank line.
Each import follow the eslint rule "object-curly-newline". In general Eslint rules must not be edited.
When importing components only import the folder, the index will take care of the rest.

- ```Styles.js```  Exports a list of components ordered by use in the definition of the class. Can also export a "styles" object used by the class.
- ```Props.js``` 
- ```Tools.js``` 
- ```Loader.js``` 
- ```index.js``` 

## Storybook

[Storybook](https://storybook.js.org/) is used to describe components. This tool is configured to allow props modifications in order to test components.
To try it out, run: ```npm run docs``` *or* ```yarn run docs```

## Tests

[Cypress](https://www.cypress.io/) is used to test unitary components and end to end. Run tests with: ```npm run test``` *or* ```yarn run test```

## Deployment

**WIP**
