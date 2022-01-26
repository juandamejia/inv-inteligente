#actualizar datos con pyt request python
import requests
import time

#el numero 200 en la terminal es que fue exitoso
#obtiene los datos de la pagina y los imprime en consola tanto si tuvo exito en la peticion como si no como tambien su contenido
obtener = requests.get('https://my-json-server.typicode.com/juandamejia/inv-inteligente/numerosRaspberry')
print(obtener.status_code)
print(obtener.content)

#datos que se van a pasar para enviar
nivelDeHumedad = 1
nivelLuz = "1%"
nivelTemperatura = "1°C"

#envios y actualizaciones de los datos

#envio de datos de nivel de humedad
response = requests.put("https://my-json-server.typicode.com/juandamejia/inv-inteligente/numerosRaspberry/1", data = {"id": 1,  "nivel": nivelDeHumedad, "area": "Nivel Humedad"})
print(response.status_code)
        
#envio de datos de nivel de luz
response = requests.put("https://my-json-server.typicode.com/juandamejia/inv-inteligente/numerosRaspberry/2", data = {"id": 2,  "nivel": nivelLuz, "area": "Nivel Luz"})
print(response.status_code)

#envio de datos de nivel de area
response = requests.put("https://my-json-server.typicode.com/juandamejia/inv-inteligente/numerosRaspberry/3", data = {"id": 3,  "nivel": nivelTemperatura, "area": "Nivel Temperatura"})
print(response.status_code)



