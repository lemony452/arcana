import torch
from kobart import get_kobart_tokenizer
from transformers.models.bart import BartForConditionalGeneration

MODEL = './aimodel/summary/kobart_summary'

class summary:
    def __new__(cls, *args, **kwargs):
        if not hasattr(cls, "_instance"):         # 클래스 객체에 _instance 속성이 없다면
            # print("__new__ is called\n")
            cls._instance = super().__new__(cls)  # 클래스의 객체를 생성하고 Foo._instance로 바인딩
        return cls._instance                      # _instance를 리턴

    def __init__(self):
        cls = type(self)
        if not hasattr(cls, "_init"):  # 클래스 객체에 _init 속성이 없다면
            # print("__init__ is called\n")
            cls._init = True
            self.model = self.load_model()

    def load_model(self):
        model = BartForConditionalGeneration.from_pretrained(MODEL)
        return model

    def get_message(self, origin_text):

        tokenizer = get_kobart_tokenizer()

        input_ids = tokenizer.encode(origin_text)
        input_ids = torch.tensor(input_ids)
        input_ids = input_ids.unsqueeze(0)
        summary_text = self.model.generate(input_ids, eos_token_id=1, max_length=512, num_beams=5)
        summary_text = tokenizer.decode(summary_text[0], skip_special_tokens=True)

        return summary_text
