import { symbolsPairs } from "@/db/schema";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { z } from "zod";

export const symbolPairProcedure = createTRPCRouter({
    getMany: baseProcedure.query(async ({ ctx }) => {
        return await ctx.db.query.symbolsPairs.findMany();
    }),

    add: baseProcedure
        .input(
            z.object({
                name: z.string(),
            }),
        )
        .mutation(async ({ input, ctx }) => {
            const { name } = input;

            await ctx.db.insert(symbolsPairs).values({
                name,
            });

            return {
                success: true,
            };
        }),
});
