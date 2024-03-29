import { Raleway } from '@next/font/google'
// import Nav from './navbar'
import '../styles/style.sass'
export const metadata = {
	title: {
	  default: 'Портфолио',
	//   template: '%s | Acme',
	},
	description: 'Портфолио',
	i18n: {
		locales: ['ru'],
		defaultLocale: 'ru',
	  },
  }
const inter = Raleway({ 
	weight: ['400', '300','600', '700'],
	subsets: ['latin'],
	display: 'swap',
 })
export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body className={inter.className}>
				{/* <Nav/> */}
				<main className="main">
					{children}
				</main>
			</body>
		</html>
	)
}
