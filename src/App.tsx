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
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
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
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
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
