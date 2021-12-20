'use strict'
/**
 * Author:Rodrino Adolf Kupessala <rkupessala@gmail.com>
 * Version:1.0.0
 * Description: Esta classe permite checar permissões baseadas em url dos usuários,
 * em cada rota deve consultar a bas de dados.
 * Exemplos:
 */
const  fs = require('fs');
const {dirStruture,server,packages,www,db,indexRoute}=require('./base')
const {exec}=require('child_process');
const { stderr } = require('process');
 
//const server=require('./server')dataModel,dataController,dataview,dataRouter
class Generator{


    constructor(){

    }
  
    validate(value){
      
   
       return  value
    }
    installPackages(){
      
   
      exec("cd edu && npm install",(error,stdout,stderr)=>{
        if(error){
            console.log(`error: ${error.message}`)
            return
        }
        if(error){
            console.log(`stderr: ${stderr}`)
            return
        }
        console.log(`Project created: ${stdout}`)
    })
   }
    arch(src){
        if(src==null||src==''){
            src='fgp'
        }
        
        if( this.validate(src)=='.'){
             this.validate(src)='fgp'
            fs.mkdirSync( this.validate(src)+'/'+dirStruture[0].bin);
            fs.mkdirSync( this.validate(src)+'/'+dirStruture[0].model);
            fs.mkdirSync( this.validate(src)+'/'+dirStruture[0].view);
            fs.mkdirSync( this.validate(src)+'/'+dirStruture[0].routes);
            fs.mkdirSync( this.validate(src)+'/'+dirStruture[0].database);
            fs.mkdirSync( this.validate(src)+'/'+dirStruture[0].public);
            console.log('The structure of project was been created!'); 
        }
        else{


        if(!fs.existsSync( this.validate(src))){
            
            fs.mkdirSync( this.validate(src));
            fs.mkdirSync( this.validate(src)+'/'+dirStruture[0].bin);
            fs.mkdirSync( this.validate(src)+'/'+dirStruture[0].model);
            fs.mkdirSync( this.validate(src)+'/'+dirStruture[0].view);
            fs.mkdirSync( this.validate(src)+'/'+dirStruture[0].routes);
            fs.mkdirSync( this.validate(src)+'/'+dirStruture[0].database);
            fs.mkdirSync( this.validate(src)+'/'+dirStruture[0].public);
            console.log('The structure of project was been created!');
        }
        else{
            fs.mkdirSync( this.validate(src)+'/'+dirStruture[0].bin);
            fs.mkdirSync( this.validate(src)+'/'+dirStruture[0].model);
            fs.mkdirSync( this.validate(src)+'/'+dirStruture[0].view);
            fs.mkdirSync( this.validate(src)+'/'+dirStruture[0].controller);
            fs.mkdirSync( this.validate(src)+'/'+dirStruture[0].database);
            console.log('The structure of project was been created!');
        }

    
}fs.writeFile( this.validate(src)+'/'+'package.json',packages, (err) => {
    if (err) throw err;
  console.log('[!] File package.json was been created!');



});
fs.writeFile( this.validate(src)+'/'+'bin/www',www, (err) => {
    if (err) throw err;
  console.log('[!] File www was been created!');



});


fs.writeFile( this.validate(src)+'/'+'app.js',server, (err) => {
    if (err) throw err;
  console.log('[!] File app.js was been created!!');



});
fs.writeFile( this.validate(src)+'/lib/'+'db.js',db, (err) => {
    if (err) throw err;
  console.log('[!] File db.js was been created!');



});
fs.writeFile( this.validate(src)+'/routes/'+'index.js',indexRoute, (err) => {
    if (err) throw err;
  console.log('[!] File index.js route was been created!');



});
if(fs.existsSync(`${src}/package.json`)){
 this.installPackages()
}

      }
      createDir(url){
      
        // return  url.replace(/[0-9]+\$/,"$1");
         return  url.replace(/[0-9]+/,"$1");
      }
      createModel(name){
      
        if(!fs.existsSync( this.validate('models'))){
            
          fs.mkdirSync( this.validate('models'));
        }

        fs.writeFile(`models/${this.validate(name)}.js`,`
     module.exports=function(sequelize,DataTypes){
          var ${this.validate(name)}=sequelize.define(
        
          );
          return ${this.validate(name)}
        };`, (err) => {
          if (err) throw err;
        console.log(`[!] Model ${this.validate(name)} was been created!`);
      
      
      
      });
      }
      createController(dir,file){
      
       
      }
      createService(url){
      
        // return  url.replace(/[0-9]+\$/,"$1");
         return  url.replace(/[0-9]+/,"$1");
      }
      createView(url){
      
        // return  url.replace(/[0-9]+\$/,"$1");
         return  url.replace(/[0-9]+/,"$1");
      }
    

}

const generator =new Generator();
Object.freeze(generator)
//export default generator;
module.exports=generator

 


