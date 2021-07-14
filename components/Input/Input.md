# Input

## Notes

The `width` prop can accept as a value any valid Tailwind CSS width
class with the `w-` prefix removed. The resulting width will be the same as one
would expect if one had applied that Tailwind CSS class. See below for examples.

## Examples

```tsx
<Input />

// Required
<Input required />

// Disabled
<Input disabled />

// Placeholder
<Input placeholder="Type Input Here" />

// Full width
<Input width="full" />

// Fixed width (7rem in this case)
<Input width="28" />

// Half width
<Input width="1/2" />
```