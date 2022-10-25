# 备注规范

* @group general style
--------------------------------------------------------------------- *

* @group helper style
--------------------------------------------------------------------- *

* @group page style
--------------------------------------------------------------------- *

建立查询表

* Color Variables
@colordef #434343; dark gray
@colordef #f2f6e4; light green
@colordef #90bllf; dark green
@colordef #369; dark blue

@todo 		以后需要复查、修改的
@bugfix		代码或预览器的特定问题
@workaround	暂时的代码

# JSDoc

根据注释生成API文档和智能提示。

## 名称路径

给变量提供一个唯一标识"实例方法"、静态方法、内部函数。

- `[myFunction]` - 函数命名
- `[MyConstructor]` - 构造函数命名
- `[MyConstructor]#[instanceMember]` - 实例方法命名
- `[MyConstructor].[staticMember]` - 静态方法命名
- `[MyConstructor]~[innerMember]` - 内部函数命名

## JSDoc 命令行

	$ /path/to/jsdoc <mycode.js> [<options>...] [<path>]

**mycode.js**

指定要操作的 JS 文件

**path**

提供生成文档路径

**options**

- [Markdown file][md-file]（以“.md”结尾）- 生成 README 路径将生成在文档头部。

- `(-a | --access) <value>` - 只显示指定 access 标识符。value：`all`、`private`、`protected`、`public`、`undefined`

- `(-c | --configure) <value>` - 指定配置文件路径。default：安装目录下 conf.json 或 conf.json.EXAMPLE。

- `(-d | --destination) <value>` - 指定输出文档路径。default：`./out` 的 Haruki 模板。

- `--debug` - 打印日志

- `(-e | --encoding <value>)` - 指定编码，default：`utf8`。

- `(-h | --help)` - 显示可用命令。

- `--match <value>` - 运行测试。

- `--nocolor` - 测试时不使用颜色输出。

- `(-p | --private)` - 将私有标识符也生成到文档中。@private、tags-private.md。

- `(-P | --package)` - package.json 文件。

- `--pedantic` - 将警告视为错误。default：`false`。

- `(-q | --query) <value>` - 指定解析和储存到全局变量  env.opts.query 中。示例：`foo=bar&baz=true`。

- `(-r | --recurse)` - 扫描源文件和导览时递归到子目录。

- `(-R | --readme)` - 包含到生成文档的 README.md 文件。

- `(-t | --template) <value>` - 生成输出文档的模板路径。default：`templates/default`。

- `(-T | --test)` - 运行测试套件，并把结果打印到控制台。

- `(-u | --tutorials) <value>` - 导览路径，JSDoc要搜索的目录。如果省略，将不生成导览页。

- `(-v | --version)` - 显示版本号。

- `--verbose` - 日志的详细信息。default：`false`。

- `(-X | --explain)` - 以 JSON 格式转储所有的 doclet 到控制台。 

## JSDoc 配置文件 conf.json

### 配置模板

## JSDoc 插件

### Markdown 插件

### Tutorials

### 将 package.json 信息合并到文档

### 将 README 信息合并到文档

## 示例

- ES 2015 Classes
- ES 2015 Modules
- CommonJS Modules
- AMD Modules

## JSDoc 标签

- * `@access <private|protected|public>` - 描述类型
- * `@private` - 私有
- * `@protected` - 保护
- * `@public` - 公共
- * `@class [<type> <name>]` - 别名：@constructor，构造函数
- * `@classdesc <some description>` - 描述构造函数的文本
- * `@constructs [<name>]` - 指明该成员作为构造函数。如 @lends 对象字面量定义的类。
- * `@augments <namepath>` - 别名：@extends，指明继承的父类。
- * `@callback` - 回调函数
- * `@function [<FunctionName>]` - 别名：@func、@method，函数
- * `@event <className>#[event:]<eventName>` - 事件
- * `@default [<value>]` - 别名：@defaultvalue` - 默认值
- * `@enum [<type>]` - 杖举
- * `@constant [<type> <name>]` - 别名：@const，常量
- * `@static` - 定义静态成员
- * `@type {typeName}` - 描述对象类型。
- * `@typeof [<type>] <namepath>` - 定义一个类型
- * `@version` - 描述版本信息
- * `@menber [<type>] [<name>]` - 指定成员。 
- * `@memberof <parentNamepath>` - 描述该成员属于...
- * `@mixes <OtherObjectPath>` - 描述引用一个混入
- * `@mixin [<MixinName>]` - 描述定义一个混入
- * `@module [[{<type>}] <moduleName>]` - 描述定义一个模块
- * `@name <namePath>` - 描述对象的名
- * `@namespace [{<type>}] <SomeName>]` - 定义命名空间
- * `@param` - 描述参数
- * `@property` - 别名：@prop，描述一个对象的属性。 
- * `@readonly` - 标记为只读
- * `@requires <someModuleName>` - 描述当前需要的依赖
- * `@returns` - 别名：return，描述返回值
- * `@inner` - 描述内部成员。
- * `@instance` - 描述实例成员。
- * `@implements {typeExpression}` - 接口实现
- * `@interface [<name>]` - 接口定义 
- * `@file` - 别名：@fileoverview、@overview，文件
- * `@example` - 使用例子
- * `@description <description>` - 别名：@desc，描述文本
- * `@external <NameOfExternal>` - 别名：@host，标明外部
- * `@global` - 标明全局的
- * `@abstract` - 别名：@virtual，指定该方法必须被子类实现。 
- * `@borrows <that namepath> as <this namepath>` - 描述 that 等同 this。
- * `@alias <aliasNamepath>` - 定义别名
- * `@author <name> [<emailAddress>]` - 指定作者和邮箱地址。
- * `@copyright <some copyright text>` - 版权信息。
- * `@deprecated  [<text>]` - 描述不赞成使用
- * `@exports <moduleName>` - 导出成员
- * `@fires <className>#[event:]<eventName>` - 别名：@emits，描述该事件将触发另外一个事件。
- * `@ignore` - 指定忽略。它不会出现在导出文档中。
- * `@inheritdoc` - 继承父类的文档。
- * `@kind <kindName>` - 描述标识类型。
- * `@lends <namepath>`
- * `@license <identifier>` - 标识许可。
- * `@listens <eventName>` - 列出一个标识的监听事件
- * `@override` - 标明该成员覆盖父中的一个成员。例如重写父类方法。
- * `@see <namepath | text>` - 指明可以参考另外一个文档
- * `@since <versionDescription>` - 指明该功能添加的版本号
- * `@summary` - 概要
- * `@this <namePath>` - 描述 this 的指向
- * `@throws` - 指明可能抛出错误
- * `@todo` - 描述将要完成的任务。
- * `@variation` - 区分具有相同名称的不同的对象。
- * `@link` - 别名：@linkcode、@linkplain，链接
- * `@tutorial <tutorialID>` - 定义一个链接