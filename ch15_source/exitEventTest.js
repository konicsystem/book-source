console.log("exit event test");
process.on('exit', function () {
   console.log('This will not run');
   }
);