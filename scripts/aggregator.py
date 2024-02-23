# python ./scripts/aggregator.py

import requests
import re
import json
from requests import Response
from loguru import logger

def get_og_properties(url):
  response:Response = requests.get(url)
  if response.status_code != 200:
    logger.error(f"GET: {response.status_code}")
    return {}
  logger.info(f"GET: {response.status_code}")
  html = response.text
  return {
    "title": re.search(r'<meta property="og:title" content="([^"]+)"', html).group().split('content="')[1].replace('"', ''),
    "image_url": re.search(r'<meta property="og:image" content="([^"]+)"', html).group().split('content="')[1].replace('"', ''),
  }

def get_article_links(html):
  return re.findall(r'/[0-9]+/p[0-9]+\.html', html)

def get_data(url):
  response:Response = requests.get(url)
  if response.status_code != 200:
    logger.error(f"GET: {response.status_code}")
    return ""
  logger.info(f"GET: {response.status_code}")
  return response.text

html = get_data("https://www.city.chofu.lg.jp/kankou/sports/shougaisha/index.html")
article_links = get_article_links(html)

for link in article_links:
  print(f"https://www.city.chofu.lg.jp{link}")
