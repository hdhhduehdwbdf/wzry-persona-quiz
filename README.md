<div align="center">

# 王者荣耀人物测试

**峡谷八维人格模型 × 24 位王者荣耀英雄，测出与你最像的那一位**

[![在线体验](https://img.shields.io/badge/在线体验-点击进入-e2b45c?style=for-the-badge&logo=googlechrome&logoColor=white)](https://hdhhduehdwbdf.github.io/wzry-persona-quiz/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-已部署-181717?style=flat-square&logo=github&logoColor=white)](https://pages.github.com/)
[![测试](https://img.shields.io/badge/测试-通过-2cc9bb?style=flat-square)](https://github.com/hdhhduehdwbdf/wzry-persona-quiz/actions)

</div>

## 目录

- [项目介绍](#项目介绍)
- [峡谷八维](#峡谷八维)
- [英雄图鉴](#英雄图鉴)
- [功能特性](#功能特性)
- [技术架构](#技术架构)
- [快速开始](#快速开始)
- [页面导航](#页面导航)

## 项目介绍

王者荣耀人物测试是一个基于「峡谷八维人格模型」的性格测评工具。通过 24 道峡谷情景题，将你的打法风格、决策方式、心态特质与 24 位王者荣耀英雄进行匹配，测出与你人格最相似的本命英雄。

不需要注册，不需要联网（PWA 支持），所有数据仅保存在本地浏览器。

## 峡谷八维

| 维度 | 说明 |
|------|------|
| 操作 | 手速、连招、微操 precision |
| 意识 | 地图感知、节奏判断、风险预判 |
| 指挥 | 决策力、控场力、团队调度 |
| 支援 | 协同意识、保护欲、团队精神 |
| 输出 | 进攻性、伤害欲望、Carry 欲望 |
| 承伤 | 抗压能力、前排意识、牺牲精神 |
| 运营 | 发育规划、经济管理、资源分配 |
| 心态 | 稳定度、逆风抗压、情绪管理 |

## 英雄图鉴

涵盖 24 位王者荣耀英雄，横跨六大职业定位：

> 亚瑟 · 赵云 · 吕布 · 花木兰 · 铠 · 孙悟空 · 露娜 · 韩信 · 兰陵王 · 阿轲 · 李白 · 曜 · 诸葛亮 · 妲己 · 王昭君 · 大乔 · 貂蝉 · 上官婉儿 · 后羿 · 孙尚香 · 鲁班七号 · 公孙离 · 蔡文姬 · 瑶

每位英雄配有核心人格解读、语录原声和雷达图匹配展示。

## 功能特性

- 24 道峡谷情景题，六大模块覆盖开局、对线、团战、逆风等场景
- 八维雷达图可视化，直观展示你与英雄的匹配度
- 专属分享卡生成，一键保存到本地
- PWA 离线支持，断网也能继续答题
- 峡谷暗金视觉风格，Tailwind CSS v4 构建
- 本地存储，隐私无忧

## 技术架构

| 层级 | 技术 |
|------|------|
| 样式 | Tailwind CSS v4（编译产物 `css/app.css`） |
| 交互 | 原生 JavaScript（`js/core.js` 数据层 + 页面内联逻辑） |
| 部署 | GitHub Pages（`main` 分支自动部署） |
| 测试 | Node.js 原生测试（`tests/tests.js`） |

## 快速开始

```bash
git clone https://github.com/hdhhduehdwbdf/wzry-persona-quiz.git
cd wzry-persona-quiz
npm install
npm run serve
```

浏览器打开 `http://localhost:3000` 即可体验。

## 页面导航

| 页面 | 路径 | 说明 |
|------|------|------|
| 入口 | `index.html` | 自动跳转至着陆页 |
| 着陆页 | `pages/landing.html` | 项目介绍与开始测试 |
| 性别选择 | `pages/gender.html` | 选择性别以优化匹配 |
| 答题页 | `pages/quiz.html` | 24 题逐题作答 |
| 报告页 | `pages/report.html` | 八维雷达图 + 英雄画像 |
| 分享页 | `pages/share.html` | 生成专属分享卡 |