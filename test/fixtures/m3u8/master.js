{
  "allowCache": true,
  "playlists": [
    {
      "attributes": {
        "PROGRAM-ID": 1,
        "BANDWIDTH": 240000,
        "RESOLUTION": {
          "width": 396,
          "height": 224
        }
      },
      "tags": [
        "# A simple master playlist with multiple variant streams",
        "#EXTM3U",
        "#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=240000,RESOLUTION=396x224"
      ],
      "timeline": 0,
      "uri": "media.m3u8"
    },
    {
      "attributes": {
        "PROGRAM-ID": 1,
        "BANDWIDTH": 40000
      },
      "tags": [
        "#EXT-X-STREAM-INF:PROGRAM-ID=1, BANDWIDTH=40000"
      ],
      "timeline": 0,
      "uri": "media1.m3u8"
    },
    {
      "attributes": {
        "PROGRAM-ID": 1,
        "BANDWIDTH": 440000,
        "RESOLUTION": {
          "width": 396,
          "height": 224
        }
      },
      "tags": [
        "#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=440000,RESOLUTION=396x224"
      ],
      "timeline": 0,
      "uri": "media2.m3u8"
    },
    {
      "attributes": {
        "PROGRAM-ID": 1,
        "BANDWIDTH": 1928000,
        "RESOLUTION": {
          "width": 960,
          "height": 540
        }
      },
      "tags": [
        "#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=1928000,RESOLUTION=960x540"
      ],
      "timeline": 0,
      "uri": "media3.m3u8"
    }
  ],
  "discontinuityStarts": [],
  "mediaGroups": {
    "VIDEO": {},
    "AUDIO": {},
    "CLOSED-CAPTIONS": {},
    "SUBTITLES": {}
  }
}
