# Microservicess Application
From Udemy Microservices course

## Requirements
- Packages: Node, Docker with Kubernetes engaged.
- In the system host file make sure you map 127.0.0.0 to ticketing.dev
  macOS / Linux: /etc/hosts
  Windows: C:\Windows\System32\Drivers\etc\hosts
- Reinstall NGINX Ingress if the Kubernetes cluster was reset:
  https://kubernetes.github.io/ingress-nginx/deploy/#quick-start
- Make sure that port 80 is not taken by any other program:
  MacOS / Linux: sudo lsof -i tcp:80
  Windows: netstat -aon | findstr :80
- Recreate Kubernetes secrets (for JWT for example)

## Run the app
Start Skaffold (look below) and go to https://ticketing.dev
// Purchase on Stripe in test mode:
4242 4242 4242 4242
10/30 123

### Kubernetes
To run skaffold:
> skaffold dev

To look inside pods (containers) to run a shell inside them
> kubectl get pods
get the name of the pod
> kubectl exec -it <name-of-the-pod> sh

### Tests
To run all tests:
> cd auth
> npm run tests

### NPM packaging
To publish a module with NPM:
- make sure it has a git repo and is fully commited.
- login to npm: > npm login
> npm publish --access public

To patch (update) current version of your module:
> npm version patch

The full scenario:
> git add .
> git commit -m "your message"
> npm version patch
> npm run build
> npm publish
(alternatively run a custom script in package.json)

After changes in the custom module run:
> npm run pub     /// this is a script in package.jsom from above
> npm update @vgticket/common     /// inside auth project dir. 

## NATS Streaming Server
Documentation: docs.nats.io
Docker: nats-streaming
Library: node-nats-streaming

// For the nats-test create a port-forward setup:
> kubectl port-forward <pod_name> 4222:4222   // port on localhost : port of the pod

## Stripe
vlad@gorbich.com in test mode