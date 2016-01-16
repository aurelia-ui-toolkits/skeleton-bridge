# This project is in the early phase of its development - not ready to be used in any context

* * *

## Skeleton bridge

### Introduction

**Skeleton** Bridge is an Aurelia application meant to be used as the starting point to for any Aurelia-XXX-Bridge project, XXX denoting the name of any third party Toolkit / SDK that is of interest to Aurelia application developers. This application is designed using all of the experience obtained in the process of building the **[Aurelia-KendoUI Bridge](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin)** - where we used both [Aurelia es2016 skeleton navigation app ](https://github.com/aurelia/skeleton-navigation/tree/master/skeleton-es2016) and [Aurelia skeleton plugin](https://github.com/aurelia/skeleton-plugin) as the code for the initial bridge structure.The idea for using both "skeletons" in a single project was driven by the desire to offer the "mini development environment" in which the developer can simultaneously work on both "wrapper" (often reffered to as a plugin, although the word plugin is more generic than wrapper in this context) and the app "consuming" wrapper's services. 

### Formal definition of the structure and development process

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




Then, bridge developers use the whole entity, by adding more wrapper files to the light blue box, and the sample apps that illustrate the use of the wrappers in the green box.

