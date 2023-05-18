import json
import csv

JSONFILE = "./news.json"


def read_json():
    print('start read json')

    with open(JSONFILE, 'r', encoding='UTF8') as f:
        json_data = json.load(f)

    with open('result.tsv', 'w', encoding='utf-8', newline='') as f:
        tw = csv.writer(f, delimiter='\t')
        tw.writerow(['news', 'summary'])

        docs = json_data['documents']

        for doc in docs:
            json_text_arr = doc['text']

            news = ""

            for json_text in json_text_arr:
                for text in json_text:
                    news += f'{text["sentence"]} '

            summary = doc['abstractive'][0]

            tw.writerow([news, summary])

    print(f'\nend read json')

    return 0


if __name__ == "__main__":
    read_json()
