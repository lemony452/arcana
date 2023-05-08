FROM python:3.9.16

RUN mkdir -p /app
WORKDIR /app

COPY ./fastapi /app/

RUN pip install -r requirements.txt

CMD uvicorn --host=0.0.0.0 --port 18082 main:app
