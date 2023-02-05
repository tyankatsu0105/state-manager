run-server:
	docker-compose -f server/docker-compose.yml up -d
	cd server && npm run start

down-server:
	docker-compose -f server/docker-compose.yml down

run-client:
	cd apollo && npm run dev