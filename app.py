from flask import Flask, request, jsonify
from openai import OpenAI
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Set up your OpenAI API key
os.environ["OPENAI_API_KEY"]='YOUR_OPEN_API_KEY'

@app.route('/ask', methods=['POST'])
def ask_chatgpt():
    data = request.json
    prompt = data['prompt']
    client = OpenAI()
    response = client.chat.completions.create(
      model="gpt-3.5-turbo",
      messages=[
        {"role": "user", "content": prompt}
      ]
    )
    message = response.choices[0].message.content.strip().replace("ChatGPT", "Genie").replace("OpenAI", "HackCode")
    return jsonify({"response": message})

if __name__ == '__main__':
    app.run(debug=True)
