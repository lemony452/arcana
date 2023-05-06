FROM python:3.10.11

RUN mkdir -p /app
WORKDIR /app

COPY ./fastapi/main.py /app/
COPY ./fastapi/requirements.txt /app/

RUN pip install -r requirements.txt

CMD uvicorn --host=0.0.0.0 --port 18082 main:app
