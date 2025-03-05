---
titel: MD Test
tags: [test, mock]
---

# Test MD features

demo Text..
some more text here.. :tada:

link: [mks](https://makeyourschool.de/maker-ecke/material/) working?!
and another paragraph

## Abbr

Here we have a Text with some Abbreviations - here should be no line-break! just a Abbr now: HTML for example. or the good known W3C.
and more in the topic of MYS we have UART in most of the uC's.
and often Sensors are using I2C for there communication interface.

## Info Boxes...

### @mdit/plugin-alert

> [!note]
> This is a note

> [!tip]
> This is a tip

> [!important]
> Important Information...

> [!caution]
> be careful with this....

> [!warning]
> This is warning text

### markdown-it-container

::: info
just some Information...
:::

::: warning
*here be dragons*
:::


## code
this code block should be filled with a good example.ino code..
```c++ :./example.ino
// this should be replaced..
```

this code block does not find it's linked file..
```c++ :./does_not_exist.ino
this does fail.. so we can check a 404 is handled smoothly.
```


```c++ :./example2.ino
// this should be replaced..
```


## images
include an image:
![test](./test_image.png)

## heading2

-   list element
-   list element
-   list element
-   list element
