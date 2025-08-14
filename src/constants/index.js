//const Texts
import nicolaiText from "/text/Nicolai.txt?raw"
import robschText from "/text/ROBSCH.txt?raw"
import SubTText from "/text/Sub-T.txt?raw"
import ericsonText from "/text/Ericson.txt?raw"
//const images
const imgDIOSCURE = "./images/DIOSCURE.jpg"
const imgRobsch = "./images/ROBSCHPress2.jpg"
const imgEric = "./images/Ericson.jpg"
const imgSubT = "./images/Sub-T.jpeg"
//const videos
const vidDIOSCURE = "./videos/DIOSCURE.mp4"
const vidRobsch = "./videos/Robsch.mov"
const vidEricson = "./videos/Ericson.mp4"
const vidSubT = "./videos/SubT.mp4"
//const icons
const iconInstagram = "./images/Instagram/InstagramGlyphWhite.svg"
const iconSoundcloud = "./images/Soundcloud/Soundcloud-white.svg"
const iconSpotify = "./images/SpotifyLogo/SpotifyPrimaryLogoRGBWhite.png"
const iconYouTube = "./images/YouTube/YouTubelighticon.svg"

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
            }, {
                imgPath: iconYouTube,
                label: "YouTube",
                url: "https://www.youtube.com/watch?v=UHNEF-c1ayE"
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
                url: "https://www.youtube.com/watch?v=8TpB74xdjSE"
            }
        ]
    },
    {
        name: "Ericson", items: [
            {type: "image", src: imgEric},
            {type: "text", content: ericsonText},
            {type: "video", src: vidEricson}
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
            },
            {
                imgPath: iconYouTube,
                label: "YouTube",
                url: "https://www.youtube.com/watch?v=T3SpFhvyG5w"
            }
        ]
    },
    {
        name: "Sub-T", items: [
            {type: "image", src: imgSubT},
            {type: "text", content: SubTText},
            {type: "video", src: vidSubT}
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
            }, {
                imgPath: iconYouTube,
                label: "YouTube",
                url: "https://www.youtube.com/watch?v=EXzxuaAdBpg"
            }
        ]
    }

]

export const navLinks = [
    {
        name: "HomePage",   //Index
        link: "#hero",
    },
    {
        name: "Artist",
        link: "#work",
    },
    {
        name: "Impressum",    //Contact
        link: "#contact",
    },
]
