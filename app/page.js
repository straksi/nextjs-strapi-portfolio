// import { use } from "react"
import Link from "next/link"
import Image from "next/image"

import React  from "react"
async function getTranding(){
	// const  trending = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=' + process.env.NEXT_PUBLIC_API_KEY + '&language=ru-RU')
	const  portfolio = await fetch(process.env.NEXT_PUBLIC_STRAPI_API_URL + '/api/test-collections?populate=*')
	// await wait(4000)
	return portfolio.json()
}
export default async function Home() {
	// let trending = use(getTranding())
	const portfolio = await getTranding()
	// console.log(trending)
	return (
		<>
			{/* <head title='page 1' /> */}
			<section className="portfolio-section">
					<div className="container">
						<h2 className="title center">КОММЕРЧЕСКИЕ ПРОЕКТЫ</h2>
						<div className="portfolio-grid">
							{portfolio?.data.map(item => (
								<div className="portfolio-item" key={item.id}>
									{/* <ViewSource pathname="pages/placeholder.js" /> */}
									<Image fill className="portfolio-item__img"  sizes="100%" alt={item.attributes.title} src={item.attributes.image.data.attributes.url} priority={true}/>
									<a href={item.attributes.link} aria-label={`Перейти на сайт ${item.attributes.title}`} rel="noreferrer" target="_blank" className="portfolio-item__link"></a>
									<div className="portfolio-item__text">
										<span>{item.attributes.title}</span>
									</div>
									<div className="portfolio-item__text go-to">
										<span>Перейти на сайт</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
		</>
	)
}
