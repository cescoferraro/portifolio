FROM nginx:1.10-alpine
COPY dist/ /var/www
COPY ng2.conf /etc/nginx/conf.d/default.conf
CMD 'nginx'
