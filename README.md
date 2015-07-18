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
