from flask import Flask, render_template, request, jsonify
import speech_recognition as sr
from difflib import SequenceMatcher
import pyttsx3

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('mainpage.html')

@app.route('/check_pronunciation', methods=['POST'])
def check_pronunciation():
    pronunciation = request.form['pronunciation'].lower()

    recognizer = sr.Recognizer()

    with sr.Microphone() as source:
        print("Please pronounce the words:")
        audio = recognizer.listen(source)

    try:
        user_pronunciation = recognizer.recognize_google(audio).lower()
        reference_words = pronunciation.split()
        user_words = user_pronunciation.split()

        feedback = []

        if len(reference_words) != len(user_words):
            feedback.append("Incorrect number of words. Extra words detected.")

        for ref_word, user_word in zip(reference_words, user_words):
            similarity = SequenceMatcher(None, ref_word, user_word).ratio()
            if similarity < 1.0:
                feedback.append(f"Word '{ref_word}' is not pronounced correctly. Similarity: {similarity:.2f}")

        if feedback:
            result = {"feedback": "\n".join(feedback), "status": "error"}
        else:
            result = {"feedback": "Perfect pronunciation!", "status": "success"}

        speaker = pyttsx3.init()
        speaker.say(f"The correct pronunciation is: {pronunciation}")
        speaker.runAndWait()

    except sr.UnknownValueError:
        result = {"feedback": "Sorry, could not understand audio.", "status": "error"}
    except sr.RequestError as e:
        result = {"feedback": f"Could not request results from Google Speech Recognition service; {e}", "status": "error"}

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)