# Best ticket microservices


### Features

- Signin, Signup
- Create ticket
- Create Order
- Payment

### Front End

- NextJs

### BackEnd

- Nodejs 
- MongoDB
- Redis
- Typescript

## Installation


Config JWT_KEY Env variable
```sh
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=your-jwt-key
```
Config STRIPE_KEY variable
```sh
kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=your-stripe-key
```
Use skaffold to run.
```sh
skaffold dev
```


## References

| Tech | Link |
| ------ | ------ |
| Nodejs | https://nodejs.org/en/|
| Docker | https://www.docker.com/ |
| Kuberbetes | https://kubernetes.io/ |
| Skaffold | https://skaffold.dev/ |
| Nextjs | https://nextjs.org/ |
| Mongo | https://docs.mongodb.com/manual/core/document/ |
| Redis | https://redis.io/ |
| Typescript | https://www.typescriptlang.org/ |
| NATS | https://nats.io/ |
| Stripe | https://stripe.com/ |

## Final Result (video)
https://drive.google.com/file/d/1XLUq9da3h35TC1it47dooDlSgKXCq78X/view
