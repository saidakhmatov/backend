const http = require('http');

http.get('http://localhost:5000/',(res)=>{
    console.log('statusCode: ', res.statusCode);
    console.log('headers:',res.headers);

    res.on('data',(d)=>{
        console.log(d.toString());

    });

    }).on('error',(e)=>{
        console.error(e)
    }
);
