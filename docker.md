# Run
```
docker run \
  --name=$CONTAINER_NAME \
  -d \
  -p 3306:3306 \
  -v /path/on/machine:/path/on/docker \
  $IMAGE
```
* d - DETACH
* p - PORT REDIRECTION WITH DOCKER PROXY

# Logs
```
docker logs
-f $CONTAINER_NAME
```
* f - 

# Exec
```
docker exec \
  --it $CONTAINER_NAME \
  -- entrypoint=$ENTRYPOINT \
  $COMMAND \
  $CONTAINER
```
* --entrypoint=$ENTRYPOINT -> OVERRIDES DEFAULT ENTRYPOINT

# Build
```
docker build \
  -t $IMAGE_NAME:$IMAGE_VERSION $PATH_TO_DOCKERFILE \
  --target $NAME_IN_AS
```
* --target -> BUILD __ONLY__ IMAGE WITH SPECIFIED NAME
