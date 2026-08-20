---
theme: seriph
transition: fade
title: 學會在終端機裡生存
---

# 學會在終端機裡生存

成為專家之前，你要先活下去

---

# 目錄

- 終端機與 Shell 的選擇
- 生存所需的基本指令
- 打造好用的終端機環境
- 現代 CLI 工具與替代品
- 指令查詢與學習技巧
- TUI 與學習 CLI 的價值

---
layout: image-right
image: /assets/terminal-survival-guide/wezterm.png

backgroundSize: contain
---

# 終端機的選用

- 系統自帶的
- iTerm2 (Mac)
- Ghostty
- **WezTerm**
- Alacritty
- Warp
- ...

---

# Shell 的選用

Bash、Zsh、Fish，該怎麼選？


### Bash

經典款，絕大部分 Linux 發行版的預設 Shell。相容性高、伺服器上幾乎都找得到，適合撰寫需要跨環境執行的腳本。

### Zsh

與 Bash 的操作方式大致相容，補全、主題與外掛生態系豐富。學會後仍能順利操作 Bash，個人開發環境推薦使用。

### Fish

開箱即用的自動建議、語法上色與友善補全，互動體驗很好；但語法不完全相容 Bash，複製 Shell Script 時需要留意。

> 不確定怎麼選？日常開發用 Zsh，伺服器與腳本先學 Bash；重視開箱即用的互動體驗，再試試 Fish。

---
layout: two-cols-header
---

# 基本常用指令

學一些足以讓你在終端機裡生存的指令

::left::

### 搜尋類

- `ls`：列出目錄內容
- `cd`：切換目錄
- `mkdir`：建立新目錄
- `which`：查找指令的路徑
- `cat` 🐱：顯示檔案內容
- `exit`：退出終端機
- `top`：查看系統資源使用情況
- `pwd`：顯示目前所在目錄
- `man`：查看指令的使用說明

::right::

### 操作類

- `echo`：輸出文字到終端機
- `clear`：清除終端機畫面
- `rm`：刪除檔案或目錄
- `cp`：複製檔案或目錄
- `mv`：移動檔案或目錄
- `touch`：建立新檔案

---
layout: intro
---


# 裝飾一下你的終端機

有時不是我們懶，是還沒有打造一個讓自己願意使用的環境。

- 知道自己現在在哪裡
- 看得出專案的狀態
- 打錯指令前就發現
- 少打一點重複的內容

---
layout: image
image: /assets/terminal-survival-guide/before-setting.png
backgroundSize: contain
---

---
layout: image
image: /assets/terminal-survival-guide/after-setting.png
backgroundSize: contain
---

---
layout: image-right
image: /assets/terminal-survival-guide/terminal-explain.png
backgroundSize: contain
--- 

# 先拆解終端機的外觀


### 看得見的

- Terminal：WezTerm
- Font：Nerd Font
- Prompt：Starship / Powerlevel10k


### 提升體驗

- Plugin Manager：Zinit / Oh My Zsh
- Syntax Highlighting（語法上色）
- Autosuggestions（自動建議）

---

# Prompt 的裝飾

|      | Starship             | Powerlevel10k                 |
| ---- | -------------------- | ----------------------------- |
| 定位 | 跨 Shell 的 Prompt   | Zsh 專用 Theme（主題）        |
| 設定 | `starship.toml`      | `p10k configure`、`.p10k.zsh` |
| 特色 | 跨平台、設定格式統一 | 設定精細、內建互動式精靈      |
| 適合 | 可能切換不同 Shell   | 確定長期使用 Zsh              |

<div class="mt-8">

> 以前我用 Powerlevel10k，後來改用 Starship，因為我認為 Powerlevel10k 設定還是太繁瑣，Starship 的設定檔統一格式到處複製貼上就好。

</div>

---
layout: two-cols-header
---

# Zinit or Oh My Zsh？

::left::

### Oh My Zsh

幫你準備好一套 Zsh 環境：

- 預設設定
- 大量內建 Plugins
- Themes
- 自動更新

::right::

### Zinit

專注在載入與管理 Plugins：

- 設定由自己掌控
- 可載入 GitHub 上的 Zsh Plugins
- 支援延遲載入與載入順序控制
- 適合想理解 `.zshrc` 的人

---

# 最有用的 Plugins

### zsh-syntax-highlighting

輸入時檢查並標示指令：

- 存在的指令 → 正常顏色
- 不存在的指令 → 紅色
- 字串、參數與路徑 → 不同顏色

### zsh-autosuggestions

根據歷史紀錄與補全提供建議：

- 灰色文字顯示建議
- 按 `→` 接受建議
- 重複指令不用重新輸入

---
layout: center
---

# 基礎指令的替代品

有些 CLI 太陽春，我需要更潮的

- `cat` : `bat` 🦇
- `ls` : `eza`, `lsd`
- `top` : `btop`, `htop`

---
layout: center
---

# 指令記不完 😵‍💫

CLI 工具只會更多，你一定記不完所有指令，學會查指令與 CLI 通用設計規則，才是最重要的。

除了用到爛掉的指令你會記得之外，其他指令你只要知道怎麼查就好，有幾個方向跟技巧：

- `--help` 幾乎所有 CLI 都有這個參數，會列出指令的使用方式與可用參數。
- `man` 會列出指令的使用說明，通常比 `--help` 更詳細。
- 熟悉 CLI 設計的通用準則，可以更快進入狀況([甚至有人寫成一本書？](https://clig.dev))
- 查詢官方文件，通常會有更完整的使用說明與範例。

---
layout: center
---

# TUI？

最近很紅的 TUI 真的有那麼好用嗎？

終端機越來越強大，很多 CLI 工具開始提供 TUI（Text-based User Interface）介面，讓使用者可以在終端機裡有更直覺的操作體驗。

我認為客群更偏向終端機達人，你依然要熟悉操作介面、快捷建立與指令，才能在 TUI 裡更有效率的操作。

一般人使用 TUI 通常只是看一些資訊沒有要複雜操作

---
layout: center
---

# 為什麼要學會這個 ？

- 當 GUI 不存在或壞掉時，CLI 是你的唯一希望
- CLI 有時就藏著你要的那個功能，不需到大費周章下載奇怪的工具軟體
- 一些簡單的事，CLI 做會更快更直接
- 可以大致看懂 AI 到底在搞什麼鬼
- ~~幾乎都是免費的(至少到目前為止我沒付過任何一毛錢)~~

---
layout: center
---

# Thank You
