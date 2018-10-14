# The Vā
### EDA Pac Hack 2018

A prototype for an app that would allow Pacific people to anonymously express feelings in an open, thoughtful and safe discussion.

Demo: http://the-va.herokuapp.com/

If you want to run locally, clone down the repo and run the following in the root directory:
```sh
touch .env && echo "JWT_SECRET=yourRandomSecretHere" >> .env
yarn && yarn knex migrate:latest && yarn knex seed:run
yarn dev
```

## About

One of the biggest issues plaguing Pacific people (particularly youth) in the diaspora surrounds mental health and wellbeing. Due to the tapu nature of some subjects like sexuality and religion or the nature of the relationships within families (e.g. fakaapaapa or respect between brother and sister), it can be difficult to find someone, who can understand from a cultural perspective, to confide in without feeling embarrassed. Similarly, it can be difficult to critique or question aspects of Pacific culture because of the potential backlash you might experience. I propose an app that would allow Pacific people to anonymously express such feelings in an open, thoughtful and safe discussion. The hope is that the anonymity element might create not only a more comfortable space, but a frank discussion. Conversations about mental health are so uncommon but so needed in the Pasifika community. It would be good to hear about topics that distress our youth, from the youth themselves so that the wider Pasifika community might be able to work towards fixing these issues.  
-- Carmelite Müller  

## The Team
**Product Owner**  
Carmelite Müller

**Dev Lead**  
Bryce Kehoe [@bryceknz](https://github.com/bryceknz)  

**Dev Team**  
Lisa Serous [@Zuzatoy](https://github.com/Zuzatoy)   
George Hardy [@georgehardy](https://github.com/georgehardy)  
Emma Ashley [@emma-nio](https://github.com/emmanio)  
Zaine Kingi [@rous6026nz](https://github.com/rous6026nz)  
Alisa Herrera-Hayman [@alisamhh](https://github.com/alisamhh)  

[devacademy.co.nz/pachack](https://devacademy.co.nz/pachack/)

![](https://github.com/nikau-2018/the-va/blob/development/client/src/Pac-Hack_Banner.jpg "Pac Hack")
