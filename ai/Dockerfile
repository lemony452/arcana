FROM python:3.10.11

RUN mkdir -p /app
WORKDIR /app

COPY ./fastapi /app/

RUN apt-get install python3-pip
RUN pip3 install tensorflow
RUN pip install -r requirements.txt

CMD uvicorn --host=0.0.0.0 --port 18082 main:app
