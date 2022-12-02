const path = require("path");       //基本設定檔
module.exports = {
    mode: "development",             //production(上線模式編譯),development(開發模式編譯)
    entry: "./src/index.js",      //程式的進入點可修改
    output: {                     //輸出位子與檔名可修改
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {                    //自動編譯設定
        static: "./dist",
    },
    module: {                               //載入模組設定
        rules: [
            {
                test: /\.css$/i,                //當載入器結尾是.
                use: ["style-loader", "css-loader"]    //就使用載入器
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    }
}; 