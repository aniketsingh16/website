import { createClient } from '@sanity/client'
import imageUtlBuilder from '@sanity/image-url';

export const client = createClient(
    {
        projectId: 'qt86r1ow',
        dataset: 'production',
        apiVersion: '2022-02-01',
        useCdn: true,
        token: 'skFjHqH66o2XiwozmwOmrViFd3F9xDzHlPXfm1EWmTqoTIfsUMFeWlzwm0JJk4OI8efa7okaIgqJa0oOjPuAXYu41FcO8VIJMQNfggaAAemFjqIzcp1jthN8FH4r7Iut3rINPJSyoRm8Ojn1M7gTXNbdu6gE64QHpAOuHqAtjyGh1R5lodds'

    }
)

const builder = imageUtlBuilder(client);

export const urlFor = (source) => builder.image(source);
