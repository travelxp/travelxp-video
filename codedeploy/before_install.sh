# #!/bin/bash

# # This script is executed before copying the source

#apt-get update

#curl --silent --location https://rpm.nodesource.com/setup_8.x | bash -
#apt install nodejs -y

#npm install -g pm2
#pm2 update
cd /root 
sudo pm2 start

export app_root_video=/var/www/html/travelxp.video
if [ -d "$app_root_video" ];then
    sudo rm -rf /var/www/html/travelxp.video
    sudo mkdir -p /var/www/html/travelxp.video
else
    sudo mkdir -p /var/www/html/travelxp.video
fi
