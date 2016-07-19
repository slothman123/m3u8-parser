{
  allowCache: true,
  discontinuityStarts: [],
  mediaGroups: {
    AUDIO: {
      aud1: {
        English: {
          autoselect: true,
          default: true,
          language: "eng",
          uri: "a1/prog_index.m3u8"
        }
      },
      aud2: {
        English: {
          autoselect: true,
          default: true,
          language: "eng",
          uri: "a2/prog_index.m3u8"
        }
      },
      aud3: {
        English: {
          autoselect: true,
          default: true,
          language: "eng",
          uri: "a3/prog_index.m3u8"
        }
      }
    },
    VIDEO: {},
    "CLOSED-CAPTIONS": {
      cc1: {
        English: {
          autoselect: true,
          default: true,
          language: "eng",
          instreamId: "CC1"
        }
      }
    },
    SUBTITLES: {
      sub1: {
        English: {
          autoselect: true,
          default: true,
          language: "eng",
          uri: 's1/eng/prog_index.m3u8'
        }
      }
    }
  },
  playlists: [{
    attributes: {
      "AVERAGE-BANDWIDTH": "2165224",
      BANDWIDTH: 2215219,
      CODECS: "avc1.640020,mp4a.40.2",
      RESOLUTION: {
        width: 960,
        height: 540
      },
      "FRAME-RATE": "59.940",
      "CLOSED-CAPTIONS": "cc1",
      AUDIO: "aud1",
      SUBTITLES: "sub1"
    },
    timeline: 0,
    "tags": [
      "#EXTM3U",
      "#EXT-X-VERSION:6",
      "#EXT-X-INDEPENDENT-SEGMENTS",
      "#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID=\"aud1\",LANGUAGE=\"eng\",NAME=\"English\",AUTOSELECT=YES,DEFAULT=YES,URI=\"a1/prog_index.m3u8\"",
      "#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID=\"aud2\",LANGUAGE=\"eng\",NAME=\"English\",AUTOSELECT=YES,DEFAULT=YES,URI=\"a2/prog_index.m3u8\"",
      "#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID=\"aud3\",LANGUAGE=\"eng\",NAME=\"English\",AUTOSELECT=YES,DEFAULT=YES,URI=\"a3/prog_index.m3u8\"",
      "#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID=\"sub1\",NAME=\"English\",LANGUAGE=\"eng\",DEFAULT=YES,AUTOSELECT=YES,FORCED=NO,URI=\"s1/eng/prog_index.m3u8\"",
      "#EXT-X-MEDIA:TYPE=CLOSED-CAPTIONS,GROUP-ID=\"cc1\",NAME=\"English\",LANGUAGE=\"eng\",DEFAULT=YES,AUTOSELECT=YES,INSTREAM-ID=\"CC1\"",
      "#EXT-X-I-FRAME-STREAM-INF:AVERAGE-BANDWIDTH=163198,BANDWIDTH=166942,CODECS=\"avc1.64002a\",RESOLUTION=1920x1080,URI=\"v6/iframe_index.m3u8\"",
      "#EXT-X-I-FRAME-STREAM-INF:AVERAGE-BANDWIDTH=131314,BANDWIDTH=139041,CODECS=\"avc1.640020\",RESOLUTION=1280x720,URI=\"v5/iframe_index.m3u8\"",
      "#EXT-X-I-FRAME-STREAM-INF:AVERAGE-BANDWIDTH=100233,BANDWIDTH=101724,CODECS=\"avc1.640020\",RESOLUTION=960x540,URI=\"v4/iframe_index.m3u8\"",
      "#EXT-X-I-FRAME-STREAM-INF:AVERAGE-BANDWIDTH=81002,BANDWIDTH=84112,CODECS=\"avc1.64001e\",RESOLUTION=768x432,URI=\"v3/iframe_index.m3u8\"",
      "#EXT-X-I-FRAME-STREAM-INF:AVERAGE-BANDWIDTH=64987,BANDWIDTH=65835,CODECS=\"avc1.64001e\",RESOLUTION=640x360,URI=\"v2/iframe_index.m3u8\"",
      "#EXT-X-I-FRAME-STREAM-INF:AVERAGE-BANDWIDTH=41547,BANDWIDTH=42106,CODECS=\"avc1.640015\",RESOLUTION=480x270,URI=\"v1/iframe_index.m3u8\"",
      "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=2165224,BANDWIDTH=2215219,CODECS=\"avc1.640020,mp4a.40.2\",RESOLUTION=960x540,FRAME-RATE=59.940,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud1\",SUBTITLES=\"sub1\""
    ],
    uri: "v4/prog_index.m3u8"
  }, 

  {
    "attributes": {
      "AUDIO": "aud1",
        "AVERAGE-BANDWIDTH": "7962844",
        "BANDWIDTH": 7976430,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.64002a,mp4a.40.2",
        "FRAME-RATE": "59.940",
        "RESOLUTION": {
          "height": 1080,
          "width": 1920
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=7962844,BANDWIDTH=7976430,CODECS=\"avc1.64002a,mp4a.40.2\",RESOLUTION=1920x1080,FRAME-RATE=59.940,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud1\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v8/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud1",
        "AVERAGE-BANDWIDTH": "6165024",
        "BANDWIDTH": 6181885,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.64002a,mp4a.40.2",
        "FRAME-RATE": "59.940",
        "RESOLUTION": {
          "height": 1080,
          "width": 1920
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=6165024,BANDWIDTH=6181885,CODECS=\"avc1.64002a,mp4a.40.2\",RESOLUTION=1920x1080,FRAME-RATE=59.940,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud1\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v7/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud1",
        "AVERAGE-BANDWIDTH": "4664459",
        "BANDWIDTH": 4682666,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.64002a,mp4a.40.2",
        "FRAME-RATE": "59.940",
        "RESOLUTION": {
          "height": 1080,
          "width": 1920
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=4664459,BANDWIDTH=4682666,CODECS=\"avc1.64002a,mp4a.40.2\",RESOLUTION=1920x1080,FRAME-RATE=59.940,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud1\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v6/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud1",
        "AVERAGE-BANDWIDTH": "3164759",
        "BANDWIDTH": 3170746,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.640020,mp4a.40.2",
        "FRAME-RATE": "59.940",
        "RESOLUTION": {
          "height": 720,
          "width": 1280
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=3164759,BANDWIDTH=3170746,CODECS=\"avc1.640020,mp4a.40.2\",RESOLUTION=1280x720,FRAME-RATE=59.940,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud1\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v5/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud1",
        "AVERAGE-BANDWIDTH": "1262552",
        "BANDWIDTH": 1276223,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.64001e,mp4a.40.2",
        "FRAME-RATE": "29.970",
        "RESOLUTION": {
          "height": 432,
          "width": 768
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=1262552,BANDWIDTH=1276223,CODECS=\"avc1.64001e,mp4a.40.2\",RESOLUTION=768x432,FRAME-RATE=29.970,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud1\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v3/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud1",
        "AVERAGE-BANDWIDTH": "893243",
        "BANDWIDTH": 904744,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.64001e,mp4a.40.2",
        "FRAME-RATE": "29.970",
        "RESOLUTION": {
          "height": 360,
          "width": 640
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=893243,BANDWIDTH=904744,CODECS=\"avc1.64001e,mp4a.40.2\",RESOLUTION=640x360,FRAME-RATE=29.970,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud1\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v2/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud1",
        "AVERAGE-BANDWIDTH": "527673",
        "BANDWIDTH": 538201,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.640015,mp4a.40.2",
        "FRAME-RATE": "29.970",
        "RESOLUTION": {
          "height": 270,
          "width": 480
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=527673,BANDWIDTH=538201,CODECS=\"avc1.640015,mp4a.40.2\",RESOLUTION=480x270,FRAME-RATE=29.970,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud1\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v1/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud2",
        "AVERAGE-BANDWIDTH": "2390334",
        "BANDWIDTH": 2440329,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.640020,ac-3",
        "FRAME-RATE": "59.940",
        "RESOLUTION": {
          "height": 540,
          "width": 960
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=2390334,BANDWIDTH=2440329,CODECS=\"avc1.640020,ac-3\",RESOLUTION=960x540,FRAME-RATE=59.940,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud2\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v4/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud2",
        "AVERAGE-BANDWIDTH": "8187954",
        "BANDWIDTH": 8201540,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.64002a,ac-3",
        "FRAME-RATE": "59.940",
        "RESOLUTION": {
          "height": 1080,
          "width": 1920
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=8187954,BANDWIDTH=8201540,CODECS=\"avc1.64002a,ac-3\",RESOLUTION=1920x1080,FRAME-RATE=59.940,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud2\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v8/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud2",
        "AVERAGE-BANDWIDTH": "6390134",
        "BANDWIDTH": 6406995,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.64002a,ac-3",
        "FRAME-RATE": "59.940",
        "RESOLUTION": {
          "height": 1080,
          "width": 1920
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=6390134,BANDWIDTH=6406995,CODECS=\"avc1.64002a,ac-3\",RESOLUTION=1920x1080,FRAME-RATE=59.940,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud2\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v7/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud2",
        "AVERAGE-BANDWIDTH": "4889569",
        "BANDWIDTH": 4907776,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.64002a,ac-3",
        "FRAME-RATE": "59.940",
        "RESOLUTION": {
          "height": 1080,
          "width": 1920
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=4889569,BANDWIDTH=4907776,CODECS=\"avc1.64002a,ac-3\",RESOLUTION=1920x1080,FRAME-RATE=59.940,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud2\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v6/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud2",
        "AVERAGE-BANDWIDTH": "3389869",
        "BANDWIDTH": 3395856,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.640020,ac-3",
        "FRAME-RATE": "59.940",
        "RESOLUTION": {
          "height": 720,
          "width": 1280
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=3389869,BANDWIDTH=3395856,CODECS=\"avc1.640020,ac-3\",RESOLUTION=1280x720,FRAME-RATE=59.940,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud2\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v5/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud2",
        "AVERAGE-BANDWIDTH": "1487662",
        "BANDWIDTH": 1501333,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.64001e,ac-3",
        "FRAME-RATE": "29.970",
        "RESOLUTION": {
          "height": 432,
          "width": 768
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=1487662,BANDWIDTH=1501333,CODECS=\"avc1.64001e,ac-3\",RESOLUTION=768x432,FRAME-RATE=29.970,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud2\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v3/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud2",
        "AVERAGE-BANDWIDTH": "1118353",
        "BANDWIDTH": 1129854,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.64001e,ac-3",
        "FRAME-RATE": "29.970",
        "RESOLUTION": {
          "height": 360,
          "width": 640
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=1118353,BANDWIDTH=1129854,CODECS=\"avc1.64001e,ac-3\",RESOLUTION=640x360,FRAME-RATE=29.970,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud2\",SUBTITLES=\"sub1\""
      ],

      "timeline": 0,
      "uri": "v2/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud2",
        "AVERAGE-BANDWIDTH": "752783",
        "BANDWIDTH": 763311,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.640015,ac-3",
        "FRAME-RATE": "29.970",
        "RESOLUTION": {
          "height": 270,
          "width": 480
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=752783,BANDWIDTH=763311,CODECS=\"avc1.640015,ac-3\",RESOLUTION=480x270,FRAME-RATE=29.970,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud2\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v1/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud3",
        "AVERAGE-BANDWIDTH": "2198334",
        "BANDWIDTH": 2248329,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.640020,ec-3",
        "FRAME-RATE": "59.940",
        "RESOLUTION": {
          "height": 540,
          "width": 960
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=2198334,BANDWIDTH=2248329,CODECS=\"avc1.640020,ec-3\",RESOLUTION=960x540,FRAME-RATE=59.940,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud3\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v4/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud3",
        "AVERAGE-BANDWIDTH": "7995954",
        "BANDWIDTH": 8009540,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.64002a,ec-3",
        "FRAME-RATE": "59.940",
        "RESOLUTION": {
          "height": 1080,
          "width": 1920
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=7995954,BANDWIDTH=8009540,CODECS=\"avc1.64002a,ec-3\",RESOLUTION=1920x1080,FRAME-RATE=59.940,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud3\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v8/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud3",
        "AVERAGE-BANDWIDTH": "6198134",
        "BANDWIDTH": 6214995,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.64002a,ec-3",
        "FRAME-RATE": "59.940",
        "RESOLUTION": {
          "height": 1080,
          "width": 1920
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=6198134,BANDWIDTH=6214995,CODECS=\"avc1.64002a,ec-3\",RESOLUTION=1920x1080,FRAME-RATE=59.940,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud3\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v7/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud3",
        "AVERAGE-BANDWIDTH": "4697569",
        "BANDWIDTH": 4715776,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.64002a,ec-3",
        "FRAME-RATE": "59.940",
        "RESOLUTION": {
          "height": 1080,
          "width": 1920
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=4697569,BANDWIDTH=4715776,CODECS=\"avc1.64002a,ec-3\",RESOLUTION=1920x1080,FRAME-RATE=59.940,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud3\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v6/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud3",
        "AVERAGE-BANDWIDTH": "3197869",
        "BANDWIDTH": 3203856,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.640020,ec-3",
        "FRAME-RATE": "59.940",
        "RESOLUTION": {
          "height": 720,
          "width": 1280
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=3197869,BANDWIDTH=3203856,CODECS=\"avc1.640020,ec-3\",RESOLUTION=1280x720,FRAME-RATE=59.940,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud3\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v5/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud3",
        "AVERAGE-BANDWIDTH": "1295662",
        "BANDWIDTH": 1309333,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.64001e,ec-3",
        "FRAME-RATE": "29.970",
        "RESOLUTION": {
          "height": 432,
          "width": 768
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=1295662,BANDWIDTH=1309333,CODECS=\"avc1.64001e,ec-3\",RESOLUTION=768x432,FRAME-RATE=29.970,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud3\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v3/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud3",
        "AVERAGE-BANDWIDTH": "926353",
        "BANDWIDTH": 937854,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.64001e,ec-3",
        "FRAME-RATE": "29.970",
        "RESOLUTION": {
          "height": 360,
          "width": 640
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=926353,BANDWIDTH=937854,CODECS=\"avc1.64001e,ec-3\",RESOLUTION=640x360,FRAME-RATE=29.970,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud3\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v2/prog_index.m3u8"
    },
    {
      "attributes": {
        "AUDIO": "aud3",
        "AVERAGE-BANDWIDTH": "560783",
        "BANDWIDTH": 571311,
        "CLOSED-CAPTIONS": "cc1",
        "CODECS": "avc1.640015,ec-3",
        "FRAME-RATE": "29.970",
        "RESOLUTION": {
          "height": 270,
          "width": 480
        },
        "SUBTITLES": "sub1"
      },
      "tags": [
        "#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=560783,BANDWIDTH=571311,CODECS=\"avc1.640015,ec-3\",RESOLUTION=480x270,FRAME-RATE=29.970,CLOSED-CAPTIONS=\"cc1\",AUDIO=\"aud3\",SUBTITLES=\"sub1\""
      ],
      "timeline": 0,
      "uri": "v1/prog_index.m3u8"
    }]
}
