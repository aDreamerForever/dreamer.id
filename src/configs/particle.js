const particle = {
    particles: {
        number: {
            value: 20,
            density: {
                enable: true,
                value_area: 180,
            },
        },
        color: {
            value: "#3982B0",
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
            },
            polygon: {
                nb_sides: 5,
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#3982B0",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 4,
            direction: "none",
            random: true,
            straight: true,
            out_mode: "bounce",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },

    retina_detect: false,
};

export default particle;
