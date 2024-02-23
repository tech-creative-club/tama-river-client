import requests
import json
import sys
from loguru import logger

def post(json_obj : dict, endpoint: str):
  json_data = json.dumps(json_obj)
  headers = {
    "Content-Type": "application/json"
  }
  res = requests.post(endpoint, json=json_data, headers=headers)
  if res.status_code == 200:
    logger.info("データを送信しました")
  else:
    logger.error(f"データの送信に失敗しました: {res.status_code}")
    logger.error(res.text)

args = sys.argv
if len(args) != 2:
  logger.error("引数が不正です")
  sys.exit(1)

# python ./scripts/push.py ./scripts/temp/data.json とする

json_path = args[1]
with open(json_path, 'r') as f:
  json_obj = json.load(f)
  post(json_obj, "https://tama-river-workers.suguru-toyohara.workers.dev/api/items")



