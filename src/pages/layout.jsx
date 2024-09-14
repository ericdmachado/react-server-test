import Providers from "../providers";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Server Test</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
