from confluent_kafka import Consumer

c = Consumer({
    'bootstrap.servers': 'localhost:9094',
    'group.id': 'py-service-group',
    'auto.offset.reset': 'earliest'
})

c.subscribe(['hello-py-service'])

while True:
    msg = c.poll(1.0)

    if msg is None:
        continue
    if msg.error():
        print("Consumer error: {}".format(msg.error()))
        continue

    print('Received message: {}'.format(msg.value().decode('utf-8')))

c.close()