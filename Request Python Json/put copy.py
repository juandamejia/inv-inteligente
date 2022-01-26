#actualizar datos con pyt request python
import requests
import time

obtener = requests.get('https://my-json-server.typicode.com/juandamejia/inv-inteligente/numerosRaspberry')
print(obtener.status_code)
print(obtener.content)

nivelDeHumedad = 27.6
nivelLuz = "78%"
nivelTemperatura = "25°C"

def actualizarDatos():
        response1 = requests.put("https://my-json-server.typicode.com/juandamejia/inv-inteligente/numerosRaspberry/1", data = {"id": 1,  "nivel": nivelDeHumedad, "area": "Nivel Humedad"})
        print(response1.status_code)
                
        response2 = requests.put("https://my-json-server.typicode.com/juandamejia/inv-inteligente/numerosRaspberry/2", data = {"id": 2,  "nivel": nivelLuz, "area": "Nivel Luz"})
        print(response2.status_code)

        response3 = requests.put("https://my-json-server.typicode.com/juandamejia/inv-inteligente/numerosRaspberry/3", data = {"id": 3,  "nivel": nivelTemperatura, "area": "Nivel Temperatura"})
        print(response3.status_code)

        return response1, response2, response3

while actualizarDatos != actualizarDatos():
    actualizarDatos()
    time.sleep(1)

# nombre = "pedro"
# apellidop = "perez"
# print ("tu nombre es", nombre, apellidop)


