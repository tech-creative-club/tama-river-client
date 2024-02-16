import SummaryCard from "@/types/SummaryCardType";

const fakeData = [
  {
    "title": "ソフトボール大会",
    "sport": [
      {
        "name": "テニス"
      },
      {
        "name": "野球"
      },
      {
        "name": "テニス"
      }
    ],
    "tag": [
      {
        "name": "視覚・聴覚障害"
      },
      {
        "name": "視覚・聴覚障害"
      }
    ],
    "date": "2024-01-08T11:20:04.369753",
    "url": "http://sato.jp/",
    "image_url": "http://www.hashimoto.com/",
    "location": {
      "name": "千塚",
      "address": "栃木県川崎市宮前区白金台18丁目1番8号 鍛冶ケ沢クレスト468",
      "capacity": 76
    }
  },
  {
    "title": "地域づくりサッカー",
    "sport": [
      {
        "name": "サッカー"
      },
      {
        "name": "野球"
      },
      {
        "name": "テニス"
      }
    ],
    "tag": [
      {
        "name": "精神障害"
      },
      {
        "name": "精神障害"
      },
      {
        "name": "発達障害"
      }
    ],
    "date": "2024-02-01T02:48:11.887165",
    "url": "https://ito.com/",
    "image_url": "http://www.kimura.net/",
    "location": {
      "name": "脚折",
      "address": "群馬県大網白里市勝どき11丁目8番2号",
      "capacity": 80
    }
  },
  {
    "title": "野球の試合",
    "sport": [
      {
        "name": "野球"
      },
      {
        "name": "サッカー"
      },
      {
        "name": "野球"
      }
    ],
    "tag": [
      {
        "name": "視覚・聴覚障害"
      },
      {
        "name": "精神障害"
      }
    ],
    "date": "2024-01-06T20:19:00.012703",
    "url": "http://kobayashi.org/",
    "image_url": "https://www.abe.org/",
    "location": {
      "name": "戸塚町",
      "address": "奈良県横浜市保土ケ谷区方京36丁目6番1号",
      "capacity": 96
    }
  },
  {
    "title": "ソフトボール大会",
    "sport": [
      {
        "name": "テニス"
      },
      {
        "name": "サッカー"
      }
    ],
    "tag": [
      {
        "name": "身体障害"
      }
    ],
    "date": "2024-02-16T06:11:42.040913",
    "url": "https://suzuki.jp/",
    "image_url": "http://www.ogawa.com/",
    "location": {
      "name": "鍛冶ケ沢",
      "address": "岐阜県川崎市幸区橋場21丁目6番18号 元浅草シティ768",
      "capacity": 36
    }
  },
  {
    "title": "みんなでボッチャ！",
    "sport": [
      {
        "name": "サッカー"
      },
      {
        "name": "サッカー"
      }
    ],
    "tag": [
      {
        "name": "身体障害"
      },
      {
        "name": "視覚・聴覚障害"
      }
    ],
    "date": "2024-01-16T14:03:21.049935",
    "url": "http://hasegawa.jp/",
    "image_url": "https://www.sato.jp/",
    "location": {
      "name": "鳥越",
      "address": "群馬県八千代市長畑21丁目6番19号",
      "capacity": 22
    }
  },
  {
    "title": "みんなでボッチャ！",
    "sport": [
      {
        "name": "サッカー"
      },
      {
        "name": "サッカー"
      },
      {
        "name": "テニス"
      }
    ],
    "tag": [
      {
        "name": "発達障害"
      }
    ],
    "date": "2024-01-20T06:07:06.863408",
    "url": "https://suzuki.com/",
    "image_url": "http://www.fukuda.com/",
    "location": {
      "name": "氏家新田",
      "address": "佐賀県山武市丸の内34丁目7番10号 ハイツ大京町212",
      "capacity": 88
    }
  },
  {
    "title": "野球の試合",
    "sport": [
      {
        "name": "野球"
      },
      {
        "name": "サッカー"
      },
      {
        "name": "野球"
      }
    ],
    "tag": [
      {
        "name": "視覚・聴覚障害"
      }
    ],
    "date": "2024-01-07T16:39:51.296737",
    "url": "http://www.nakamura.com/",
    "image_url": "http://suzuki.com/",
    "location": {
      "name": "津久戸町",
      "address": "岩手県長生郡長生村東和町19丁目24番16号 パーク外神田844",
      "capacity": 34
    }
  },
  {
    "title": "みんなでボッチャ！",
    "sport": [
      {
        "name": "野球"
      }
    ],
    "tag": [
      {
        "name": "知的障害"
      },
      {
        "name": "知的障害"
      },
      {
        "name": "知的障害"
      }
    ],
    "date": "2024-02-13T12:38:04.012142",
    "url": "http://www.sasaki.com/",
    "image_url": "http://www.yamada.com/",
    "location": {
      "name": "芝浦",
      "address": "神奈川県我孫子市千塚3丁目19番7号 所野コーポ141",
      "capacity": 65
    }
  },
  {
    "title": "みんなでボッチャ！",
    "sport": [
      {
        "name": "サッカー"
      }
    ],
    "tag": [
      {
        "name": "知的障害"
      }
    ],
    "date": "2024-01-29T15:54:59.669816",
    "url": "https://www.kato.jp/",
    "image_url": "http://www.sasaki.org/",
    "location": {
      "name": "太田ヶ谷",
      "address": "香川県横浜市緑区港南36丁目11番6号",
      "capacity": 32
    }
  },
  {
    "title": "ソフトボール大会",
    "sport": [
      {
        "name": "サッカー"
      },
      {
        "name": "サッカー"
      }
    ],
    "tag": [
      {
        "name": "知的障害"
      },
      {
        "name": "精神障害"
      },
      {
        "name": "視覚・聴覚障害"
      }
    ],
    "date": "2024-01-22T14:47:34.613762",
    "url": "https://fujiwara.jp/",
    "image_url": "http://www.yamada.com/",
    "location": {
      "name": "四番町",
      "address": "富山県横浜市瀬谷区二つ室5丁目1番13号 百村シャルム553",
      "capacity": 81
    }
  }
];

export const fakeDataJson : SummaryCard[]= JSON.parse(JSON.stringify(fakeData, null, 2));
