import nicolaiText from "/text/Nicolai.txt?raw"
import robschText from "/text/ROBSCH.txt?raw"
import SubTText from "/text/Sub-T.txt?raw"
import ericsonText from "/text/Ericson.txt?raw"

export const words = [
    {text: 'sound'},
    {text: 'music'},
    {text: 'energy'},
]

export const artists = [
    {
        name: "DIOS:CURE",
        items: [
            {type: "image", src: "/images/DIOSCURE.jpg"},
            {type: "text", content: nicolaiText},
            {type: "video", src: "/videos/botanical-03.mp4"},
        ],
        links: [
            {imgPath: "/images/Instagram.png", label: "Instagram", url: "https://www.instagram.com/dioscure_music/"},
            {imgPath: "/images/SoundCloud.svg", label: "Soundcloud", url: "https://soundcloud.com/dioscure"},
            {
                imgPath: "/images/Spotify.svg.png",
                label: "Spotify",
                url: "https://open.spotify.com/artist/6QaBwqAKNWd5l2Ow2CjUqv?si=Kut6WxXmRtShv67eAHr1Aw"
            }
        ]
    },
    {
        name: "Robsch", items: [
            {type: "image", src: "/images/ROBSCHPress2.jpg"},
            {type: "text", content: robschText},
            {type: "video", src: "/videos/Robsch.mov"},
        ],
        links: [
            {imgPath: "/images/Instagram.png", label: "Instagram", url: "https://www.instagram.com/robsch_techno/"},
            {imgPath: "/images/SoundCloud.svg", label: "Soundcloud", url: "https://soundcloud.com/robschtechno"},
            {
                imgPath: "/images/Spotify.svg.png",
                label: "Spotify",
                url: "https://open.spotify.com/artist/0NvOMVLvYGiftyh7rWAU1G?si=iFIJn-WZRfmQCnkXCXAi_g"
            }
        ]
    },
    {
        name: "Ericson", items: [
            {type: "image", src: "/images/Ericson.JPG"},
            {type: "text", content: ericsonText}
        ],
        links: [
            {imgPath: "/images/Instagram.png", label: "Instagram", url: "https://www.instagram.com/ericson_music/"},
            {imgPath: "/images/SoundCloud.svg", label: "Soundcloud", url: "https://soundcloud.com/ericson_music"},
        ]
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
