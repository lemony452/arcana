FROM python:3.8.10

RUN mkdir -p /app
WORKDIR /app

COPY ./fastapi /app/

# RUN python -m pip install --upgrade pip
# RUN pip3 install tensorflow==2.12.0
RUN pip install -r requirements.txt

CMD uvicorn --host=0.0.0.0 --port 18082 main:app
