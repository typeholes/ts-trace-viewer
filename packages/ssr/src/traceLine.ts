import z from 'zod';

export type TraceLine = z.infer<typeof TraceLine>;
export const TraceLine = z.array(
  z.object({
    pid: z.number(),
    tid: z.number(),
    ph: z.string(),
    cat: z.string(),
    ts: z.number(),
    name: z.string(),
    dur: z.number().optional(),
    args: z
      .object({
        kind: z.number().optional(),
        pos: z.number().optional(),
        end: z.number().optional(),
        path: z.string().optional(),
        results: z
          .object({
            typeId: z.number().optional(),
          })
          .optional(),
      })
      .optional(),
  }),
);
