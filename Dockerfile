FROM ubuntu
RUN echo "deb http://deb.torproject.org/torproject.org xenial main" >> /etc/apt/sources.list
RUN echo "deb-src http://deb.torproject.org/torproject.org xenial main" >> /etc/apt/sources.list
RUN gpg --keyserver keys.gnupg.net --recv A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89
RUN gpg --export A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89 | sudo apt-key add -
RUN apt-get update
RUN apt-get install tor deb.torproject.org-keyring
RUN echo "HiddenServiceDir /var/lib/tor/hidden_service/" >> /etc/tor/torrc
RUN echo "HiddenServicePort 80 127.0.0.1:80" >> /etc/tor/torrc
RUN service tor restart
RUN cat /var/lib/tor/hidden_service/hostname
FROM node:12

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . . 

EXPOSE 8080 
CMD ["node", "server.js"]