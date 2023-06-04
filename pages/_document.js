// import Head from 'next/head'
// import Image from 'next/image'
// import axios from "axios";
// import ViewSource from '../components/view-source'
// const Home = ({ portfolio, error }) => {
// 	// console.log(process.env.NEXT_PUBLIC_STRAPI_API_URL + '/api/test-collections?populate=*')
// 	return (
// 		<>
// 			<Head>
// 				<title>Portfolio</title>
// 				<meta name="description" content="Generated by create next app" />
// 				<link rel="icon" href="https://res.cloudinary.com/dywntxij1/image/upload/v1661285257/favicon_o1dzo6.ico" />
// 			</Head>
// 			<main className="main">
// 				<section className="portfolio-section">
// 					<div className="container">
// 						<h2 className="title center">КОММЕРЧЕСКИЕ ПРОЕКТЫ</h2>
// 						<div className="portfolio-grid">
// 							{portfolio?.data.map(item => (
// 								<div className="portfolio-item" key={item.id}>
// 									<ViewSource pathname="pages/placeholder.js" />
// 									<Image className="portfolio-item__img" src={item.attributes.image.data.attributes.url} layout='fill' alt={item.attributes.image.data.attributes.alternativeText} priority={true}/>
// 									<a href={item.attributes.link} rel="noreferrer" target="_blank" className="portfolio-item__link"></a>
// 									<div className="portfolio-item__text">
// 										<span>{item.attributes.title}</span>
// 									</div>
// 									<div className="portfolio-item__text go-to">
// 										<span>Перейти на сайт</span>
// 									</div>
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				</section>
// 			</main>
// 		</>
// 	)
// }
// Home.getInitialProps = async ctx => {
// 	try {
// 		const res = await axios.get(process.env.NEXT_PUBLIC_STRAPI_API_URL + '/api/test-collections?populate=*');
// 		const portfolio = res.data;
// 		return { portfolio };
// 	} catch (error) {
// 		return { error };
// 	}
// };
// export default Home;
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}