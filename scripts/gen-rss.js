const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'Irfan Ismail',
    site_url: 'https://irfanismail.com',
    feed_url: 'https://irfanismail.com/feed.xml'
  })

  const ideas = await fs.readdir(path.join(__dirname, '..', 'pages', 'ideas'))
  const allIdeas = []
  await Promise.all(
    ideas.map(async (name) => {
      if (name.startsWith('index.')) return

      const content = await fs.readFile(
        path.join(__dirname, '..', 'pages', 'ideas', name)
      )
      const frontmatter = matter(content)

      allIdeas.push({
        title: frontmatter.data.title,
        url: '/ideas/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        categories: frontmatter.data.tag.split(', '),
        author: frontmatter.data.author
      })
    })
  )

  allIdeas.sort((a, b) => new Date(b.date) - new Date(a.date))
  allIdeas.forEach((post) => {
    feed.item(post)
  })
  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
