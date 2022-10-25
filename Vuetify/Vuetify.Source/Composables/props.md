## Props

- `border: undefined` - Boolean, Number, String, 应用边框样式
- `elevation: undefined` - Number, String
- `rounded: undefined` - Boolean, Number, String
- `tag: 'div'` - String
- `theme: undefined` - String
- `transition: 'fade-transition'` - Boolean, String, Object, 过渡
- `size` - String, Number, 尺寸：`x-small`, `small`, `default`, `large`, `x-large`
- `density: 'default'` - String, 间距：`null`, `default`, `comfortable` 宽松, `compact` 紧凑

makeLayoutProps

- `overlaps: []` - `Array`
- `funllHeight: undefined` - Boolean

makeLayoutItemProps

- `name: undefined` - String
- `order: 0` - Number, String
- `absolute: undefined` - Boolean

makeNestedProps

- `selectStrategy` - String, Function,`single-leaf`, `leaf`, `independent`, `single-independent`, `classic`
- `openStrategy` - String, Function, `list`, `single`, `multiple`
- `opened` - Array,
- `selected` - Array,
- `mandatory` - Boolean

makeDimensionProps

- `height` - Number, String,
- `maxHeight` - Number, String,
- `maxWidth` - Number, String,
- `minHeight` - Number, String,
- `minWidth` - Number, String,
- `width` - Number, String

makeItemsProps

- `items: []` - Array
- `itemTitle: 'title'` - String, Array, Function
- `itemValue: 'value'` - String, Array, Function
- `itemChildren: 'children'` - Boolean, String, Array, Function
- `itemProps: 'props'` - Boolean, String, Array, Function
- `returnObject` - Boolean

makeVariantProps

- `color` - String
- `variant` - String, 样式变体：`elevated` 升高, `flat` 平的, `tonal` 色调, `outlined` 轮廓, `text` 文本, `plain` 单调

makeRouterProps

- `href` - String
- `replace` - Boolean
- `to` - String, Object

makeGroupProps

- `modelValue: undefined` - null
- `multiple` - Boolean
- `mandatory` - Boolean, String
- `max` - Number
- `selectedClass` - String
- `disabled` - Boolean

makeGroupItemProps

- `value` - null
- `disable` - Boolean
- `selectedClass` - String

makeFilterProps

- `customFilter` - Function,
- `customKeyFilter` - Object,
- `filterKeys` - Array, String,
- `filterMode: intersection` - String
- `noFilter` - Boolean

makeItemsProps

- `items: []` - Array
- `itemTitle: 'title'` - String, Array, Function
- `itemValue: 'value'` - String, Array, Function
- `itemChildren: 'children'` - Boolean, String, Array, Function
- `itemProps: props` - Boolean, String, Array, Function
- `returnObject` - Boolean

makeValidationProps

- `disabled` - Boolean,
- `error` - Boolean,
- `errorMessages: []` - Array, String,
- `maxErrors: 1` - Number, String,
- `name` - String,
- `readonly` - Boolean,
- `rules` - Array,
- `modelValue: null`
- `validationValue: null`