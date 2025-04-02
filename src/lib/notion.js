import { Client } from '@notionhq/client'

export const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
})

export const getPosts = async () => {
  const databaseId = process.env.NOTION_PAGE_ID
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: { property: 'Status', select: { equals: 'Published' } }
  })
  return response.results
}
