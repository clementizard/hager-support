# Support Dashboard


## Summary

- Aliases
- Routing
- Layouts
- Templates
- Contexts, Reducers and API calls
- Deployment

## Aliases

In order to shorten paths when importing files, aliases can be setup inside ```/next.config.js```. Current configuration is:

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
In order to setup a layout, the page component needs to export the ```getLayout```  method of the layout like so:

```
import { getLayout } from 'Layouts/LayoutUser';

...

Index.getLayout = getLayout;

export default Index;
```

## Templates

Templates are made to create components and services faster. Templates are defined under the ```.templates``` folder.
Components are splitted in 3 files minimum, here is the maximum list:

```
index.js
Component.js
Styles.js
Props.js
Tools.js 
```

## Contexts, Reducers and API calls

To share data through the differents components
