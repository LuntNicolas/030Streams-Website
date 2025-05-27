import nicolaiText from "/text/Nicolai.txt?raw"
import robschText from "/text/ROBSCH.txt?raw"
import SubTText from "/text/Sub-T.txt?raw"
import ericsonText from "/text/Ericson.txt?raw"

const instagram = "/images/Instagram/Instagram_Glyph_White.svg"
const soundcloud = "/images/Soundcloud/Soundcloud-white.svg"
const spotify = "/images/SpotifyLogo/Spotify_Primary_Logo_RGB_White.png"

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
            {type: "video", src: "/videos/DIOSCURE.mp4"},
        ],
        links: [
            {
                imgPath: instagram,
                label: "Instagram",
                url: "https://www.instagram.com/dioscure_music/"
            },
            {
                imgPath: soundcloud,
                label: "Soundcloud",
                url: "https://soundcloud.com/dioscure"
            },
            {
                imgPath: spotify,
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
            {
                imgPath: instagram,
                label: "Instagram",
                url: "https://www.instagram.com/robsch_techno/"
            },
            {
                imgPath: soundcloud,
                label: "Soundcloud",
                url: "https://soundcloud.com/robschtechno"
            },
            {
                imgPath: spotify,
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
            {
                imgPath: instagram,
                label: "Instagram",
                url: "https://www.instagram.com/ericson_music/"
            },
            {
                imgPath: soundcloud,
                label: "Soundcloud",
                url: "https://soundcloud.com/ericson_music"
            },
            {
                imgPath: spotify,
                label: "Spotify",
                url: "https://open.spotify.com/artist/59v9zXObOlNsW2VZa65l06?si=djw1JYdSQ_u46AKEkmtYPQ"
            }
        ]
    },
    {
        name: "Sub-T", items: [
            {type: "image", src: "/images/Sub-T.jpeg"},
            {type: "text", content: SubTText}
        ],
        links: [
            {
                imgPath: instagram,
                label: "Instagram",
                url: "https://www.instagram.com/sub_t_official/"
            },
            {
                imgPath: soundcloud,
                label: "Soundcloud",
                url: "https://soundcloud.com/thereal-sub-t"
            },
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
