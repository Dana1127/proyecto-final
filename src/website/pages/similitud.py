from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import numpy as np


app = Flask(__name__)
CORS(app)


listaDeTiendas = 'tiendas.csv'


@app.route('/calcular_similitud', methods=['POST'])
def calcular_similitud():
    try:
        datos_usuario = request.json['datos_usuario']
        datos_tiendas = obtener_datos_tiendas()

        # Datos a matriz
        datos_usuario_array = np.array([list(datos_usuario.values())])
        datos_tiendas_array = np.array(datos_tiendas)

        similitud_scores = cosine_similarity(datos_usuario_array, datos_tiendas_array)

        # Convertir resultados en lista para enviar al front
        resultados = similitud_scores.flatten().tolist()

        return jsonify({'resultados': resultados})
        
    except Exception as e:
        print(f'Error en el servidor: {str(e)}')
        return jsonify({'error': str(e)}), 500




def obtener_datos_tiendas():

    try:
        datos_tiendas = pd.read_csv(listaDeTiendas, sep=',')
        return datos_tiendas.values  # Devuelve los solo los datos de la db
    
    except FileNotFoundError:
        return []  #Deolver lista vacía si no lo encuentra

if __name__ == '__main__':
    app.run(debug=True)

