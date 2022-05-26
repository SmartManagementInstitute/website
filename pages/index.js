import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Card from '../src/components/Card/Card'
import CardContainer from '../src/containers/CardContainer/CardContainer'
import { sortByDate } from '../utils'
import Banner from '../src/components/Banner/Banner'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Smart Management Institute</title>
      </Head>

      <Banner/>
        <CardContainer>
          {posts.map((post, index) => (
            <Card key={index} post={post} />
          ))}
        </CardContainer>
    </>
        )
}

        export async function getStaticProps() {
  //**GET FILES FROM THE POST DIR (FOLDER) */
  const files = fs.readdirSync(path.join('posts'))
        console.log(files)

  //**GET SLUG AND FRONTMATTER FROM POSTS */
  const posts = files.map((filename) => {

    //**CREATE SLUG */
    const slug = filename.replace('.md', '')

        //**GET FRONTMATTER */
        const markdownWithMeta = fs.readFileSync(
        path.join('posts', filename),
        'utf-8'
        )

        const {data: frontmatter } = matter(markdownWithMeta)

        return {
          slug,
          frontmatter,
    }
  })
        console.log(posts)

        return {
          props: {
          posts: posts.sort(sortByDate),
    },
  }
}