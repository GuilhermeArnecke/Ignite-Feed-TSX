import { Header } from "./components/Header.tsx"
import { Post, PostType } from "./components/Post"
import { Sidebar } from "./components/Sidebar.tsx"

import styles from "./App.module.css"

import "./global.css"

// author: { avaar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/GuilhermeArnecke.png",
      name: "Guilherme Arnecke",
      role: "Technical Support in eTriax",
    },
    content: [
      { type: "paragraph", content: "Opa, bão? 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de deixar público meu projeto do Ignite-Feed em TSX.. Passa dar uma olhada no meu repositório!!",
      },
      { type: "link", content: "https://github.com/GuilhermeArnecke/Ignite-Feed-TSX" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://pm1.aminoapps.com/8169/cb84550a7f5345571a22c5c1ea86b64a37cbb76ar1-360-360v2_00.jpg",
      name: "EnzoRachaKabessa",
      role: "transporter of illegal products",
    },
    content: [
      { type: "paragraph", content: "Fala tropinha" },
      {
        type: "paragraph",
        content:
          "Conssegui um novo conjunto de panelas para venda, se alguém estiver a disposição de comprar só comentar que eu chamo no PV!",
      },
      { type: "link", content: "https://www.bing.com/shop?q=conjunto+de+panelas&FORM=SHOPTB" },
    ],
    publishedAt: new Date("2022-05-10 13:14:57"),
  },
]

// iteração

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
