# hello-node

hello-node in podman

## 1. Build OCI (Open Container Initiative) standard image:

  ` podman build -t . hello-node:latest`

## 2. Run container:

  ` podman run -p 8000:8000 hello-node:latest`
