# import time 
# import serial
import requests

# # ser = serial.Serial('/dev/ttyUSB0', baudrate=9600)

# resp = requests.get('https://anthonypurebas.postman.co/')
# print(resp.status_code)

# #enviar mensaje con requests.post
# # resp = requests.post('https://anthonypurebas.postman.co/', data={'mensaje': 'hola'})
# # print(resp.status_code)

ser= True

auth_data = {'una nueva tarea': 'nueva tarea'}
post = requests.post('http://127.0.0.1:5500/index.html', data={'marca': "Ford"})
print(post.status_code)

get = requests.get('http://127.0.0.1:5500/index.html', data='resultado')
print(get.status_code)

