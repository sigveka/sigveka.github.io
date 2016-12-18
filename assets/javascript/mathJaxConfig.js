/*@file
  ooo        ooooo               .   oooo           oooo
  `88.       .888'             .o8   `888           `888
   888b     d'888   .oooo.   .o888oo  888 .oo.       888  .oooo.   oooo    ooo 
   8 Y88. .P  888  `P  )88b    888    888P"Y88b      888 `P  )88b   `88b..8P'
   8  `888'   888   .oP"888    888    888   888      888  .oP"888     Y888'
   8    Y     888  d8(  888    888 .  888   888      888 d8(  888   .o8"'88b
  o8o        o888o `Y888""8o   "888" o888o o888o .o. 88P `Y888""8o o88'   888o 
                                                 `Y888P
*/


/*
@brief     File configurating the connection to MathJax JavaScript display engine 
@author    Sigve Karolius
@date      2016.12.10

@details

@bug
@todo
@warning
@note
         The script was made following the [Official Documentation].

      <script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js"></script> 
      <script type="text/javascript" src=mathJaxConfig.js></script>

         [Official Documentation]: http://docs.mathjax.org/en/latest/index.html
*/

//<script type="text/x-mathjax-config">

/*
@brief    Main Control structure for MathJax
@details
@bug      Bad experience with using '$' as inline mathematics
@note:
      [Official Documentation](http://docs.mathjax.org/en/latest/api/hub.html)
*/
MathJax.Hub.Config({
    /// List of extensions to load at startup
    extensions: [
                  "tex2jax.js",
    ],
    /// CSS style sheets to load at startup
    styleSheets: [
      "",
    ],
    /// List of input and output jax to initialize at startup
    jax: [
            "input/TeX",                               // Run TeX pre-processor
            "output/HTML-CSS",
    ],
    /// Preprocessor run when "tex2jax.js" is included in extensions list
    tex2jax: {
           /// Tags whose contents should not be processed by tex2jax
           skipTags: [
                       "script","noscript","style","textarea","pre","code",
           ],
           /// Pairs of strings used as in-line math delimters
           inlineMath: [
                        ['$','$'],
                        ['\\(','\\)'],
           ],
           /// Strings used as delimters for displayed equation
           displayMath: [
                          ['$$','$$'],
                          ['\\[','\\]'],
           ],
           /// Process LaTeX environments (\begin{something}) outside of "math"
           processEnvironments: true,
           /// Insert the text 'LaTeX math' as the preview
           preview: [" [LaTeX math] "],
           /// Tell MJ to process escapes (true because of $ in inline math
           processEscapes: true,  //   Use \$ to represent literal dollar sign...
    },
    /// Control the TeX processor (run when you include "input/TeX" in jax)
    TeX: {
           /// MathJax has many TeX symbols and commands, but we need more...
           extensions: [
                  "AMSmath.js",
                  "AMSsymbols.js",
                  "color.js",
                  "newcommand.js",
           ],
           equationNumbers: {
                autoNumber: "AMS",
           },
           /// Macros defined before the TeX input processor begins
           Macros: {
              xspace: '',     // not processed by MathJax, replace empty string
              ensuremath: '', // not processed by MathJax, replace empty string
           },
    },
});


/*
@brief    Set a listener on the startup signal
*/
MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
  MathJax.Hub.Insert(MathJax.InputJax.TeX.Definitions.macros,{
    cancel: ["Extension","cancel"],
    bcancel: ["Extension","cancel"],
    xcancel: ["Extension","cancel"],
    cancelto: ["Extension","cancel"],
    textcolor: ["Extension", "color"],
  });
});

//</script>


