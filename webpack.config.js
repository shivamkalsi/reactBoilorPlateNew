var webpack=require('webpack');
var path = require("path");
//'script-loader!jquery/dist/jquery.min.js','style-loader!foundation-sites/dist/css/foundation.min.css',
module.exports={
	entry:['./component/Main.jsx'],
	externals:{
		jquery:'jQuery',
		foundation:'Foundation',
	},
	
	plugins:[
		new webpack.ProvidePlugin({
		$:'jquery',
		jQuery:'jquery'
		})
		],
	
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
	resolve:{
		alias:{
			
		},
		extensions:['.js','.jsx', '.css'],
	
	},
    module: {
        loaders: [
		{
			test:/\.json$/,
			loader:'json-loader'
		},
		{
			test:/\.js$/,
			exclude:/node-module/,
			loader:'babel-loader',
			query:{
				presets:['react', 'es2015']
			}

		},
		{
			test:/\.jsx$/,
			exclude:/node-module/,
			loader:'babel-loader',
			query:{
				presets:['react', 'es2015']
			}
		},
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
      
}
