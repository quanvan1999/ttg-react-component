const theme = {
    light: {
        name: "Light Theme",
        color: {
            text: {
                primary: "#404040",
                secondary: "#575757",
                link: "#2F8DE3",
                visited: "#7B237B",
                disabled: "#A3A3A3"
            },
            fill: {
                primary: "#174091",
                secondary: "#212223",
                disabled: "#C3C3C3",
                success: "#0A842F",
                warning: "#FEBA00",
                danger: "#CC1D33",
                info: "#256EC2"
            },
            background: {
                primary: "#FFFFFF",
                secondary: "#F9F9F9"
            },
            border: {
                primary: "#E3E3E3"
            }
        },
        textSize: {
            small: "0.8rem",
            medium: "1rem",
            large: "1.2rem"
        },
        avatarSize: {
            small: "30px",
            medium: "36px",
            large: "42px"
        },
        weight: {
            light: 300,
            normal: 400,
            bold: 600
        },
        shadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
    },
    dark: {
        name: "Dark Theme",
        color: {
            text: {
                primary: "#E8DEC8",
                secondary: "#9E9FA1",
                link: "#0F90A8",
                visited: "#6A126A",
                disabled: "#646464"
            },
            fill: {
                primary: "#E8DEC8", //Antique Gold 500
                secondary: "#A59C87", //Antique Gold 300
                disabled: "#C3C3C3", 
                success: "#56C26A",
                warning: "#FFD54F",
                danger: "#ED323B",
                info: "#76D7EA"
            },
            background: {
                primary: "#212223", //Obsidian 900
                secondary: "#313233" //Pewter 800 
            },
            border: {
                primary: "#333333"
            }
        },
        textSize: {
            small: "0.8rem",
            medium: "1rem",
            large: "1.2rem"
        },
        avatarSize: {
            small: "30px",
            medium: "36px",
            large: "42px"
        },
        weight: {
            light: 300,
            normal: 400,
            bold: 500
        },
        shadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
    },
    custom: {
        name: "Custom Theme",
        color: {
            text: {
                primary: "#404040",
                secondary: "#575757",
                link: "#2F8DE3",
                visited: "#7B237B",
                disabled: "#A3A3A3"
            },
            fill: {
                primary: "#015A64",
                secondary: "#212223",
                disabled: "#C3C3C3",
                success: "#0A842F",
                warning: "#FFA000",
                danger: "#CC1D33",
                info: "#256EC2"
            },
            background: {
                primary: "#FFFFFF",
                secondary: "#E5E5E5"
            },
            border: {
                primary: "#CCCCCC"
            }
        },
        textSize: {
            small: "0.8rem",
            medium: "1rem",
            large: "1.2rem"
        },
        avatarSize: {
            small: "30px",
            medium: "36px",
            large: "42px"
        },
        weight: {
            light: 300,
            normal: 400,
            bold: 500
        },
        shadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
    }
}

export default theme