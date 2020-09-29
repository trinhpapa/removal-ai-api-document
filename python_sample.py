import requests

url = "https://api.removal.ai/2.0/remove/"

payload = "{\r\n    \"high_resolution\" : 1,\r\n    \"demo\" : 0,\r\n    \"file\" : \"your_image_url or your image base64\",\r\n    \"get_base64\" : 0\r\n}"
headers = {
  'Rm-Token': 'your token',
  'Content-Type': 'application/json',
}

response = requests.request("POST", url, headers=headers, data = payload)

print(response.text.encode('utf8'))