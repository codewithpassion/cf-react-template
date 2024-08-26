import { Hono } from 'hono';
import { Chatbot } from '@demo/chatbot';

const app = new Hono().basePath('/api');

const route = app.get("/chat", (c) => {
    const chatbot = new Chatbot();
    return c.json({
        message: chatbot.sayHello(),
    })
});


export type AppType = typeof route;

export default app;