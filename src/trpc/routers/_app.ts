import { symbolPairProcedure } from "@/modules/add-symbol-pair/server/procedures";
import { tradeProcedures } from "@/modules/add-trades/server/procedures";
import { z } from "zod";

import { baseProcedure, createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
    hello: baseProcedure
        .input(
            z.object({
                text: z.string(),
            }),
        )
        .query((opts) => {
            return {
                greeting: `hello ${opts.input.text}`,
            };
        }),
    symbolPair: symbolPairProcedure,
    trade: tradeProcedures,
});
// export type definition of API
export type AppRouter = typeof appRouter;
