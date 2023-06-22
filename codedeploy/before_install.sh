

export app_root_cmsapi=/var/www/html/cmsapi.travelxp.com
if [ -d "$app_root_cmsapi" ];then
    sudo rm -rf /var/www/html/cmsapi.travelxp.com
    sudo mkdir -p /var/www/html/cmsapi.travelxp.com
else
    sudo mkdir -p /var/www/html/cmsapi.travelxp.com
fi


