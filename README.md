# svelte-context-action

Svelte context action provides a svelte action to create highly configurable context/right click menus.

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

Documentation is available using a GitHub Wiki [here](https://github.com/Dlurak/svelte-context-action/wiki).
