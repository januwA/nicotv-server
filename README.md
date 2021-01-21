nicotv 中转站(代理)

1. 将"nicotv.conf"放在"nginx/conf/nicotv.conf"下
2. 在"nginx/conf/nginx.conf"的http块中导入`include nicotv.conf;`
3. 热更新你的nginx `nginx -s reload`