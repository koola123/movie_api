const express = require('express'),

  app = express(),

  morgan = require('morgan'),

  fs = require('fs'),

  path = require('path');


  const topMovies = [
    {
      title: 'Lord of the Rings',
      director: 'J.R.R. Tolkien',
      year: 2001
    },
    {
      title: 'Star Wars',
      director: 'Steven Spielberg',
      year: 1978
    },
    {
      title: 'Gladiator',
      director: 'Ridley Scott',
      year: 2000
    },
    {
      title: 'E.T. the Extra-Terrestrial',
      director: 'Steven Spielberg',
      year: 1982
    },
    {
      title: 'The Amazing Spiderman',
      director: 'Marc Webb',
      year: '2012'
    },
    {
      title: 'Movie_Placeholder_6',
      director: 'Test_6',
      year: '2006'
    },
    {
      title: 'Movie_Placeholder_7',
      director: 'Test_7',
      year: '2007'
    },
    {
      title: 'Movie_Placeholder_8',
      director: 'Test_8',
      year: '2008'
    },
    {
      title: 'Movie_Placehlder_9',
      director: 'Test_9',
      year: '2009'
    },
    {
      title: 'Movie_Placeholder_10',
      director: 'Test_10',
      year: '2010'
    },
  ];

  // to start nodemon: npm run devserver;
  // Server static files in Express
  app.use(express.static('/public'));

  app.get('/', (req, res) => {
    res.send('Welcome to my app!');
  });

  app.get('/movies', (req, res) => {
    res.json(topMovies);
  })

  app.get('/secreturl', (req, res) => {
    res.send('Gotcha. You just entered the secret area...');
  })

  app.get('/documentation.html', (req, res) => {
    res.sendFile('public/documentation.html', {root:__dirname});
  });

  // create a write stream (in append mode)
  // a ‘log.txt’ file is created in root directory
  const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'});

// setup the logger
  app.use(morgan('combined', {stream: accessLogStream}));


  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

// Listen to port 8080
  app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
  });
