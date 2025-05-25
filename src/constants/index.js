import nicolaiText from "/text/Nicolai.txt?raw"
import robschText from "/text/ROBSCH.txt?raw"
import SubTText from "/text/Sub-T.txt?raw"
import ericsonText from "/text/Ericson.txt?raw"

export const words = [
    {text: 'sound'},
    {text: 'music'},
    {text: 'energy'},
]

export const textures = [
    {type: "image", src: "/images/DIOSCURE.jpg"},
    {
        type: "text",
        content: nicolaiText
    },
    {type: "video", src: "/videos/botanical-03.mp4"},
    {type: "image", src: "/images/ROBSCHPress2.jpg"},
    {
        type: "text",
        content: robschText
    },
    {type: "video", src: "/videos/Robsch.mov"},
    {type: "image", src: "/images/Ericson.JPG"},
    {
        type: "text", content: ericsonText
    }
]

export const navLinks = [
    {
        name: "Index",
        link: "#hero",
    },
    {
        name: "Artist",
        link: "#work",
    },
    {
        name: "Contact",
        link: "#contact",
    },
]
