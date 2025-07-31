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
                name: z
                    .string()
                    .min(3, {
                        message: "Name must be at least 3 characters",
                    })
                    .max(20, {
                        message: "Name must be at most 20 characters",
                    })
                    .regex(/^[A-Z]{3,10}\/[A-Z]{3,10}$/, {
                        message: "Name must be in format BASE/QUOTE (e.g., BTC/USD)",
                    }),
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
