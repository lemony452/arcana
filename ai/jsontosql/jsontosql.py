import json

TIMEJSON = "./time.json"
INSTANTJSON = "./instant.json"
RESULTFILE = "result.txt"
INSTANTRESULT = "instant.txt"


def read_json():
    print('start read json')

    with open(TIMEJSON, 'r', encoding='UTF8') as f:
        json_data = json.load(f)

    with open(RESULTFILE, 'w', encoding='utf-8', newline='') as f:
        sql = ""

        for index, j_data in enumerate(json_data):
            sql += f'INSERT INTO time (card_idx, timement) VALUE ({j_data["id"]}, \"{j_data["timement"]}\");\n'

        f.write(sql)

    print(f'\nend read json')

    return 0

def instance_json():
    print('start read json')

    with open(INSTANTJSON, 'r', encoding='UTF8') as f:
        json_data = json.load(f)

    with open(INSTANTRESULT, 'w', encoding='utf-8', newline='') as f:
        sql = ""

        for index, j_data in enumerate(json_data):
            sql += f'INSERT INTO instant (idx, card_idx, question, advice) VALUE ({index}, {j_data["id"]}, \"{j_data["question"]}\", \"{j_data["advice"]}\");\n'

        f.write(sql)

    print(f'\nend read json')

    return 0

if __name__ == "__main__":
    read_json()
    instance_json()
