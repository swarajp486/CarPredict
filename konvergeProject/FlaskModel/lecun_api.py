from flask import Flask, render_template,jsonify, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
from model import knn




@app.route('/predict',methods = ['POST'])
def input_data():
    age = request.json['age']
    salary = request.json['salary']
    
    prediction,  prob_of_buying  = knn(age, salary)
    prob_of_buying = prob_of_buying [0][1]
    print(prediction,prob_of_buying)

    return jsonify({'status':'ok','prediction':prediction,'probability_of_buying':prob_of_buying })
    







if __name__ == '__main__':
    app.run(debug = True, port = 5001)