from urllib import response
import requests
import json
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin


app = Flask(__name__)


@app.route('/api/getproducts/', methods=['GET'], strict_slashes=False)
@cross_origin()
def get_product_list():
    if request.method == 'GET':
        headers = {
            'Accept': 'application/json',
        }
    response = requests.get(
        'https://nonchalant-fang.glitch.me/listing', headers=headers)
    return json.loads(response.content)


@app.route('/api/submitorder/', methods=['POST', 'OPTIONS'], strict_slashes=False)
@cross_origin(origin='*', headers=['*'])
def confirm_order():
    print(request)
    if request.method == 'POST':
        response = {}
        headers = {}
        for key in request.get_json():
            res = requests.post(
                'https://nonchalant-fang.glitch.me/order', headers=headers, json=[key])
            print(key['id'])
            print(res.status_code)
            response[key['id']] = res.status_code

        return response


if __name__ == '__main__':
    app.run(host='localhost', port=3000, debug=True)
