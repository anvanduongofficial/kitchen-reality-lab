import "./globals.css";

export const metadata = {
  title: "Kitchen Reality Checklist",
  description: "Silent mistakes ruining your cooking — even when you follow recipes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
