module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'rebridge',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Perfect collaboration tool for investor and architect'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    css: [
        '~/assets/styles/app.styl',
        '~/assets/styles/main.css'
    ],
    plugins: ['~plugins/vuetify'],
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extractCSS: true,
        vendor: [
            'vuetify'
        ],
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
