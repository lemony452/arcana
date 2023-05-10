import random
import json
import pickle
import os
import re
import numpy as np
from tensorflow.keras.models import load_model
from konlpy.tag import Komoran
from aimodel.chatbot.util import *

# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

MODEL = './aimodel/chatbot/chatbot_model.h5'
INTENTS = './aimodel/chatbot/intents.json'
WORDS = './aimodel/chatbot/words.pkl'
CLASSES = './aimodel/chatbot/classes.pkl'

class chatbot:
    def __new__(cls, *args, **kwargs):
        if not hasattr(cls, "_instance"):
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        cls = type(self)
        if not hasattr(cls, "_init"):
            cls._init = True

            with open(INTENTS, 'r', encoding='UTF8') as f:
                self.intents = json.load(f)

            with open(WORDS, 'rb') as f:
                self.all_words = pickle.load(f)

            with open(CLASSES, 'rb') as f:
                self.classes = pickle.load(f)

            self.komoran = Komoran()
            self.model = load_model(MODEL)


    def clean_up_sentence(self, sentence):
        sentence = re.sub(r'[^\w\s]', '', sentence)  # 모든 구두점 제거
        w = self.komoran.pos(sentence)  # 형태소 분석
        w = custom_morphs(w)  # 품사를 따져 불필요한 것은 버림
        # print("w: ", w)
        return w


    def predict_class(self, sentence):
        tokenized_sentence = self.clean_up_sentence(sentence)
        bow = bag_of_words(tokenized_sentence, self.all_words)
        bow = np.array(bow).reshape(1, -1)
        res = self.model.predict(bow)

        # 지나치게 확률이 낮은 항목은 제외
        threshold = 0.01
        results = [[i, r] for i, r in enumerate(res[0]) if r > threshold]

        # 확률이 높은 순으로 정렬
        results.sort(key=lambda x: x[1], reverse=True)

        pred_list = {}
        for r in results:
            pred_list[self.classes[r[0]]] = r[1]

        return pred_list


    def get_response(self, pred_list, intents_json):
        for key, value in pred_list.items():
            tag = key
            prob = value
            break

        if prob < 0.2:
            return "무슨 말씀이신지..."

        list_of_intents = intents_json['intents']

        for item in list_of_intents:
            if item['tag'] == tag:
                result = random.choice(item['responses'])
                break

        return result


    def start_chat(self, message):
        pred_list = self.predict_class(message)

        return self.get_response(pred_list, self.intents)
