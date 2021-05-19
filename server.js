import { createServer, Model } from "miragejs";

function routes() {
  this.namespace = "api";
  this.timing = 100;
  this.logging = false;

  this.get("/items", (schema, request) => {
    return schema.db.items;
  });

  this.post("/items", (schema, request) => {
    let attrs = JSON.parse(request.requestBody);
    schema.items.create(attrs);
    return schema.db.items;
  });

  this.delete("/items/:id", (schema, request) => {
    let id = request.params.id;
    schema.db.items.remove(id);
    return schema.db.items;
  });
}


export default function makeServer() {
  let server = createServer({
    models: {
      item: Model
    },
    routes
  });
  return server;
}