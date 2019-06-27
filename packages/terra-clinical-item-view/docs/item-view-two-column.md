When including icons as part of an `<ItemView.Display />`, it is reccomended to use the `iconAlignment="inline"` prop for best alignment and wrapping with the text.

```jsx
const display1 = <ItemView.Display icon={<IconPerson />} iconAlignment="inline" text="Asif Khan" />;
const display2 = <ItemView.Display icon={<IconBriefcase />} iconAlignment="inline" text="Care Position: Primary" />;
```
