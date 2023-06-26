#!/bin/bash

# This script is used to start the application
cd /var/www/html/travelxp.video
#sudo npm run build
#!/bin/bash
# Stop all servers and start the server

sudo -i
sudo pm2 restart travelxp.video
# npm run build
# kill $(lsof -t -i:3002)
# nohup npm start 2>/dev/null 1>/dev/null&
