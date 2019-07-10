module.exports = (api) => {
    api.cache(true)

    const presets = ["next/babel"]

    const plugins = [
        [
            "module-resolver",
            {
                alias: {
                    components: "./components",
                    data: "./data",
                    layouts: "./layouts",
                    pages: "./pages",
                    styles: "./styles",
                },
            },
        ],
        ["wrap-in-js", { extensions: ["scss$"] }],
    ]

    return {
        presets,
        plugins,
    }
}
