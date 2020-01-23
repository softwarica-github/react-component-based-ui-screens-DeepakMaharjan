// webpack // webpack cli 


// javascript dom ... document.getlem ajax 




var webpack = require('webpack');
var path = require('path');

module.exports = {

// debugging easier , which files has error
devtool:'inline-source-map', // eval-source-map

entry:{
	'index':'./src/index.js'
},

output:{ // path.resolve path.join 
	//resolve absolute path
	path: path.resolve(__dirname,'dist'),
	filename:'main.js'
},

module:{
	rules: [ // multiple rules // inside reate differnt objects 
		{ // babel use garera es6 ,7 es 5 , broser compatible 
				// use babel on which files 
			test:/\.js$/, // regex start with // end -> $ \->characeter escpae
			exclude:/node_modules/,
			use: 'babel-loader'


		},
		//for css files
		{
			test:/\.css$/,
			// exclude:/node_modules/,
			use:['style-loader','css-loader'] // to convert css to js
		// from right first css loader second style loader
		}

	]
},
// devserver  to serve the pplication , only in development, node can be used to serve in production

devServer:{

// those content that are not generated by webpack
	contentBase: path.join(__dirname,"public/"),
	port:3001,
	// to serve webpack files 
	// HMR reloading 
	hot:true,
    publicPath: "http://localhost:3001/dist/"

}

}