## helpers

**`getPropertyFromItem(item, property, fallback)`**

获取 Item Property 根据它的类型做出处理

- null - 直接返回 item, item 也为空则调用 fallback
- String - 返回 item.property
- Array - 遍历 property, 返回 `item = { property[0], property[1], ... }
- Function - 返回该函数的返回值

**`getObjectValueByPath(obj, path, fallback)`**

在 getPropertyFromItem 中处理 String 类型值, 返回 obj.path

**`getNestedValue(obj, path, fallback)`**

在 getPropertyFromItem 中处理 Array 类型值, 遍历数组返回 obj = `{ path[0], path[1], ... }`