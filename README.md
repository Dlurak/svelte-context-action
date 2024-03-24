# svelte-context-action

Create right-click context menus with Svelte actions.

## Installation

```bash
$ npm install svelte-context-action
```
```bash
$ yarn add svelte-context-action
```
```bash
$ pnpm add svelte-context-action
```

## Usage

```svelte
<script>
  import { contextMenu } from 'svelte-context-action';
</script>

<div
    use:contextMenu={{
        items: [
            {
                type: 'button',
                content: 'Hello world',
                callback: () => window.alert('hi')
            },
            {
                type: 'button',
                content: 'Hi 1',
                callback: () => window.alert('hi')
            },
            {
                type: 'divider'
            },
            {
                type: 'button',
                content: 'Hi 2',
                callback: () => window.alert('hi')
            }
        ],
    }}
>
    Right click me!
</div>
```

## Documentation

At this very early stage there is no documentation yet. Please refer to the example above as well as to the type system when using this package.
