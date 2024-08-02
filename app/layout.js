import ThemeProviderWrapper from "../components/ThemeProviderWrapper.js";

export const metadata = {
  title: "Pantry Tracker",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}