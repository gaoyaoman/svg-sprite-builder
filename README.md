# SVG Build Tool

**`SVGBuildTool`**是一个基于`webpack`、`svg-sprite-loader`、`svgo-loader`，用来将一组svg文件转化为`SVG Sprite`的构建工具。

> SVG Sprite的优势：
>
> - 支持多色图标了，不再受单色限制。
> - 支持像字体那样通过font-size,color来调整样式。
> - 支持 ie9+
> - 可利用CSS实现动画。
> - 减少HTTP请求。
> - 矢量，缩放不失真
> - 可以很精细的控制SVG图标的每一部分

### 一、环境准备

- Node.js (>=v16.15.1)
- yarn (>=1.19.1)



### 二、项目结构

```bash
.
|-- CHANGELOG.md
|-- README.md 
|-- build
|   |-- build.js
|   `-- entry.single.js
|-- demo.html
|-- dist
|   `-- icon.single.d2905b.js
|-- icons
|   `-- single
|       |-- icon-add-circle.svg
|       |-- ...
|       `-- icon-wisdom-site.svg
|-- package.json
|-- webpack.config.js
`-- yarn.lock
		

```

### 三、使用方法

1. 安装依赖

   ```bash
   yarn install
   ```

   

2. 将需要转化的svg文件放在`icons`文件夹下，单色图标放在`single`下

3. 运行构建

   ```bash
   yarn build
   ```

4. 在`dist`下得到构建好的SVG Sprite文件

   ```bash
   .
   |-- icons
      `-- icon.single.d2905b.js
   ```

   

5. 在开发项目中引入生成的SVG Sprite文件，通过svg:use使用，具体参考`demo.html`

   ```html
   <script src="icon.single.d2905b.js"></script>
   
   // 参数name，是对应的图标名称
   <svg class="icon">
       <use xlink:href="#icon-{name}" />
   </svg>
   ```

   



