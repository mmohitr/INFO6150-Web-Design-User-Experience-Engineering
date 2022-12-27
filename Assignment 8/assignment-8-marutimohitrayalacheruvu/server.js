import app from './api/app.js';


const port = 5001;

app.listen(port, ()=> {console.log(`Server running at ${port}.`);
});