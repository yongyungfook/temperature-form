from flask import Flask, render_template

app = Flask(__name__, static_folder='asset')

@app.route('/')
def index():
    return render_template('form.html')

@app.route('/thankyou')
def thankyou():
    return render_template('thankyou.html')

if __name__ == '__main__':
    app.run(debug=True)
