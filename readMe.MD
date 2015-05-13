Recipe

In HTML File
1. Insert script src to html
2. add script id and type="text/x-handlebars-template"
3. within that script add your template {{stuff}}
4. make a place for the template outside this script

In Main.js file
1. probably use a $(function)() {} jquery wrapper
2. Grab template script from HTML page var thingy=$('thing").html()
3. compile template var compiled=Handlebars.compile(thingy)
4. define context object data {}
5. pass data to the template $(div).html(compiled)
6.