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

```bash
sudo docker-compose -f docker-compose-dev.yml up
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

TODO
====

* Create docker-compose.yml
* Add `gulp` command to Dockerfile.dev
* Remove browser-sync or figure out how to make it work with nginx
* Switch from gulp to nginx for serving files
* Clean unused files
** Remove unused elements from elements/elements.html
** Remove unused styles
** Remove other unused files
* Create distribution
* Check what happens when remote imports are vulcanized
* Create Dockerfile
* Explain routing problems
* Create several pages with books
* Explain downside of the need to import all dependencies
