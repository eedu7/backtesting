import { z } from "zod";

export const symbolPairFormSchema = z.object({
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
});
