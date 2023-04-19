import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel="shortcut icon"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABiklEQVR4nGO4e/fu/4HEDKRqaOjs+a9tafdfzcjyv7qRBQQbW/7XMbf/39LbTz0HNHT2/FczsoDjGzdu/DewcwGz9a0d/ueUVP/fe+gQGGeVVv3XtbIHyxnZuoD1I+sF4VkLFhLvgKtXr/5XN7b4b+LkDhfTMrf7r25k+X/q7Pk4fTN55rz/asYW4NBAFte2sAOHGtEOMHF0BxsEcgiI7xoYDvbF5h07CAbphs1bwWo9giPhYiDfg8SwOZ4BXQAUjyDFDW3dYD4o6EGOiUhJJzpeQxNS4NFGKBQYCAV9V98UcNCTmrhAiRQ5UeIKBQZ8QU9tjC0UGBAutqArJpgN79IJM6DGG6RQ6Z40FRH/xhZ4xcnRg9MBp0+f/m9g6wzWCHaQsdV/Qzvn/7t27cIqDlJPjh682fDYsdNwV4JomAZc4uTqwZsG1JA0ESNOrp5RB4yGwGgIjIbAaAiMhgBRIYBcg+Gr2cjRQ7BFBKrLQXU6ukZc4uToYUD3BT3bgwRDgB6Ygd6+H3StYgDFv/Ty+EbkHAAAAABJRU5ErkJggg=="
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
