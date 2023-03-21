import { Readable, Transform, Writable } from "node:stream";

class OneToHundredStrem extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));

        this.push(buf);
      }
    }, 1000);
  }
}

class InverseNmberStream extends Transform {
  _transform(chunck, encoding, callback) {
    const transformed = Number(chunck.toString() * -1);

    callback(null, Buffer.from(String(transformed)));
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunck, encoding, callback) {
    console.log(Number(chunck.toString()) * 10);
    callback();
  }
}

new OneToHundredStrem()
  .pipe(new InverseNmberStream())
  .pipe(new MultiplyByTenStream());