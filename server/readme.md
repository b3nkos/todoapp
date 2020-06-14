## Get up MongoDB usgin Docker

```bash
docker run -d --network bridge -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
    -e MONGO_INITDB_ROOT_PASSWORD=secret \
    -e MONGO_INITDB_DATABASE=todoapp \
    mongo:4.2
```
