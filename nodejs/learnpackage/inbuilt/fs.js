let fs = require('fs');

//  fs.writeFile('myfile.txt','We are working for nodejs',()=>{
//      console.log('Task done')
//  })

//utf-8 is the standard encoding method.
// fs.readFile('myfile.txt','utf-8',(err,data)=>{
//        if(err) throw err
//        console.log(data)
//      })

fs.rename('myfile.txt','mytext.txt',(err) => {
         if(err) throw err
         console.log('File Renamed')
     })

// fs.unlink('myText.txt',(err) => {
//         if(err) throw err
//         console.log('File Deleted')
// })