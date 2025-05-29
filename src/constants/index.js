//import Texts
import nicolaiText from "/030Streams-Website/text/Nicolai.txt?raw"
import robschText from "/030Streams-Website/text/ROBSCH.txt?raw"
import SubTText from "/030Streams-Website/text/Sub-T.txt?raw"
import ericsonText from "/030Streams-Website/text/Ericson.txt?raw"
//import images
import imgDIOSCURE from "/030Streams-Website/images/DIOSCURE.jpg"
import imgRobsch from "/030Streams-Website/images/ROBSCHPress2.jpg"
import imgEric from "/030Streams-Website/images/Ericson.jpg"
import imgSubT from "/030Streams-Website/images/Sub-T.jpeg"
//import videos
import vidDIOSCURE from "/030Streams-Website/videos/DIOSCURE.mp4"
import vidRobsch from "/030Streams-Website/videos/Robsch.mov"
//import icons
const iconInstagram = "/030Streams-Website/images/Instagram/Instagram_Glyph_White.svg"
const iconSoundcloud = "/030Streams-Website/images/Soundcloud/Soundcloud-white.svg"
const iconSpotify = "/030Streams-Website/images/SpotifyLogo/Spotify_Primary_Logo_RGB_White.png"
const iconYouTube = "/030Streams-Website/images/YouTube/YouTube_light_icon.svg"

export const words = [
    {text: 'sound'},
    {text: 'music'},
    {text: 'energy'},
]

export const artists = [
    {
        name: "DIOS:CURE",
        items: [
            {type: "image", src: imgDIOSCURE},
            {type: "text", content: nicolaiText},
            {type: "video", src: vidDIOSCURE},
        ],
        links: [
            {
                imgPath: iconInstagram,
                label: "Instagram",
                url: "https://www.instagram.com/dioscure_music/"
            },
            {
                imgPath: iconSoundcloud,
                label: "Soundcloud",
                url: "https://soundcloud.com/dioscure"
            },
            {
                imgPath: iconSpotify,
                label: "Spotify",
                url: "https://open.spotify.com/artist/6QaBwqAKNWd5l2Ow2CjUqv?si=Kut6WxXmRtShv67eAHr1Aw"
            }
        ]
    },
    {
        name: "Robsch", items: [
            {type: "image", src: imgRobsch},
            {type: "text", content: robschText},
            {type: "video", src: vidRobsch},
        ],
        links: [
            {
                imgPath: iconInstagram,
                label: "Instagram",
                url: "https://www.instagram.com/robsch_techno/"
            },
            {
                imgPath: iconSoundcloud,
                label: "Soundcloud",
                url: "https://soundcloud.com/robschtechno"
            },
            {
                imgPath: iconSpotify,
                label: "Spotify",
                url: "https://open.spotify.com/artist/0NvOMVLvYGiftyh7rWAU1G?si=iFIJn-WZRfmQCnkXCXAi_g"
            },
            {
                imgPath: iconYouTube,
                label: "YouTube",
                url: "https://www.youtube.com/watch?v=mK9nD6DWKxA&t=1140s"
            }
        ]
    },
    {
        name: "Ericson", items: [
            {type: "image", src: imgEric},
            {type: "text", content: ericsonText}
        ],
        links: [
            {
                imgPath: iconInstagram,
                label: "Instagram",
                url: "https://www.instagram.com/ericson_music/"
            },
            {
                imgPath: iconSoundcloud,
                label: "Soundcloud",
                url: "https://soundcloud.com/ericson_music"
            },
            {
                imgPath: iconSpotify,
                label: "Spotify",
                url: "https://open.spotify.com/artist/59v9zXObOlNsW2VZa65l06?si=djw1JYdSQ_u46AKEkmtYPQ"
            }
        ]
    },
    {
        name: "Sub-T", items: [
            {type: "image", src: imgSubT},
            {type: "text", content: SubTText}
        ],
        links: [
            {
                imgPath: iconInstagram,
                label: "Instagram",
                url: "https://www.instagram.com/sub_t_official/"
            },
            {
                imgPath: iconSoundcloud,
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
