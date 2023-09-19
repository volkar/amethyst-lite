# Amethyst Lite

## Boilerplate for simple websites with jQuery and Tailwind.

![Preview](https://github.com/volkar/amethyst-lite/blob/main/amethyst-lite.jpg?raw=true)

Intended for small website's fast-development. For more complex websites, you'll for sure want Vue and stuff. But for its purpose it serves pretty well.

Included basic stuff such as mobile menu, typography (children of `.typo` class only), forms, header, sticky footer, humans.txt, print.css (with hiding header and footer for printing) and jQuery (yes, I know, but not all websites deserve Vue).

Anyway, it's easier to cutout unused stuff =)

### Tailwind and CSS

All base markup and repeated styles is written on CSS, Tailwind used only for local paddings/margins and such stuff. Also, in real development, Tailwind helps to copy/paste ready-to-use components from various online libraries. I find this way most optimal.

### Tailwind build

First of all, install tailwind and dependencies
```shell
npm install
```
There is node task `dev` for build tailwindcss styles (with watcher).

```shell
npm run dev
```

## Contact me

You always welcome to write me
- E-mail: sergey@volkar.ru
- Telegram: @sergeyvolkar
