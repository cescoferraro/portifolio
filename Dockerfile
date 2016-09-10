FROM nginx:1.10-alpine
COPY dist/ /var/www
COPY ng2.conf /etc/nginx/conf.d/default.conf
WORKDIR /etc/nginx/conf.d
CMD 'nginx'