const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

 const https = require('https'); 
   es6Renderer = require('express-es6-template-engine'),
  app.engine('html', es6Renderer);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');  
  
 
    app.get('/index',function(req,res){      
	console.log(__dirname);
	 
	 https.get('https://homeapi.indexpro.online/api/news/3', (resp) => {
		   let data = '';
		console.log("data");
		  //   a chunk of data has been received.
		   resp.on('data', (chunk) => {
			data += chunk;
			console.log(data);
			});

		  //   the whole response has been received. print out the result.
		   resp.on('end', () => {
			   console.log(JSON.parse(data));
		    res.render('index', {locals: {title: 'Welcome!'  , imageUrl: JSON.parse(data).image   ,  titleog: JSON.parse(data).newsHeader , description: JSON.parse(data).newsDescription  }})  ;
		   console.log("retuyrn");
		  });

		  }).on("error", (err) => {
		   console.log("error: " + err.message);
		  });
		  
    //res.sendFile(path.join(__dirname,'/index.html'));
    });	
	
	
// // sendFile will go here
// app.get('index', function (req, res) {
	 // console.log("called");
	  // res.sendFile('index2', { imageurl:"" ,  title: "", description: ""  })  ;

		 // console.log("called");
		  // let yourImage = "";
		  
// })

 



app.listen(port);
console.log('Server started at http://localhost:' + port);