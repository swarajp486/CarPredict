
import pickle


def knn(age, salary):
    model = pickle.load(open('knn_model.pkl','rb'))
    scale = pickle.load(open('scaler.pkl','rb'))
    data_point = scale.transform([[age, salary]])
    prediction = int(model.predict(data_point))


    return (prediction, model.predict_proba(data_point))

