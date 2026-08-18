---
theme: seriph
transition: fade
title: 學會在終端機裡生存
---

# 學會在終端機裡生存

---

# 目錄


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

- 看得懂現在在哪裡
- 看得出 Git 的狀態
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
layout: two-cols-header

---