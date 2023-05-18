import json
import random

TIMEJSON = "./time.json"
RESULTFILE = "random_time.txt"

def read_json():
    print('start read json')

    with open(TIMEJSON, 'r', encoding='UTF8') as f:
        json_data = json.load(f)

    with open(RESULTFILE, 'w', encoding='utf-8', newline='') as f:
        text = ""

        selected = []

        while(len(selected) < 10):
            num = random.randrange(0,156)
            
            if (num not in selected):
                selected.append(num)
        
        print(selected)
        
        for s in selected:
            text += f'{json_data[s]["timement"]} '

        f.write(text)

    print(f'\nend read json')

    return 0

if __name__ == "__main__":
    read_json()
