This code has been created for following articles.

* Developing Front-end Microservices With Polymer Web Components and Test-driven Development
** [The First Component](http://technologyconversations.com/2015/08/09/developing-front-end-microservices-with-polymer-web-components-and-test-driven-development-part-15-the-first-component/)
** [Polishing The First Component](http://technologyconversations.com/2015/08/09/developing-front-end-microservices-with-polymer-web-components-and-test-driven-development-part-25-polishing-the-first-component/)
** [The Second Component](http://technologyconversations.com/2015/08/09/developing-front-end-microservices-with-polymer-web-components-and-test-driven-development-part-35-the-second-component/)
** [Styling And Communication](http://technologyconversations.com/2015/08/09/developing-front-end-microservices-with-polymer-web-components-and-test-driven-development-part-45-styling-and-communication/)
** [Using Microservices](http://technologyconversations.com/2015/08/09/developing-front-end-microservices-with-polymer-web-components-and-test-driven-development-part-55-using-microservices/)


Build Containers
================

```bash
sudo docker build -t vfarcic/books-fe-polymer-dev -f Dockerfile.dev .
    
sudo docker push vfarcic/books-fe-polymer-dev

sudo docker-compose -f docker-compose-build.yml run dist

sudo docker build -t vfarcic/books-fe-polymer .
    
sudo docker push vfarcic/books-fe-polymer
```

Development
===========

Without Vagrant
---------------

```bash
sudo docker-compose -f docker-compose-dev.yml up -d
sudo docker-compose -f docker-compose-dev.yml logs
```

With Vagrant
------------

```bash
vagrant up dev
vagrant ssh dev
cd /vagrant
sudo docker-compose -f docker-compose-dev.yml up -d
sudo docker-compose -f docker-compose-dev.yml logs
```

Production Simulation
=====================

```bash
sudo docker-compose -f docker-compose-sim.yml up
```

Production
==========

```bash
sudo docker-compose up -d
```
