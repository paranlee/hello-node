# hello-node

Simple example, we don't need to initialize package.json.

We only need [node.js](https://nodejs.org/ko/download/) and [podman](https://podman.io/getting-started/installation).

This Node.js serve url route and file service with podman.

## Build [OCI](https://en.wikipedia.org/wiki/Open_Container_Initiative) image

```console
foo@bar:~$ git clone https://github.com/paranlee/hello-node.git
```

```console
foo@bar:~$ cd hello-node
foo@bar:~/hello-node$ podman build -t hello-node:latest .
```

## Run container

Run container with podman.

```console
foo@bar:~$ podman run -d -p 8080:8080 --name hello-node hello-node:latest
```

## Test each service

Test main URL.

```console
foo@bar:~$ curl localhost:8080
Hello node.js!
```

Get JSON File.

```console
foo@bar:~$ curl localhost:8080/schemaStore.json
{
    "typeName": "places",
    "userData": {
        "collection": "places"
     },
    "geometryDescriptor": {
        "localName": "location",
        "crs": {
            "properties": {
                "name": "urn:ogc:def:crs:EPSG:4326"
            },
            "type": "name"
        }
    },
    "attributeDescriptors": [
        {
            "localName": "location",
            "type": {
                "binding": "org.locationtech.jts.geom.Point"
            },
            "userData": {
                "encoding": "GeoJSON",
                "mapping": "geometry"
            }
        },
        {   "localName": "city",
            "type": { "binding": "java.lang.String" },
            "userData": { "mapping": "properties.name" }
        },
        {   "localName": "year",
            "type": { "binding": "java.lang.String" },
            "userData": { "mapping": "properties.year" }
        },
        {   "localName": "attendance",
            "type": { "binding": "java.lang.String" },
            "userData": {  "mapping": "properties.attendance" }
        }
    ]
}
```
