import torch
from kobart import get_kobart_tokenizer
from transformers.models.bart import BartForConditionalGeneration

MODEL = './aimodel/summary/kobart_summary'

class summary:
    def __init__(self):
        self.text = "self text"

    def load_model(self):
        model = BartForConditionalGeneration.from_pretrained(MODEL)
        return model

    def get_message(self, origin_text):
        model = self.load_model()
        tokenizer = get_kobart_tokenizer()

        input_ids = tokenizer.encode(origin_text)
        input_ids = torch.tensor(input_ids)
        input_ids = input_ids.unsqueeze(0)
        summary_text = model.generate(input_ids, eos_token_id=1, max_length=512, num_beams=5)
        summary_text = tokenizer.decode(summary_text[0], skip_special_tokens=True)

        return summary_text
