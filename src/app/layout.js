import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title:
    "Leading IT Consulting Firm, Web Development, WhatsApp Automation, Business Solutions, Social Media Management, Creative Design, UI/UX - Solutn247, London, Canada, Malta.",
  description:
    "Leading IT Consulting Firm, Web Development, WhatsApp Automation, Business Solutions, Social Media Management, Creative Design, UI/UX - Solutn247, London, Canada, Malta.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}

        <div
          class="elfsight-app-dbe07747-d253-48c9-bcd0-1a5dd3bcedaa"
          data-elfsight-app-lazy
        ></div>

        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
      </body>
    </html>
  );
}
