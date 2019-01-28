# Disable double tap

## What is this?

The default behavior in Safari on iOS is to zoom in whenever the user double taps. This behavior is not always desireable. For example, if you are making a game where the user can tap twice in quick succession. It is not easy to disable though since Apple doesn't want developers to disable this behavior.

This library is a React component that prevents this default behavior.

## How to use

`yarn add disable-double-tap`

or

`npm install disable-double-tap`

```js
import React from "react";
import DisableDoubleTap from "disable-double-tap";

const Component = () => {
  return (
    <DisableDoubleTap>
      <div>Double tapping on me won't zoom in!</div>
    </DisableDoubleTap>
  );
};
```
