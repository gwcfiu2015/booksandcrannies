
Parse.initialize("O2G7uVifV3LltYvdsdZBG70Dj7YlFVw5ybBJLRXs", "FjRlplnTs8ewAWedshWejrMFQKwwWYFk8771aMUE");

var CurrentBook = Parse.Object.extend("CurrentBook");

function addToDatabase() {
    alert("working");
    var T = books[0].title;
    var A = books[0].author;
    var I = books[0].isbn;
    var P = books[0].pic;
    console.log(books[0]);
    alert(T + A + I + P);

    user = Parse.User.current();

    var currentBook1 = new CurrentBook();
    currentBook1.set("user", user);

    currentBook1.save({
        title: T,
        author: A,
        isbn: I,
        pic: P,
        wishlist: "true"
    }, {
        success: function (currentBook1) {
            alert("added to database");

        },
        error: function (currentBook1, error) {

        }
    });
    event.preventDefault();
}

function addBooksRead() {
    alert("working");
    var T = books[0].title;
    var A = books[0].author;
    var I = books[0].isbn;
    var P = books[0].pic;
    console.log(books[0]);
    alert(T + A + I + P);

    user = Parse.User.current();

    var currentBook1 = new CurrentBook();
    currentBook1.set("user", user);

    currentBook1.save({
        title: T,
        author: A,
        isbn: I,
        pic: P,
        booksreadlist: "true"
    }, {
        success: function (currentBook1) {
            alert("added to database");

        },
        error: function (currentBook1, error) {

        }
    });
    event.preventDefault();
}

function signUpUser() {
    var user = new Parse.User();
    user.set("username", $("#username").val().toString());
    user.set("password", $("#password").val()).toString();
    user.signUp(null, {
        success: function (user) {
            alert("You successfully signed up!");
            alert($("#username").val() + $("#password").val());
        },
        error: function (user, error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
    //event.preventDefault();
}






function logInUser() {
    alert("clicked login button");
    var username = $("#username").val();
    var password = $("#password").val();
    Parse.User.logIn(username, password, {
        success: function (user) {
            // Do stuff after successful login.
            alert("logged in");
        },
        error: function (user, error) {
            alert("log in failed");
            alert(username + "password: " + password);
            // The login failed. Check error to see why.
        }

    }); //closes the login function
}




var booksReadList = [];
var wishlistList = [];

 function Book( title, author, genre,isbn, summary, pic, link)
            {
                                
                                this.title = title;
                                this.author = author;
                                this.isbn = isbn;
                                this.genre = genre;
                                this.summary = summary;
                                this.pic = pic;  
                                this.link = link;
                    }


function shuffle(array) {
   
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;


    }

    return array;
}

function findValue() {

    var e = document.getElementById("selectBook");
    var strUser = e.options[e.selectedIndex].text;
    getBook(strUser);
}

var books = [];


function getBook(strUser) {
    
    var booksReadList = [];
    var genre = String(strUser);
    var URLstring = "https://www.googleapis.com/books/v1/volumes?q=subject:";
    URLstring += genre;
    $.getJSON(URLstring, function (data) {
        //data is the JSON string
        //console.log(data.items[0]);
        for (var i = 0; i < data.items.length; i++) {

            var T = data.items[i].volumeInfo.title;
           
            var A = data.items[i].volumeInfo.authors[0];
          
            var I = data.items[i].volumeInfo.industryIdentifiers[0].identifier;
            
            var S = data.items[i].volumeInfo.description;
          
            var P = data.items[i].volumeInfo.imageLinks.thumbnail;
            
            var G = data.items[i].volumeInfo.category;
             var L = data.items[i].volumeInfo.canonicalVolumeLink;
            books.push(new Book(T, A,G, I, S, P,L));
            
            console.log(books[i]);
            
        }

        //runs shuffle to find book            
        shuffle(books);
        for (var i = 0; i < books.length; i++) {
            console.log(books[i].title);
            //                    document.write(books[i].title+'<br />');
        }


        //console.log(books[0]);
        //PRINTS BOOKS            
        document.getElementById("book").innerHTML = ('<table><tr><td class="firstColumn"><div id="bookTitle">'+ books[0].title+'</div><div id="bookAuthor">' + books[0].author + '</div><div id="bookPic">' + "<img src = '"+books[0].pic+"'>" + '</div></p></td><td><div id="bookSummary">' + books[0].summary + '</div>' + '<br/>'+'<a href="'+books[0].link+'"target="_blank">Buy This Book</a><p/></td></tr></table>');


        function addBooksRead() {
            booksReadList.push(book[0]);
            console.log(booksReadList);
        }
    });

}