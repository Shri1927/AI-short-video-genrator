import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";
import Provider from "./provide";
import {Outfit} from 'next/font/google'

export const metadata = {
  title: "AI Short Video Generator",
  description: "Powered By Gemini",
};

const outFit = Outfit({subsets:['latin']});


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={outFit.className}>
          <Provider>
            {children}
          </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}