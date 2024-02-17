# APIのテキトーなデータを作成するスクリプト
import faker
import json
from typing import TypedDict

fake = faker.Faker(['ja_JP'])

"""
{
  name: name,
  sport: [sport],
  tag: [{ name: tag }],
  date: '2024-01-01T00:00:00Z',
  url: 'https://example.com',
  image_url: 'https://source.unsplash.com/700x500?park',
  location: {
    name: '〇〇広場',
    address: '住所',
    capacity: 100,
  },
}
"""

class location(TypedDict):
  name: str
  address: str
  capacity: int

class SummaryCard(TypedDict):
  name: str
  sport: str
  tag: list[dict[str, str]]
  date: str
  url: str
  image_url: str
  location: dict[location]

titles = ["地域づくりサッカー", "野球の試合", "ソフトボール大会", "みんなでボッチャ！"]
sports = ["野球", "サッカー", "テニス"]
tags = ['身体障害', '発達障害', '視覚・聴覚障害', '知的障害', '精神障害']

def create_summary_card() -> SummaryCard:
  return {
    'title': fake.random_element(titles),
    'sport': [{'name': fake.random_element(sports)} for _ in range(fake.random_int(1, 3))],
    'tag': [{'name': fake.random_element(tags)} for _ in range(fake.random_int(1, 3))],
    'date': fake.date_time_this_year().isoformat(),
    'url': fake.url(),
    'image_url': fake.url(),
    'location': {
      'name': fake.town(),
      'address': fake.address(),
      'capacity': fake.random_int(10, 100),
    }
  }

if __name__ == '__main__':
  cards = [create_summary_card() for _ in range(10)]
  print(json.dumps(cards, indent=2, ensure_ascii=False))
