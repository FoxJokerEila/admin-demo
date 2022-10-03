# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

创建命令

```
npx create-react-app admin-demo --template typescript
```

node 版本 v16.8.0

npm 版本 8.4.1

安装 react-router v6：

```bash
npm install --save react-router-dom history
```

安装 antd

`npm install antd`


src/pages 中为页面目录，home为主页，放置页面结构，构建菜单

src/api/student.json 是 mock 的数据，所有的拉取接口的操作都是这一个，当然，开发环境中不会是同一个的，crud 各一个接口。

你会发现编辑和添加时不会生效，因为我的代码没有编辑 json 文件的内容，当然不会变，只是测试数据，没后端，就不做实际的了。

[react-router v6 文档](https://reactrouter.com/en/main/start/overview)

[react-router-dom 配置教程](https://blog.csdn.net/weixin_44051815/article/details/121413076)

[axois 文档](http://www.axios-js.com/docs/)

[antd 组件库文档](https://ant.design/components/overview-cn/)

[mock 数据教程](https://www.php.cn/js-tutorial-465438.html)


启动命令：npm start




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
