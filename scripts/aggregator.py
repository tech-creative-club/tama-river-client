# python ./scripts/aggregator.py

import re
import os
import glob
from requests import Response
from loguru import logger

html_tmp_path = os.path.abspath(__file__).replace('aggregator.py', '') + 'temp/'
html_list = glob.glob(html_tmp_path + '*_*.html')

def get_article_theme(html):
  pankuzu = re.search(r'<p><a href="/index.html">トップページ</a> &gt;.+</p>', html).group()
  atags = re.findall(r'>([^<]+)<', pankuzu)
  atags = [atag for atag in atags if '&gt' not in atag]
  return atags

def get_tags(html):
  return [{"name": "障害者スポーツ"}]

def get_sports(html):
  return []

def get_location(html):
  return {
    "name": "",
    "address": "",
    "capacity": 10
  }

def get_date(html):
  try:
    return re.search(r'更新日:[0-9]{4}.[0-9]{2}.[0-9]{2}', html).group().split('更新日:')[1]
  except AttributeError:
    return ""

def get_attribute(html):

  return {
    "title": re.search(r'<meta property="og:title" content="([^"]+)"', html).group().split('content="')[1].replace('"', ''),
    "sport": get_sports(html),
    "tags" : get_tags(html),
    "date": get_date(html),
    "url": re.search(r'<meta property="og:url" content="([^"]+)"', html).group().split('content="')[1].replace('"', ''),
    "image_url": re.search(r'<meta property="og:image" content="([^"]+)"', html).group().split('content="')[1].replace('"', ''),
    "location": get_location(html)
  }

def get_og_properties(html):
  """ 抽出したい情報
  {
    title: title,
    sport: [sport],
    tags: [{ name: tag }],
    date: '2023年1月1日',
    url: url,
    image_url: url,
    location: {
      name: '〇〇広場',
      address: '住所',
      capacity: 100,
    }
  }
  """
  if "障害者スポーツ" in get_article_theme(html):
    return get_attribute(html)

req_json = { "FQDN": "www.city.chofu.lg.jp", "data": [] }

for html_path in html_list:
  with open(html_path , 'r') as f:
    html = f.read()
    data = get_og_properties(html)
    if data is not None:
      req_json["data"].append(data)

print(req_json)
