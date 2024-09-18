/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["ui-sans-serif", "system-ui"],
            serif: ["ui-serif", "Georgia"],
            mono: ["ui-monospace", "SFMono-Regular"],
            DM: ["DM Sans", "sans-serif"],
            Anton: ["Anton", "sans-serif"],
            Jost: ["Jost", "sans-serif"],
        },
        extend: {
            colors: {
                vyadhColor: {
                    100: "#03002A",
                },
            },
            gridTemplateColumns: {
                custom: "repeat(3,max-content) 20vw",
            },
        },
    },
    plugins: [],
};
