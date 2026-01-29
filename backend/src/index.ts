import {Hono} from 'hono'

const app = new Hono()

app.get('/', (c) => {
    return c.text('Welcome to Spassgetränk Service Backend')
})

app.post("/new-entry", async (c) => {
  try{
    const body = await c.req.json()
  if (body.username && body.drink) {
    const new_item: Item = {id: crypto.randomUUID(), username: body.username, drink: body.drink}
    return c.text("new entry has been added", 201)
  }
  else {
    return c.text("send proper input data", 400)
  }
  } catch (e) {
    return c.text("something went wrong", 500)
  }
})

export default app
