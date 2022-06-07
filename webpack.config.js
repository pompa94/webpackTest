const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
    // 시작점
    entry : './js/main.js',
    // 결과물 반환하는 패스 설정
    output : {
        // 디폴트값이 dist 폴더 만들고 main.js 파일 만듬
        // path : path.resolve(__dirname,'dist'),
        // filename : 'main.js',
        clean : true
    },
    module:{
        rules:[
            {
                // 표현식 css이거나 scss이거나 s가 있거나 없거나-> s?
                test:/\.s?css$/,
                use:[
                    // 스타일오더가 먼저 나와야 한다
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    'babel-loader'
                ]
            }
        ]
    },
    plugins:[
        new htmlPlugin({
            template:'./index.html'
        }),
        new CopyPlugin({
            patterns:[
                {from: 'static'}
            ]
        })

    ],
    // 서버 설정할때
    // devServer:{
    //     host:'localhost',
    //     port:8080,
    //     hot:true
    // }
}