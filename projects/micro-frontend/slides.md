---
theme: seriph

title: Guild of Micro Front-End
---

# Micro Front-End 導論

Micro Front-End 定義及作法

---

# 目錄

- 研究目標
- 前端架構的演進
- Micro Front-End 定義
- Micro Front-End 的實作種類
- 我們真的需要 Micro Front-End 嗎？
- 單一專案多框架融合可能性（以 React、Svelte、Solid 為例）

---
layout: center
---

# 研究目標

- 平滑遷移現有專案至新框架可能辦法
- 理解 Micro Front-End 基本構想，同時了解其優缺點

---
layout: cover
---

# 前端架構的演進

Monolith -> Modular Monolith -> Monorepo

---
layout: image-right
image: /assets/monolith.png
backgroundSize: contain
---

# Monolith (單體式)

- 與後端共存
- 通常由後端模版語法生成
- 前端多為附屬品（為後端提供介面操作）
- 與使用者互動性較低

---
layout: image-right
image: /assets/modular-monolith.png
backgroundSize: contain
---

# Modular Monolith (模組化單體式)

- 前端與後端分離
- 整體專案在被細化成多個模組（重複的功能行為及元件）
- 關注點著重於更複雜的互動、系統化的組織樣式、狀態管理及變化
- 多以 SPA 方式運作

---
layout: image-right
image: /assets/modular-monolith.png
backgroundSize: contain
---

# Monorepo

---