import * as z from 'zod'

export const IssueSchema = z.object({
    title: z.string(),
    desc: z.string(),
    issueLocation: z.string(),
})