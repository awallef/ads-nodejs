const
  { dirname } = require('path'),
  copydir = require('copy-dir'),
  base = dirname(require.main.filename)+'/../'

module.exports = function(name, formats, template)
{
  const
    projectTemplate = base+'templates/project',
    adTemplate = template ||base+'templates/ad',
    src = name+'/src/'

  copydir.sync(projectTemplate, name)
  for( let i in  formats) copydir.sync(adTemplate, src+formats[i])
}
