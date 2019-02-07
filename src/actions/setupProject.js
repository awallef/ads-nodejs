const
chalk = require('chalk'),
replace = require('replace-in-file'),

findReplace = function(options)
{
  try
  {
    let changes = replace.sync(options)
    console.log(chalk.blue('Modified files: '+changes.join(', ')))
  }
  catch (error)
  {
    console.error(chalk.red('File error occurred: '+error));
  }
}


module.exports = function(name, formats)
{
  const
  gruntPath = name + '/Gruntfile.js',
  packagePath = name +'/package.json'

  var replace = {
    'css':{},
    'js': {}
  }

  for(let i in formats)
  {
    let dims = formats[i].split('x')
    let folderPath = name + '/src/' + formats[i]

    replace.css['src/'+formats[i]+'/app.css'] = 'src/'+formats[i]+'/src/app.scss'
    replace.js['src/'+formats[i]+'/app.js'] = 'src/'+formats[i]+'/src/app.js'

    // index.html
    findReplace({files: folderPath+'/index.html',from: '<!--title-->',to: name})
    findReplace({files: folderPath+'/index.html',from: '<!--width-->',to: dims[0]})
    findReplace({files: folderPath+'/index.html',from: '<!--height-->',to: dims[1]})

    // app.scss
    findReplace({files: folderPath+'/src/app.scss',from: '<!--width-->',to: dims[0]})
    findReplace({files: folderPath+'/src/app.scss',from: '<!--height-->',to: dims[1]})
  }

  //grunt & package
  findReplace({files: gruntPath,from: '<!--css-->',to: JSON.stringify(replace.css)})
  findReplace({files: gruntPath,from: '<!--js-->',to: JSON.stringify(replace.js)})
  findReplace({files: packagePath,from: '<!--title-->',to: name})

}
