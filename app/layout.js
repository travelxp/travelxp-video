import '@/styles/globals.css'
import "@/videojs/skins/pinko/videojs.min.css";
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
