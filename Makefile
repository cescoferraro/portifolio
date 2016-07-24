ssl:
	mkdir dist/ssl
	cp -n $(GOPATH)/src/bitbucket.org/cescoferraro/cluster/terraform/ssl/* dist/ssl

deploy: build ssl package success

package:
	docker build -t cescoferraro/cesco .
	docker push cescoferraro/cesco

success:
	@-/opt/bin/kubectl --namespace=portifolio get rc cesco && ([ $$? -eq 0 ] && make kube-reup) || make kube-create

build:
	ng build --prod
kube-create:
	kubectl create -f kube -f kube/
kube-delete:
	kubectl delete -f kube -f kube/

kube-reup:
	kubectl --namespace=portifolio delete rc cesco
	kubectl --namespace=portifolio create -f kube/rc.yaml


node:
	chown -R $(USER):$(USER) ~/
	rm -rf node_modules/
	npm i
