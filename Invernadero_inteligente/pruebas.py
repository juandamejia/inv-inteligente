# import time 
# import serial
import requests

# ser = serial.Serial('/dev/ttyACM0', 9600)
# dato = ser.readline()

#recibir datos del arduino
#dato = ser.readline()
#print(dato)
#convertir los datos del arduino en string
#dato = str(dato)
#print(dato)
#convertir los datos del arduino en float
#dato = float(dato)


# resp = requests.get('https://anthonypurebas.postman.co/')
# print(resp.status_code)

# #enviar mensaje con requests.post
# # resp = requests.post('https://anthonypurebas.postman.co/', data={'mensaje': 'hola'})
# # print(resp.status_code)

ser= 20

auth_data = {'una nueva tarea': 'nueva tarea'}
resp = requests.post('http://127.0.0.1:5500/Invernadero_inteligente/informacionPython', data={'temperatura': ser})

print(resp.status_code)
