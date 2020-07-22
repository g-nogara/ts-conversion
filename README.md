To run this project, [Docker](https://docs.docker.com/get-docker/ "Get Docker") is recommended.
Furthermore, you will need a [GIPHY API key](https://developers.giphy.com/docs/api#quick-start-guide "Quickstart GIPHY").
To run with docker, we first do:
```bash
docker build -t <imgName> .
```
Where `<igmName>` can be anything you want, without the `<>`. Attention to the (<strong>.</strong>) at the end! It is specifying where our Dockerfile is.

Once the build is complete, we can then run the image with:
```bash
docker run -p <PORTPC>:<PORTDOCKER> -e PORT=<PORTDOCKER> -e giphyKEY=<APIkey> -d <imgName>
```
Where `<PORTPC>` is the port from our network, and `<PORTDOCKER>` is the one passed to docker. `<APIkey>` is the GIPHY API key we got before.
If you are not familiar to ports and networking, `-p <PORTPC>:<PORTDOCKER>` and `-e PORT=<PORTDOCKER>` can be omitted, and 8080 will be selected by default.

And you are done! A simple RESTful API running with Docker.
