# HydraRoute DNS Rules

Набор сгруппированных правил доменов для импорта в **HydraRoute**.  
Все правила разделены по категориям (Google, OpenAI, соцсети, стриминг, торренты и т.д.), чтобы можно было гибко включать/выключать нужные группы.

---

## 📂 Содержимое репозитория
- **`hydraroute-groups.json`** — все группы доменов в одном JSON.
- **`bookmarklet.js`** — скрипт для закладки (bookmarklet), позволяющий загрузить все группы в HydraRoute одним кликом.
- **`README.md`** — описание и инструкция по использованию.

---

## 📑 Категории в `hydraroute-groups.json`

### 01. Google & YouTube
Google сервисы, YouTube, API, статика и мультимедиа.  
Примеры: `google.com`, `youtube.com`, `ytimg.com`, `gstatic.com`, `googlevideo.com`.

### 02. OpenAI & AI
OpenAI (ChatGPT, API), Anthropic (Claude), Gemini, DeepMind, Perplexity, Grok.  
Примеры: `openai.com`, `chatgpt.com`, `oaistatic.com`, `claude.ai`, `gemini.google.com`.

### 03. Meta (Facebook, Instagram, WhatsApp)
Facebook, Instagram (включая клоны/вариации), WhatsApp, Threads.  
Примеры: `facebook.com`, `instagram.com`, `cdninstagram.com`, `whatsapp.com`, `threads.net`.

### 04. Telegram
Официальные домены Telegram и связанные сервисы.  
Примеры: `telegram.org`, `t.me`, `tdesktop.com`, `telegra.ph`, `telesco.pe`.

### 05. Microsoft & LinkedIn
Microsoft, Outlook, Live, Xbox, LinkedIn.  
Примеры: `microsoft.com`, `outlook.com`, `xbox.com`, `linkedin.com`.

### 06. Apple
Apple и связанные CDN.  
Примеры: `apple.com`, `apple-dns.net`, `apple-cloudkit.com`, `akamaized.net`.

### 07. Dev / Tools
GitHub, GitLab, Docker, JetBrains, HashiCorp, Terraform.  
Примеры: `github.com`, `docker.com`, `jetbrains.com`, `terraform.io`.

### 08. Social (прочие)
Twitter/X, Reddit, Quora, Pinterest, Strava.  
Примеры: `twitter.com`, `x.com`, `reddit.com`, `pinterest.com`.

### 09. Games
Игровые сервисы и магазины: Steam, Epic Games, EA, Rockstar, Nintendo, Xbox.  
Примеры: `steampowered.com`, `epicgames.com`, `ea.com`, `xbox.com`.

### 10. Streaming
Стриминговые сервисы: Netflix, Spotify, Disney+, Twitch.  
Примеры: `netflix.com`, `spotify.com`, `disneyplus.com`, `twitch.tv`.

### 11. Torrents & Cinema
Торрент-трекеры и онлайн-кинотеатры.  
Примеры: `rutracker.org`, `rutor.info`, `thepiratebay.org`, `kinozal.tv`, `hdrezka.pro`.

### 12. Misc (Разное)
Почта, VPN, облака и прочее.  
Примеры: `protonmail.com`, `nordvpn.com`, `zoom.us`.

---

## 🚀 Использование

### Способ 1. Bookmarklet
1. Откройте страницу HydraRoute с правилами.  
2. Создайте новую закладку в браузере.  
3. Вставьте в поле URL содержимое из [`bookmarklet.js`](bookmarklet.js).  
4. Перейдите в HydraRoute → кликните закладку → все группы автоматически подставятся.  

### Способ 2. Ручная загрузка
1. В интерфейсе HydraRoute нажмите **«Загрузить по ссылке»**.  
2. Укажите ссылку на RAW-версию hydraroute-groups.json: `https://raw.githubusercontent.com/afroll/hydraroute-dns-rules/main/hydraroute-groups.json`
3. Можно использовать отдельные `.txt`-файлы (если будешь их добавлять) для подключения категорий по одной.  

---

## ℹ️ Примечания
- Домены третьего уровня и выше подхватываются автоматически (например, `google.com` → подцепятся `drive.google.com`).  
- Если сервис временно не нужен, его группу можно просто отключить в интерфейсе HydraRoute.  
- При обновлении списка доменов достаточно обновить JSON в репозитории.
 
