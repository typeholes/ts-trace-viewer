import Fastify from 'fastify';
import * as path from 'path';
import ws from '@fastify/websocket';

import {
   fastifyTRPCPlugin,
   FastifyTRPCPluginOptions,
} from '@trpc/server/adapters/fastify';
import { AppRouter, createContext, mkAppRouter } from './router';

import fastifyStatic from '@fastify/static';

export async function startServer() {
   const fastify = Fastify({
      logger: true,
      maxParamLength: 5000,
   });

   const appRouter = mkAppRouter();

   fastify.register(ws);

   fastify.register(fastifyTRPCPlugin, {
      prefix: '/trpc',
      trpcOptions: {
         router: appRouter,
         createContext,
         onError({ path, error }) {
            // report to error monitoring
            console.error(`Error in tRPC handler on path '${path}':`, error);
         },
      } satisfies FastifyTRPCPluginOptions<AppRouter>['trpcOptions'],
   });

   fastify.register(fastifyStatic, {
      root: path.join(__dirname, '..', 'static'),
      prefix: '/app/', // optional: default '/'
      //   constraints: { host: 'localhost' }, // optional: default {}
   });

   // // Declare a route
   // fastify.get('/', async function handler(request, reply) {
   //    return { hello: 'world' };
   // });

   try {
      await fastify.listen({ port: 3000 });
   } catch (err) {
      fastify.log.error(err);
   }
}
