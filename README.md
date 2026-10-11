<div align="center">

# ⚔️ 王者荣耀人物测试

**峡谷八维人格模型 × 24 位英雄**

[![在线体验](https://img.shields.io/badge/▶%20在线体验-hdhhduehdwbdf.github.io-e2b45c?style=for-the-badge)](https://hdhhduehdwbdf.github.io/wzry-persona-quiz/)

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-离线可用-5A0FC8?style=flat&logo=pwa)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![Tests](https://img.shields.io/badge/tests-29%20passing-brightgreen?style=flat)](https://github.com/hdhhduehdwbdf/wzry-persona-quiz/actions)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat)](LICENSE)

</div>

---

24 道峡谷情景题，从操作、意识、指挥、支援、输出、承伤、运营、心态八个维度建模，匹配出与你人格最相似的王者荣耀英雄。无需注册，数据仅存本地。

## 🧭 峡谷八维

| 维度 | 说明 |
|:---:|------|
| **操作** | 手速、连招精度、微操上限 |
| **意识** | 地图感知、节奏判断、风险预判 |
| **指挥** | 决策力、控场力、团队调度 |
| **支援** | 协同意识、保护欲、团队精神 |
| **输出** | 进攻性、伤害欲望、Carry 欲望 |
| **承伤** | 抗压能力、前排意识、牺牲精神 |
| **运营** | 发育规划、经济管理、资源分配 |
| **心态** | 稳定度、逆风抗压、情绪管理 |

## 🏆 英雄图鉴

24 位英雄横跨六大职业，每位均有核心人格解读与语录：

| 战士 | 刺客 | 法师 | 射手 | 辅助 | 坦克 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 亚瑟 赵云 吕布 花木兰 铠 | 韩信 兰陵王 阿轲 李白 曜 | 诸葛亮 妲己 王昭君 大乔 貂蝉 | 后羿 孙尚香 鲁班七号 公孙离 | 蔡文姬 瑶 上官婉儿 | 孙悟空 露娜 |

## ✨ 功能

- 📊 八维雷达图可视化匹配结果
- 🃏 专属分享卡一键保存
- 📴 PWA 离线支持
- 🔒 本地存储，隐私无忧

## 🚀 快速开始

```bash
git clone https://github.com/hdhhduehdwbdf/wzry-persona-quiz.git
cd wzry-persona-quiz
npm install
npm run serve        # http://localhost:3000
```

## 📁 项目结构

```
├── index.html              # 入口
├── pages/
│   ├── landing.html        # 着陆页
│   ├── gender.html         # 性别选择
│   ├── quiz.html           # 答题页
│   ├── report.html         # 报告页
│   └── share.html          # 分享页
├── js/core.js              # 数据层（题目、英雄、匹配算法）
├── css/
│   ├── input.css           # Tailwind 源文件
│   └── app.css             # 编译产物
├── assets/                 # 图标、OG 图
├── tests/tests.js          # 测试
└── sw.js                   # Service Worker
```

## 🛠 技术栈

| | |
|---|---|
| 样式 | Tailwind CSS v4 |
| 交互 | 原生 JavaScript |
| 部署 | GitHub Pages |
| 测试 | Node.js |

## 📄 License

[MIT](LICENSE)