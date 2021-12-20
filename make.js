const fs = require('fs'); 
const generate=require('./builder/Generator')
var myArgs=process.argv.slice(2)
 
    let view = String(myArgs.find((value) => /^make:view=(.*)/.test(value))).split(/=/)[1];
    let createProjet = String(myArgs.find((value) => /^make:create=(.*)/.test(value))).split(/=/)[1];
    let model = String(myArgs.find(value => /^make:model=(.*)$/.test(value))).split(/=/)[1];
    let router = String(myArgs.find(value => /^make:router=(.*)$/.test(value))).split(/=/)[1];
    let controller = String(myArgs.find(value => /^make:folder=(.*)$/.test(value))).split(/=/)[1];
    let projetName = String(myArgs.find((value) => /^make:name=(.*)/.test(value))).split(/=/)[1];
    let arch = String(myArgs.find((value) => /^make:arch=(.*)/.test(value))).split(/=/)[1];

        
     
        
        

  
    if (createProjet=='' | createProjet ==null) {
        
    }
    else{
        generate.arch(createProjet)
    }
    if (model !== '' | model != null) {
        generate.createModel(model)
    }
    

 
    