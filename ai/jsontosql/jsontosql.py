import json

TIMEJSON = "./time.json"
INSTANTJSON = "./instant.json"
LUCKYJSON = "./lucky.json"
RESULTFILE = "result.txt"
INSTANTRESULT = "instant.txt"
LUCKYRESULTFILE = "lucky.txt"
QUIZJSON = "./quiz.json"
QUIZRESULT = "quiz.txt"


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

def lucky_json():
    print('start read json')

    with open(LUCKYJSON, 'r', encoding='UTF8') as f:
        json_data = json.load(f)

    with open(LUCKYRESULTFILE, 'w', encoding='utf-8', newline='') as f:
        sql = ""

        for index, j_data in enumerate(json_data):
            sql += f'INSERT INTO lucky (idx, card_idx, luckyment) VALUE ({index}, {j_data["id"]}, \"{j_data["luckyment"]}\");\n'

        f.write(sql)

    print(f'\nend read json')

    return 0

def quiz_json():
    print('start read json')

    with open(QUIZJSON, 'r', encoding='UTF8') as f:
        json_data = json.load(f)

    with open(QUIZRESULT, 'w', encoding='utf-8', newline='') as f:
        sql = ""

        for index, j_data in enumerate(json_data):
            sql += f'INSERT INTO quiz VALUE ({j_data["idx"]}, \"{j_data["answer"]}\", \"{j_data["content"]}\", \"{j_data["wrong1"]}\", \"{j_data["wrong2"]}\", \"{j_data["wrong3"]}\", {j_data["card_idx"]});\n'

        f.write(sql)

    print(f'\nend read json')

    return 0

if __name__ == "__main__":
    # read_json()
    # instance_json()
    # lucky_json()
    quiz_json()
