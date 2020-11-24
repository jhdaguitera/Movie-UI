from flask import Flask, render_template
from flask import request, redirect
from db_connector.db_connector import connect_to_database, execute_query


app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/reservations')
def reservations():
    return render_template("sale_Page.html")





@app.route('/movies', methods=['GET', 'POST'])
def searchMovie():	
	db_connection = connect_to_database()	
	if request.method =='GET':
		query = "SELECT showtimes.start_time, showtimes.movie_day, theaters.screenName, movieGenre, movieRating, showtimes.seats_available FROM movies INNER JOIN showtimes ON movies.movieID = showtimes.movieID INNER JOIN theaters ON movies.theaterID = theaters.theaterID  WHERE movieTitle ='{}'"
		queryReservoirDogs = query.format('Reservoir Dogs')
		queryApocalypto = query.format('Apocalypto')
		queryIT = query.format('IT')	
		queryDrive = query.format('Drive')
		queryAnchorman = query.format('Anchorman')	

		dropdown = request.form.get('')
		
		if request.args.get('Reservoir Dogs'):	
			cursor = execute_query(db_connection, queryReservoirDogs).fetchall()
		
		elif request.args.get('Apocalypto'):
			cursor = execute_query(db_connection, queryApocalypto).fetchall()
	
		elif request.args.get('IT'):	
			cursor = execute_query(db_connection, queryIT).fetchall()
					
		elif request.args.get('Drive'):	
			cursor = execute_query(db_connection, queryDrive).fetchall()

		else:
			cursor = execute_query(db_connection, queryAnchorman).fetchall()

		movieData = [dict(showTime=row[0], day=row[1], theaterName=row[2], genreName=row[3], ratingType=row[4], soldOut=row[5]) for row in cursor]		   			 
		print(movieData)
		print(dropdown)

	else:
		 print('This is GET data, Not POST')

	return render_template('search_Page.html', movieData = movieData)
	
	









@app.route('/checkout')
def checkout():
    return render_template("transaction_Page.html")








@app.route('/admin', methods=['POST', 'GET'])
def admin():
    print("Fetching and rendering people web page")
    db_connection = connect_to_database()
    if request.method =='GET':
        query = "SELECT reservations.reservationID, reservations.cust_Name, reservations.cust_Email, showtimes.movieTitle2, showtimes.movie_day, showtimes.start_time, theaters.screenName, reservations.num_of_adults, reservations.num_of_children, reservations.num_of_seniors, showtimes.seats_available FROM reservations INNER JOIN showtimes ON reservations.showtimeID = showtimes.showtimeID INNER JOIN movies ON showtimes.movieID = movies.movieID INNER JOIN theaters ON movies.theaterID = theaters.theaterID;"
        result = execute_query(db_connection, query).fetchall()
        print(result)

        return render_template("adminPage.html", people=result)

    else:
        print('goodbye')
    # if request.method == 'POST:'
    #     print("Add new people!")
    #     fname = request.form['fname']
    #     lname = request.form['lname']
    #     age = request.form['age']
    #     homeworld = request.form['homeworld']

    #     query = 'INSERT INTO bsg_people (fname, lname, age, homeworld) VALUES (%s,%s,%s,%s)'
    #     data = (fname, lname, age, homeworld)
    #     execute_query(db_connection, query, data)
    #     return ('Person added!')


if __name__ == '__main__':
    app.run(debug=True)