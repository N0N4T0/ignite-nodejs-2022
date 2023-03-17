import http from "node:http";
import { Transform } from "node:stream";

class InverseNmberStream extends Transform {
  _transform(chunck, encoding, callback) {
    const transformed = Number(chunck.toString() * -1);

    console.log(transformed);

    callback(null, Buffer.from(String(transformed)));
  }
}

// req => ReadbleStream
// res => WritableStream

const server = http.createServer((req, res) => {
  return req.pipe(new InverseNmberStream()).pipe(res);
});

server.listen(3334);
