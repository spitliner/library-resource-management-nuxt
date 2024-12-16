// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxt/ui'],

    runtimeConfig: {
        key_pass:                           String(process.env.KEY_PASS),
        db_user:                            String(process.env.DB_USERNAME),
        db_user_password:                   String(process.env.DB_PASSWORD),
        db_name:                            String(process.env.DB_NAME),
        db_host:                            String(process.env.DB_HOST),
    },

    devtools: {
        timeline: {
            enabled: true,
        },
    },

    css: [
        '~/assets/scss/global.scss',
    ],
})