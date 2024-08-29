// const express = require('express');
// const axios = require('axios')
// const cheerio = require('cheerio');
// const app = express();

// const PORT = process.env.port || 3000;




//   axios.get(website).then ((res) =>{
//     const data = res.data;
//     const $ = cheerio.load(data);

//     let content = [];

//     $('.1968nfl.html').each(function () {
    
//       const title = $(this).find('footer').attr('href');

//       content.push({
//         title,
//              });

//       app.get('/', (req, res) => {
//         res.json(content);
//       });
//     });

 
//  .catch (error) {
//   console.log (error, error.message);
//   }

// app.listen(PORT, () => {
//   console.log(`server is running on PORT:${PORT}`);
// })

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const website = 'https://www.profootballarchives.com/1968.html';

axios.get(website)
  .then((res) => {
    const data = res.data;
    const $ = cheerio.load(data);

    let content = [];

    $('.1968nfl.html').each(function () {
      const record = $(this).text()

      content.push({
        record,
      });
    });

  
    app.get('/', (req, res) => {
      res.json(content);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});