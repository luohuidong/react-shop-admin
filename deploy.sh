#!/bin/bash
rm -rf dist
git pull

if [ $? -eq 0 ]
    then
        echo '已获取最新的代码'
        npm run dll
else
    echo '获取最新代码失败'
    exit
fi

if [ $? -eq 0 ]
    then
        echo '生成 dll 文件成功'
        npm run build
else
    echo '生成 dll 文件失败'
    exit
fi

if [ $? -eq 0 ] 
    then 
        echo '静态文件生成成功'
        rm -rf /www/react-shop-admin/*
else
    echo '静态文件生成失败'
    exit
fi


if [ $? -eq 0 ]
    then
        echo '清除旧静态文件成功'
        cp -r build/* /www/react-shop-admin/
else 
    echo '清除旧文件失败'
    exit
fi
