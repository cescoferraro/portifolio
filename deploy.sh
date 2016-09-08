ng build --prod
docker build -t cescoferraro/portifolio:latest .
docker push cescoferraro/portifolio
kubectl delete -f kubernetes.yaml
kubectl create -f kubernetes.yaml