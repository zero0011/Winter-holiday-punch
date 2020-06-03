# qianyecloud

## 云盘介绍

前端云盘前端采用 vue2.0 + vue-router + vue-resource + es6 +  less 的技术栈。

1. 项目中引入 model 层 , 其层级与数据库存储层级相对应 , 为视图层提供模型 , 进行视图层能够完全面向对象思想进行开发 , 这是本项目的精髓所在 .
2. components 文件夹下放了一些通用的组件

## 项目部分结构

- doc         // vue-cli 创建后配置文档
- node_modules // 依赖包存放目录
- public      // 入口目录
- src         // 源码目录
    - assets        // 静态资源
    - common        // 通用
        - directive     // 自定义指令
            - directive.js      // 验证规则指令
        - filter        // 格式化
        - fork          // 引用外部插件
        - i18n          // 国际化通用
        - util          // 工具包
    - components    // 公用组件
        - copy      // 复制工具
        - filter    // 筛选工具
        - photoswiper   // 图片预览
        - previewer     // 预览通用
        - CreateSaveButton.vue      // 保存创建按钮组件
        - LoadingFrame.vue          // 框架加载组件
        - NbBtnDropdown.vue         // 按钮下拉组件
        - NbCheckbox.vue            // 复选框组件
        - NbExpanding.vue           // 收缩展开组件
        - NbPager.vue               // 分页组件
        - NbRadio.vue               // 单选框组件
        - NbSlidePanel.vue          // 动画组件
        - NbSwitcher.vue            // 开关按钮组件
    - model            // 前端模型层
        - base          // 基
            - Base.js       // 基类
            - BaseEntity.js    // 实体基类
            - 