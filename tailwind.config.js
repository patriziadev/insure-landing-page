/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.jsx", "./components/**/*.jsx"],
    theme: {
        colors: {
            // Grayish Blue
            powderBlue: "hsl(216, 30%, 68%)",
            // Dark Violet
            darkPurple: "hsl(256, 26%, 20%)",
            // Dark Grayish Violet
            taupeGray: "hsl(273, 4%, 51%)",
            // Very Light Gray
            seasalt: "hsl(0, 0%, 98%)",
            // Very Dark Violet
            raisinBlack: "hsl(270, 9%, 17%)",
        },
        backgroundSize: {
            bgReduce: "26%",
        },
        extend: {
            fontFamily: {
                karla: ["Karla", "sans-serif"],
                dm: ["DM Serif Display", "serif"],
            },
            backgroundImage: {
                bgIntroDesktop: "url('../images/image-intro-desktop.jpg')",
                bgIntroMobile: "url('../images/image-intro-mobile.jpg')",
                bgHeaderLeftDesktop:
                    "url('../images/bg-pattern-intro-left-desktop.svg')",
                bgHeaderLeftMobile:
                    "url('../images/bg-pattern-intro-left-mobile.svg')",
                bgHeaderRightDesktop:
                    "url('../images/bg-pattern-intro-right-desktop.svg')",
                bgHeaderRightMobile:
                    "url('../images/bg-pattern-intro-right-mobile.svg')",
                bgFooterDesktop:
                    "url('../images/bg-pattern-footer-desktop.svg')",
                bgFooterMobile: "url('../images/bg-pattern-footer-mobile.svg')",
            },
        },
    },
    plugins: [],
};
