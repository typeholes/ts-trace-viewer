import { z } from 'zod';

export type TypeLine = z.infer<typeof TypeLine>;
export const TypeLine = z.object({
  id: z.number(),
  intrinsicName: z.string().optional(),
  recursionId: z.number().optional(),
  flags: z.array(z.string()).optional(),
  ts: z.number(),
  dur: z.number().optional(),
  display: z.string().optional(),
});

export type TraceLine = z.infer<typeof TraceLine>;
export const TraceLine = z.object({
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
});

export type TraceData = z.infer<typeof TraceData>;
export const TraceData = z.array(TypeLine.or(TraceLine));
