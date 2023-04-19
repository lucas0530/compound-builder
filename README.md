<!-- <p align="center">
  <img src="https://raw.githubusercontent.com/KZ-Lucas/compound-builder/master/logo/logo.png" alt="compound-builder logo" width="300" />
</p> -->

# compound-builder

<a href="https://npmjs.org/package/compound-builder"><img alt="NPM version" src="https://img.shields.io/npm/v/compound-builder.svg?style=flat-square"></a>
<a href="https://npmjs.org/package/compound-builder"><img alt="NPM downloads" src="https://img.shields.io/npm/dm/compound-builder.svg?style=flat-square"></a>
<a href="https://unpkg.com/compound-builder"><img alt="Size" src="https://img.badgesize.io/https://unpkg.com/compound-builder?style=flat-square"></a>

<!-- <a href="https://github.com/KZ-Lucas/compound-builder/actions/workflows/ci.yml"><img alt="GitHub Workflow Status (branch)" src="https://img.shields.io/github/workflow/status/KZ-Lucas/compound-builder/ci/master"></a> -->

<!-- <a href="https://codecov.io/gh/KZ-Lucas/compound-builder/branch/master"><img alt="Coverage Status" src="https://img.shields.io/codecov/c/github/KZ-Lucas/compound-builder/master.svg?style=flat-square"></a> -->

It's small but powerful.
You can build compound components with declarative code.

Also, it supports type safety as shown in the picture below.

<p align="center">
  <img src="https://postfiles.pstatic.net/MjAyMzA0MThfMjM1/MDAxNjgxODI5NTM0Mzk0.xDb02_hul7RR9OLRJ8fn9sfnCa1O2YoEWo_LSIGhm0sg.bhWtPajWXNfKMdwTVkyoQLVQ2HIjFIh3CzB0dcdvtZYg.GIF.qq3884qq/ezgif-4-8b3e61defe.gif?type=w773" alt="compound-builder is typesafe" width="600" loop="infinite" />
</p>

<br>

<table>
  <thead>
    <tr>
      <th colspan="5"><center>🕹 Demo Repository 🕹</center></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/KZ-Lucas/design-system-for-me/blob/master/src/components/Organisms/layouts/sample/index.ts">Sample Counter</a></td>
    </tr>
  </tbody>
</table>
<br>

## Basic example

```jsx
import { compoundBuilder } from "compound-builder";
import constate from "constate";

import useSampleLayout from "./index.hook";
import { SampleBody, SampleFooter, SampleHeader } from "./index.style";

export const [SampleProvider, useCount, useCountIncrement, useCountDecrement] =
  constate(
    useSampleLayout,
    (value) => value.count,
    (value) => value.increment,
    (value) => value.decrement
  );

const SampleLayout = compoundBuilder(SampleProvider, {
  // You can specify any key you want. (e.g. chicken, pizza)
  Header: SampleHeader,
  Body: SampleBody,
  Footer: SampleFooter,
});

export default SampleLayout;
```

When used as shown above, the developed compound component will be affected by the Sample Provider context. This means that you can access the context through hooks like useCount.

## If you develop compound components through a builder, you can use them as follows:

```jsx
import SampleLayout from "@/components/Organisms/layouts/sample";
import CounterSection from "@/components/Organisms/sections/sample/CounterSection";

const SamplePage = () => {
  return (
    <SampleLayout>
      <SampleLayout.Header>
        <SampleHeaderSection />
      </SampleLayout.Header>

      <SampleLayout.Body>
        <CounterSection />
      </SampleLayout.Body>

      <SampleLayout.Footer>
        <SampleFooterSection />
      </SampleLayout.Footer>
    </SampleLayout>
  );
};

export default SamplePage;
```

## Installation

npm:

```sh
npm i compound-builder
```

Yarn:

```sh
yarn add compound-builder
```

## API

### `compoundBuilder<T>(wrapperComponent, Record<string, React.component<T>)`

If you add sub-components to the compound component to be specified, you can handle the types as they are when using them.

## Contributing

If you find a bug, please [create an issue](https://github.com/KZ-Lucas/compound-builder/issues/new) providing instructions to reproduce it. It's always very appreciable if you find the time to fix it. In this case, please [submit a PR](https://github.com/KZ-Lucas/compound-builder/pulls).

If you're a beginner, it'll be a pleasure to help you contribute. You can start by reading [the beginner's guide to contributing to a GitHub project](https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/).

When working on this codebase, please use `yarn`. Run `yarn examples` to run examples.

## License

MIT © [KZ-Lucas](https://github.com/KZ-Lucas)
