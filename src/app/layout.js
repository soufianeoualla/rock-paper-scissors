import { UserProvider } from "@/lib/authContext";
import "../Sass/main.scss";
export const metadata = {
  title: "Rock Paper Scissors Game",
  description: "Created by Soufiane Oualla",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
