import os
import re
import requests
import time
from requests import Response
from loguru import logger


def get_data(url):
  response:Response = requests.get(url)
  response.encoding = response.apparent_encoding
  if response.status_code != 200:
    logger.error(f"GET: {response.status_code}")
    return ""
  logger.info(f"GET: {response.status_code}")
  return response.text

def get_article_links(html):
  return re.findall(r'/[0-9]+/p[0-9]+\.html', html)

html = get_data("https://www.city.chofu.lg.jp/kankou/sports/shougaisha/index.html")
保存場所 = os.path.abspath(__file__).replace('downloader.py', '') + 'temp/index.html'
with open(保存場所 , 'w') as f:
  f.write(html)

article_links = get_article_links(html)

for link in article_links:
  time.sleep(1)
  html = get_data(f"https://www.city.chofu.lg.jp{link}")
  保存場所 = os.path.abspath(__file__).replace('downloader.py', '') + f'temp/{link[1:].replace("/","_")}'
  with open(保存場所 , 'w') as f:
    f.write(html)
