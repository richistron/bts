pack:
	rm -rf dist
	npm start
	docker build -t bts .

run:
	docker run --rm --name bts-container -p 4000:80 -d bts

stop:
	docker rm bts-container -f

push: pack
	docker tag bts registry.richistron.com/bts
	docker push registry.richistron.com/bts

install:
	nvm install
	nvm use
	npm i -g yarn
	yarn
