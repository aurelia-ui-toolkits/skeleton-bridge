### This project is in the early phase of its development - not ready to be used in any context

* * *

## Skeleton bridge

### Introduction

**Skeleton** Bridge is an Aurelia application meant to be used as the starting point to for any Aurelia-XXX-Bridge project, XXX denoting the name of any third party Toolkit / SDK that is of interest to Aurelia application developers. This application is designed using all of the experience obtained in the process of building the **[Aurelia-KendoUI Bridge](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin)** - where we used both [Aurelia es2016 skeleton navigation app ](https://github.com/aurelia/skeleton-navigation/tree/master/skeleton-es2016) and [Aurelia skeleton plugin](https://github.com/aurelia/skeleton-plugin) as the code for the initial bridge structure.The idea for using both "skeletons" in a single project was driven by the desire to offer the "mini development environment" in which the developer can simultaneously work on both "wrapper" (often reffered to as a plugin, although the word plugin is more generic than wrapper in this context) and the app "consuming" wrapper's services. 

### Informal definition of the structure and development process

In the following text, we will use the word **bridge** as an alternative to the word **interface** - both meaning a "software connector" between two software components that cannot collaborate without such bridge. 

Let the **bridge** be graphically defined as:

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/12366618/3ff528d2-bbaa-11e5-9154-ddd4b4e85620.png"></img>
 <br><br>
Image 1 - Aurelia Bridge
</p>
<br>

The "bridge" on this image is defined as the outer box, which has the following internal structure:

- bridge infrastructure / utilities (painted in orange color)
- collections of sample applications each the services offered by the wrappers (painted in green color)
- collection of wrappers - where each wrapper converts a specific third party module into an Aurelia Component (panited in blue color

**Image 1** represents a _snapshot_ of the proces of developing the bridge, as it indicates the existence of several wrappers (non-empty blue box) and parallel existence of aurelia applications (green box) that use the services of the existing wrapper. This approach, where the bridge developer writes the code that interfaces some third party UI control (like KendoUI grid for example, although the concept of bridge surpasses the limitation to bridgning Aurelia to only third party UI controls) and can immediately verify the correct wrapper functioning by writing a small application that uses this wrapper -- is what we meant by naming it a "mini development environment" in the introduction section.

Using a "pidgeon code section" shown below, the process of building the bridge can be described as

```
until not finished repeat
    add a wrapper for a new third party module (blue box)
    write the application side code that uses this wrapper (green box)
    verify the correct behavior of newly added control
```

* * *

The **skeleton bridge** (subject of this article) is defined by the image 2 below

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/12366896/22bfccfc-bbac-11e5-9330-ba0dbd25caef.png"></img>
 <br><br>
Image 2 - Aurelia Skeleton Bridge
</p>

This is the minimal "bridge development environment", agnostic to any and all third party components, designed to be used as the replacement for the original [Aurelia Skeleton Plugin](https://github.com/aurelia/skeleton-plugin) project. It is the starting point for development of Aurelia Bridge, consisting of a single wrapper clas 

```javascript
export class ClickCounter {
  count = 0;

  increment() {
    this.count++;
  }
}
```

and a similarly trivial Aurelia application that uses this wrapper.

The orange box represents the collection of the Bridge project's infrastructure and utilities - defined on Image 3 below:

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/12367304/ebbdd764-bbae-11e5-905a-bd7dfc6427da.png"></img>
 <br><br>
Image 3 - Aurelia Skeleton Bridge - Detailed 
</p>
<br>

As it's the case with any well designed Aurelia application - all orange box sub-components are implemented as configurable `features, allowing bridge extensibility.

A brief description of the orange box content:

1. All UI elements that the green box offers to the wrapper consuming applications (Image 2 above)
2. Full online help infrastructure (again needed by the green box)
3. [Plugin Builder](https://github.com/aurelia-ui-toolkits/plugin-builder.

### Sample bridge




