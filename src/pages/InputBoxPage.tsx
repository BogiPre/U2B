import { createSignal, onCleanup } from "solid-js";
import axios from "axios";

// YouTube API fetch function
const fetchYouTubeAPI: any = async (givenUrl: string) => {
    const playlistId = givenUrl.slice(givenUrl.indexOf("playlist?list=") + "playlist?list=".length);
    const videoId = givenUrl.slice(givenUrl.indexOf("watch?v=") + "watch?v=".length);
    
    if (givenUrl.includes("playlist?list=")) {
        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/playlist',
            params: {
                id: playlistId
            },
            headers: {
                'X-RapidAPI-Key': 'c7ab3deda8msh2451a1693896b23p1a6f98jsnab2367e95718',
                'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
            }
        };
        
        try {
            const response = await axios.request(options);
            console.log(response.data);
            response.data.data.forEach((element: any) => {
                fetchYouTubeAPI("https://www.youtube.com/watch?v=" + element.videoId);
            });
        } catch (error) {
            console.error(error);
        }
        return {};
    }

    const options = {
    method: 'GET',
    url: 'https://yt-api.p.rapidapi.com/dl',
    params: {id: videoId},
    headers: {
        'X-RapidAPI-Key': 'c7ab3deda8msh2451a1693896b23p1a6f98jsnab2367e95718',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        const url = response.data.formats[1].url;
        window.open(url, "_blank");
    } catch (error) {
        console.error(error);
    }

}

// Your component
export default function InputBoxPage() {
    const [inputValue, setInputValue] = createSignal("");
    const [apiResponse, setApiResponse] = createSignal(null);

    const handleClick = async () => {
        const result = await fetchYouTubeAPI(inputValue());
        setApiResponse(result);
    };

    return (
        <div class="flex items-center justify-center h-full w-full flex-col">
        <h1 class="text-4xl mb-4">video or playlist url</h1>
        <input
            class="border-2 border-gray-300 p-2 rounded-md"
            type="text"
            value={inputValue()}
            onInput={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleClick}>Fetch from YouTube API</button>
        <p class="mt-4">You typed: {inputValue()}</p>
        {apiResponse() && <pre>{JSON.stringify(apiResponse(), null, 2)}</pre>}
        </div>
    );
}

[
    {
      "itag": 17,
      "url": "https://rr3---sn-4g5edndy.googlevideo.com/videoplayback?expire=1686167386&amp;ei=-oqAZPrCJuSXx_APjJSrkAg&amp;ip=2a01%3A4f8%3Ac012%3A39be%3A%3A1&amp;id=o-AI0Q9MC5R2Zh0BHwJg0HJ7vAkCG5AjYW4Pm85eoMbc6R&amp;itag=17&amp;source=youtube&amp;requiressl=yes&amp;mh=B4&amp;mm=31%2C26&amp;mn=sn-4g5edndy%2Csn-f5f7kn7z&amp;ms=au%2Conr&amp;mv=m&amp;mvi=3&amp;pl=52&amp;initcwndbps=540000&amp;spc=qEK7B4RA6dlnci3y87ILGRhc4mufpNk&amp;vprv=1&amp;svpuc=1&amp;mime=video%2F3gpp&amp;gir=yes&amp;clen=25765483&amp;dur=3002.247&amp;lmt=1611661300509266&amp;mt=1686145281&amp;fvip=5&amp;fexp=24007246%2C24363391&amp;c=ANDROID&amp;txp=6211224&amp;sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&amp;sig=AOq0QJ8wRAIgPrGWIV1W7oJMT02FABlpjiIoinRc1x9AQY083clbEQYCIE4tloCcCsRyGCOPMQTW0CzSgaZaBy44vG24nvmOiAnB&amp;lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&amp;lsig=AG3C_xAwRAIgDEoko4cmesRMU3AJNdYrsT84akyyFePX1tlCQosnPQQCIGXTWHe5mxD95EUbozZYriz2_bZGTjqCD4GtlUb81IlZ",
      "mimeType": "video/3gpp; codecs=\"mp4v.20.3, mp4a.40.2\"",
      "bitrate": 68659,
      "width": 176,
      "height": 144,
      "lastModified": "1611661300509266",
      "contentLength": "25765483",
      "quality": "small",
      "fps": 8,
      "qualityLabel": "144p",
      "projectionType": "RECTANGULAR",
      "averageBitrate": 68656,
      "audioQuality": "AUDIO_QUALITY_LOW",
      "approxDurationMs": "3002247",
      "audioSampleRate": "22050",
      "audioChannels": 1
    },
    {
      "itag": 18,
      "url": "https://rr3---sn-4g5edndy.googlevideo.com/videoplayback?expire=1686167386&amp;ei=-oqAZPrCJuSXx_APjJSrkAg&amp;ip=2a01%3A4f8%3Ac012%3A39be%3A%3A1&amp;id=o-AI0Q9MC5R2Zh0BHwJg0HJ7vAkCG5AjYW4Pm85eoMbc6R&amp;itag=18&amp;source=youtube&amp;requiressl=yes&amp;mh=B4&amp;mm=31%2C26&amp;mn=sn-4g5edndy%2Csn-f5f7kn7z&amp;ms=au%2Conr&amp;mv=m&amp;mvi=3&amp;pl=52&amp;initcwndbps=540000&amp;spc=qEK7B4RA6dlnci3y87ILGRhc4mufpNk&amp;vprv=1&amp;svpuc=1&amp;mime=video%2Fmp4&amp;cnr=14&amp;ratebypass=yes&amp;dur=3002.200&amp;lmt=1637056860224516&amp;mt=1686145281&amp;fvip=5&amp;fexp=24007246%2C24363391&amp;c=ANDROID&amp;txp=6218224&amp;sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&amp;sig=AOq0QJ8wRAIgckmAEHupl_1n0oGABRkqE65gBqsvl9AD8EymIAKFPuICIG1l_JqoLhexzkJNMCaJw4JSailFn-893PJmvqpqtX5p&amp;lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&amp;lsig=AG3C_xAwRAIgDEoko4cmesRMU3AJNdYrsT84akyyFePX1tlCQosnPQQCIGXTWHe5mxD95EUbozZYriz2_bZGTjqCD4GtlUb81IlZ",
      "mimeType": "video/mp4; codecs=\"avc1.42001E, mp4a.40.2\"",
      "bitrate": 315372,
      "width": 640,
      "height": 360,
      "lastModified": "1637056860224516",
      "quality": "medium",
      "fps": 30,
      "qualityLabel": "360p",
      "projectionType": "RECTANGULAR",
      "audioQuality": "AUDIO_QUALITY_LOW",
      "approxDurationMs": "3002200",
      "audioSampleRate": "44100",
      "audioChannels": 2
    },
    {
      "itag": 22,
      "url": "https://rr3---sn-4g5edndy.googlevideo.com/videoplayback?expire=1686167386&amp;ei=-oqAZPrCJuSXx_APjJSrkAg&amp;ip=2a01%3A4f8%3Ac012%3A39be%3A%3A1&amp;id=o-AI0Q9MC5R2Zh0BHwJg0HJ7vAkCG5AjYW4Pm85eoMbc6R&amp;itag=22&amp;source=youtube&amp;requiressl=yes&amp;mh=B4&amp;mm=31%2C26&amp;mn=sn-4g5edndy%2Csn-f5f7kn7z&amp;ms=au%2Conr&amp;mv=m&amp;mvi=3&amp;pl=52&amp;initcwndbps=540000&amp;spc=qEK7B4RA6dlnci3y87ILGRhc4mufpNk&amp;vprv=1&amp;svpuc=1&amp;mime=video%2Fmp4&amp;cnr=14&amp;ratebypass=yes&amp;dur=3002.200&amp;lmt=1611609523769538&amp;mt=1686145281&amp;fvip=5&amp;fexp=24007246%2C24363391&amp;c=ANDROID&amp;txp=6211222&amp;sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&amp;sig=AOq0QJ8wRgIhAIywek289f98p-8G7Hvk8_HDcSVOnmBzl5Nw5_KEkda3AiEA8Y0JWnNvKuQpr1Z7XkE1VBaM3Dnp6N_Z-p5RPkQdqws%3D&amp;lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&amp;lsig=AG3C_xAwRAIgDEoko4cmesRMU3AJNdYrsT84akyyFePX1tlCQosnPQQCIGXTWHe5mxD95EUbozZYriz2_bZGTjqCD4GtlUb81IlZ",
      "mimeType": "video/mp4; codecs=\"avc1.64001F, mp4a.40.2\"",
      "bitrate": 725551,
      "width": 1280,
      "height": 720,
      "lastModified": "1611609523769538",
      "quality": "hd720",
      "fps": 30,
      "qualityLabel": "720p",
      "projectionType": "RECTANGULAR",
      "audioQuality": "AUDIO_QUALITY_MEDIUM",
      "approxDurationMs": "3002200",
      "audioSampleRate": "44100",
      "audioChannels": 2
    }
  ]