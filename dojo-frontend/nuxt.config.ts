// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  ssr: true,
  compatibilityDate: "2024-08-28",
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
        {
          name: "title",
          content: "Dojo - Ваше место для мастерства языка",
        },
        {
          name: "description",
          content:
            "Dojo — Ваше место для мастерства языка. Овладейте японским алфавитом (Катаканой и Хираганой), грамотой и навыками чтения — все в одном месте.",
        },
      ],
    },
  },
});
