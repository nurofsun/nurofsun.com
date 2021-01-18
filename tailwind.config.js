console.log(process.env.NODE_ENV);
module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === "production" ? true : false,
        content:
        process.env.NODE_ENV === "production"
        ? ["./layouts/**/*.html", "./src/js/*.js"]
        : [],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        'pre code::before': {
                            content: 'none',
                            display: 'none',
                            height: '0px',
                            width: '0px'
                        },
                        'pre code::after': {
                            content: 'none',
                            display: 'none',
                            height: '0px',
                            width: '0px'
                        },
                        '.highlight-extended pre': {
                            marginTop: '0px !important',
                            marginBottom: '0px !important',
                        }
                    }
                },
                lg: {
                    css: {
                        'pre code::before': {
                            content: 'none',
                            display: 'none',
                            height: '0px',
                            width: '0px'
                        },
                        'pre code::after': {
                            content: 'none',
                            display: 'none',
                            height: '0px',
                            width: '0px'
                        },
                        '.highlight-extended pre': {
                            marginTop: '0px !important',
                            marginBottom: '0px !important'
                        }
                    }
                },
                sm: {
                    css: {
                        'pre code::before': {
                            content: 'none',
                            display: 'none',
                            height: '0px',
                            width: '0px'
                        },
                        'pre code::after': {
                            content: 'none',
                            display: 'none',
                            height: '0px',
                            width: '0px'
                        },
                        '.highlight-extended pre': {
                            marginTop: '0px !important',
                            marginBottom: '0px !important'
                        }
                    }
                }
            }),
            colors: {
                "html-brand": "#e34f26",
                "sql-brand": "#00758f",
                "laravel-brand": "#f55247",
                "wordpress-brand": "#0087be"
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
